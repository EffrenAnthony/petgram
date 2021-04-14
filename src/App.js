/* eslint-disable react/jsx-indent */
import React from 'react'
import Logo from './components/Logo'
import { Home } from './pages/Home'
import { GlobalStyles } from './styles/GlobalStyles'

import { Router } from '@reach/router'
import { Detail } from './pages/Detail'
import { NavBar } from './components/Navbar'
import { Favs } from './pages/Favs'
import { User } from './pages/User'
import { NotRegisterUser } from './pages/NotRegisterUser'
import { useAuthContext } from './context'
const App = () => {
  // const urlParams = new window.URLSearchParams(window.location.search)

  // const detailId = urlParams.get('detail')
  // console.log(detailId)
  const { isAuth } = useAuthContext()
  const UserLogged = ({ children }) => {
    return children({ isAuth: isAuth })
  }
  return (
    <div>
      <GlobalStyles />
      <Logo />
      <Router>
        <Home path='/' />
        <Home path='/pet/:categoryId' />
        <Detail path='/detail/:detailId' />
        {/* <NotRegisterUser path='/favs' />
        <NotRegisterUser path='/user' />
        <Favs path='/favs' />
        <User path='/user' /> */}
      </Router>
      <UserLogged>
        {
          ({ isAuth }) =>
            isAuth
              ? <Router>
                <Favs path='/favs' />
                <User path='/user' />
                </Router>
              : <Router>
                <NotRegisterUser path='/favs' />
                <NotRegisterUser path='/user' />
                </Router>
        }
      </UserLogged>
      <NavBar />
      {/* {
        detailId
          ? <Detail />
          : <Router>
              <Home path='/' />
              <Home path='/pet/:categoryId' />
            </Router>
      } */}
    </div>
  )
}

export default App
