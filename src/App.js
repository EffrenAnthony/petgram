/* eslint-disable react/jsx-indent */
import React, { Suspense } from 'react'
import Logo from './components/Logo'
import { Home } from './pages/Home'
import { GlobalStyles } from './styles/GlobalStyles'

import { Router, Redirect } from '@reach/router'
// import { Detail } from './pages/Detail'
import { NavBar } from './components/Navbar'
// import { Favs } from './pages/Favs'
import { User } from './pages/User'
import { NotRegisterUser } from './pages/NotRegisterUser'
import { useAuthContext } from './context'
import { NotFound } from './pages/NotFound'

// ? Haciendo este import, hacemos que react únicamente importe el componente cuando lo necesita
const Favs = React.lazy(() => import('./pages/Favs'))
const Detail = React.lazy(() => import('./pages/Detail'))

const App = () => {
  // const urlParams = new window.URLSearchParams(window.location.search)
  // const detailId = urlParams.get('detail')
  // console.log(detailId)
  const { isAuth } = useAuthContext()
  // const UserLogged = ({ children }) => {
  //   return children({ isAuth: isAuth })
  // }
  // ? React Lazy necsita que el componente padre envuelva en Suspense y pasemos un fallback mintras carga, puede ser el div o n progress indicator<
  return (
    <Suspense fallback={<div />}>
      <GlobalStyles />
      <Logo />
      <Router>
        <NotFound default />
        <Home path='/' />
        <Home path='/pet/:categoryId' />
        <Detail path='/detail/:detailId' />
        {!isAuth && <NotRegisterUser path='/login' />}
        {/* notThrow evita que renderice la redicción 2 veces */}
        {!isAuth && <Redirect from='/favs' to='/login' noThrow />}
        {!isAuth && <Redirect from='/user' to='/login' noThrow />}
        {isAuth && <Redirect from='/login' to='/' noThrow />}
        <Favs path='/favs' />
        <User path='/user' />
        {/* <NotRegisterUser path='/favs' />
        <NotRegisterUser path='/user' />
        <Favs path='/favs' />
        <User path='/user' /> */}
      </Router>
      {/* <UserLogged>
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
      </UserLogged> */}
      <NavBar />
      {/* {
        detailId
          ? <Detail />
          : <Router>
              <Home path='/' />
              <Home path='/pet/:categoryId' />
            </Router>
      } */}
    </Suspense>
  )
}

export default App
