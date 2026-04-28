import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDGx7cViKYgTQ7cECXkViaKJ_Ln-R5nJdU',
  authDomain: 'learngenaiml.firebaseapp.com',
  projectId: 'learngenaiml',
  storageBucket: 'learngenaiml.firebasestorage.app',
  messagingSenderId: '262763543035',
  appId: '1:262763543035:web:b9ff6e8d0767bd8df5f35e',
  measurementId: 'G-BJBLPDWGYB',
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
export const googleProvider = new GoogleAuthProvider()
