/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { useQuery, gql } from '@apollo/client'
import { ListOfFavs } from '../components/ListOfFavs'

const GET_FAVS = gql`
query getFavs {
  favs {
    id
    categoryId
    src
    likes
    userId
  }
}
`
export const FavsWithQuery = () => {
  const { loading, data, error } = useQuery(GET_FAVS, {
    // no se fiará de la caché y siempre usará el query
    fetchPolicy: 'network-only'
  })
  if (error) {
    return <h2>Internal Server Error</h2>
  }
  if (loading) {
    return <h2>Loading...</h2>
  }
  const { favs } = data
  return (
    <>
      <ListOfFavs favs={favs} />
    </>
  )
}
