import React, { useEffect, useRef, useState } from 'react'
import { Article, Button, Img, ImgWrapper } from './styles'
import { MdFavoriteBorder } from 'react-icons/md'

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1452857297128-d9c29adba80b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const element = useRef(null)
  const [show, setShow] = useState(false)

  useEffect(() => {
    const observer = new window.IntersectionObserver(function (entries) {
      const { isIntersecting } = entries[0]
      console.log(isIntersecting)
      if (isIntersecting) {
        console.log('si')
        setShow(true)
        // para que solo se actualice una ves, solo cuando esta en el viewporet del usuario
        observer.disconnect()
      }
    })
    observer.observe(element.current)
  }, [element])

  return (
    <Article ref={element}>
      {
        show &&
          <>
            <a href={`/detail/${id}`}>
              <ImgWrapper>
                <Img src={src} />
              </ImgWrapper>
            </a>
            <Button>
              <MdFavoriteBorder size='32px' /> {likes} likes!
            </Button>
          </>
      }
    </Article>
  )
}
