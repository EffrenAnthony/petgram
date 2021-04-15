import React from 'react'
import { FavsWithQuery } from '../container/GetFavorites'
// import { Helmet } from 'react-helmet'
import { Layout } from '../components/Layout'
// export const Favs = () => {
//  ? En este caso exportamos por default para que cuando usemos react lazy, tengamos el componente por feault y lo podamos importar directamente
export default () => {
  return (
    <>
      {/* <Helmet>
        <title>Petgram - tus favoritos</title>
        <meta name='description' content='Aqui puede encontrar tus favoritos' />
      </Helmet> */}
      <Layout title='Tus favoritos' subtitle='Aqui puedes encontrar tus favoritos'>
        {/* <h1>Favs</h1> */}
        <FavsWithQuery />
      </Layout>
    </>
  )
}
