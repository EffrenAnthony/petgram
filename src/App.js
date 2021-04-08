import React from 'react'
import { ListOfCategories } from './components/ListOfCategories'
import { ListOfPhotoCards } from './components/ListOfPhotoCards'
import Logo from './components/Logo'
import { PhotoCardWithQuery } from './container/PhotoCardWithQuery'
import { GlobalStyles } from './styles/GlobalStyles'
const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search)

  const detailId = urlParams.get('detail')
  console.log(detailId)

  return (
    <div>
      <GlobalStyles />
      <Logo />
      {
        detailId
          ? <PhotoCardWithQuery id={detailId} />
          : <><ListOfCategories /><ListOfPhotoCards /></>
      }
    </div>
  )
}

export default App
