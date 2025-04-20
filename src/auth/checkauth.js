import { getAuth, onAuthStateChanged } from 'firebase/auth'

export function checkAuth() {
  const auth = getAuth()

  return new Promise((resolve) => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      unsubscribe()
      resolve(!!user)
    })
  })
}
