import React from 'react'
import { Layout } from '../components/Layout'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCards } from '../components/ListOfPhotoCards'
// import { Helmet } from 'react-helmet'
const HomePage = ({ categoryId }) => {
  return (
    <>
      {/* <Helmet>
        <title>Petgram - Tu App de fotos de mascotas</title>
        <meta name='description' content='Con Petgram puedes encontrar fotos de animales domesticos' />
      </Helmet> */}
      <Layout title='Tu App de fotos de mascotas' subtitle='Con Petgram puedes encontrar fotos de animales domesticos'>
        <ListOfCategories />
        <ListOfPhotoCards categoryId={categoryId} />
      </Layout>
    </>
  )
}

// pasandole esta función, le indicamos si las props anteriores son diferentes a las neuvas, si es asi, re redndirazará , si so iguales no
export const Home = React.memo(HomePage, (prevProps, props) => {
  return prevProps.categoryId === props.categoryId
})
