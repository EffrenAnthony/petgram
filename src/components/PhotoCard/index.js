import React from 'react'
import { Article, Img, ImgWrapper } from './styles'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useNearScreen } from '../../hooks/useNearScreen'
import { FavButton } from '../FavButton'
import { ToggleLikeMutation } from '../../container/ToggleLikeMutation'
import { Link } from '@reach/router'

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1452857297128-d9c29adba80b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, element] = useNearScreen()
  const key = `like-${id}`
  const [liked, setLiked] = useLocalStorage(key, false)
  const { mutation, mutationLoading, mutationError } = ToggleLikeMutation()
  // ? debe estar en mayuscula para que react sepa que queremos renderizar un componente
  // const Icon = liked ? MdFavorite : MdFavoriteBorder
  const handleFavClick = () => {
    !liked && mutation({
      variables: {
        input: { id }
      }
    })
    setLiked(!liked)
  }
  console.log('{ mutation, mutationLoading, mutationError }', { mutation, mutationLoading, mutationError })
  return (
    <Article ref={element}>
      {
        show &&
          <>
            {/* <Link href={`/?detail=${id}`}> */}
            <Link to={`/detail/${id}`}>
              <ImgWrapper>
                <Img src={src} />
              </ImgWrapper>
            </Link>
            <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
          </>
      }
    </Article>
  )
}
