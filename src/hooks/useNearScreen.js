import { useEffect, useRef, useState } from 'react'

export function useNearScreen () {
  const element = useRef(null)
  const [show, setShow] = useState(false)
  useEffect(() => {
    // ? de esta forma cargamos el Polifill solo cuando es necesario
    Promise.resolve(
      typeof window.IntersectionObserver !== 'undefined'
        ? window.IntersectionObserver
        : import('intersection-observer')
    ).then(() => {
      const observer = new window.IntersectionObserver(function (entries) {
        const { isIntersecting } = entries[0]
        if (isIntersecting) {
          setShow(true)
          // para que solo se actualice una ves, solo cuando esta en el viewporet del usuario
          observer.disconnect()
        }
      })
      observer.observe(element.current)
    })
  }, [element])
  return [show, element]
}
