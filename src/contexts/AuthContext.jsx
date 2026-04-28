import { createContext, useContext, useEffect, useState } from 'react'
import {
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from 'firebase/auth'
import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  serverTimestamp,
  increment,
} from 'firebase/firestore'
import { auth, db, googleProvider } from '../firebase'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        await recordVisit(firebaseUser)
      }
      setUser(firebaseUser)
      setLoading(false)
    })
    return unsub
  }, [])

  // Called on every page load while authenticated (tracks visits)
  const recordVisit = async (firebaseUser) => {
    const ref = doc(db, 'users', firebaseUser.uid)
    const snap = await getDoc(ref)
    if (!snap.exists()) {
      await setDoc(ref, {
        email: firebaseUser.email,
        displayName: firebaseUser.displayName,
        photoURL: firebaseUser.photoURL,
        firstLoginAt: serverTimestamp(),
        lastVisitAt: serverTimestamp(),
        loginCount: 1,   // explicit sign-ins
        visitCount: 1,   // page loads while authenticated
        courseProgress: { topics: {}, notes: {}, quiz: {} },
      })
    } else {
      // Check if this is a fresh explicit sign-in (set before popup resolved)
      const isExplicitLogin = sessionStorage.getItem('explicit_login') === '1'
      sessionStorage.removeItem('explicit_login')

      await updateDoc(ref, {
        lastVisitAt: serverTimestamp(),
        visitCount: increment(1),
        ...(isExplicitLogin && { loginCount: increment(1) }),
        displayName: firebaseUser.displayName,
        photoURL: firebaseUser.photoURL,
      })
    }
  }

  const signInWithGoogle = async () => {
    sessionStorage.setItem('explicit_login', '1')
    return signInWithPopup(auth, googleProvider)
  }

  const signOutUser = () => signOut(auth)

  return (
    <AuthContext.Provider value={{ user, loading, signInWithGoogle, signOutUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
