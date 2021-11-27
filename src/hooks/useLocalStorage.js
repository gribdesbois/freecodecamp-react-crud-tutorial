import { useState, useEffect } from 'react'

const useLocalStorage = (key, initialValue) => { //! lazy init
  const [value, setValue] = useState(() => { // ! code inside useState is executed
    try { //!                                      only once
      const localValue = window.localStorage.getItem(key)
      return localValue ? JSON.parse(localValue) : initialValue
    } catch (error) {
      return initialValue
    }
  })
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value))
  }, [key, value]) // ! if there is any change in [key, value] we update local storage

  return [value, setValue]
}

export default useLocalStorage
