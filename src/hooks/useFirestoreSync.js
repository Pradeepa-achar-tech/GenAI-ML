import { useCallback, useEffect, useRef, useState } from 'react'
import { doc, getDoc, updateDoc } from 'firebase/firestore'
import { db } from '../firebase'

const DEBOUNCE_MS = 1500

export default function useFirestoreSync(user) {
  const [cloudProgress, setCloudProgress] = useState(null)
  const [loadingCloud, setLoadingCloud] = useState(false)
  const debounceRef = useRef(null)

  // Fetch progress from Firestore whenever the logged-in user changes
  useEffect(() => {
    if (!user) {
      setCloudProgress(null)
      return
    }
    setLoadingCloud(true)
    getDoc(doc(db, 'users', user.uid)).then((snap) => {
      if (snap.exists()) {
        const data = snap.data()
        setCloudProgress(data.courseProgress ?? { topics: {}, notes: {}, quiz: {} })
      }
      setLoadingCloud(false)
    })
  }, [user?.uid])

  // Debounced write of progress back to Firestore
  const syncProgress = useCallback(
    (progressState) => {
      if (!user) return
      if (debounceRef.current) clearTimeout(debounceRef.current)
      debounceRef.current = setTimeout(async () => {
        try {
          await updateDoc(doc(db, 'users', user.uid), {
            courseProgress: progressState,
          })
        } catch (err) {
          console.warn('Firestore sync failed:', err)
        }
      }, DEBOUNCE_MS)
    },
    [user?.uid]
  )

  return { cloudProgress, loadingCloud, syncProgress }
}
