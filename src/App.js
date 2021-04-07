import React from 'react'
import { ListOfCategories } from './components/ListOfCategories'
import { ListOfPhotoCards } from './components/ListOfPhotoCards'
import Logo from './components/Logo'
import { GlobalStyles } from './styles/GlobalStyles'

const App = () => {
  return (
    <div>
      <Logo />
      <GlobalStyles />
      <ListOfCategories />
      <ListOfPhotoCards />
    </div>
  )
}

export default App
