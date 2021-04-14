import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ApolloClient, InMemoryCache, createHttpLink, from, ApolloLink } from '@apollo/client'
import { ApolloProvider } from '@apollo/client/react'
import { AuthProvider } from './context'
// import { setContext } from '@apollo/client/link/context'
import { onError } from '@apollo/client/link/error'

const httpLink = createHttpLink({
  uri: 'https://petgramserver-9na7gnxdl-effrenanthony.vercel.app/graphql'
})

const authMiddleware = new ApolloLink((operation, forward) => {
  const token = window.sessionStorage.getItem('token')
  if (token) {
    operation.setContext({
      headers: {
        authorization: `Bearer ${token}`
      }
    })
  }
  return forward(operation)
})

const errorMiddleware = onError(({ networkError }) => {
  if (networkError && networkError.result.code === 'invalid_token') {
    window.sessionStorage.removeItem('token')
    window.location.href = '/favs'
  }
})

// const authLink = setContext((_, { headers }) => {
//   // get the authentication token from local storage if it exists
//   const token = window.sessionStorage.getItem('token')
//   // return the headers to the context so httpLink can read them
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : ''
//     }
//   }
// })
const client = new ApolloClient({
  link: from([
    errorMiddleware,
    authMiddleware,
    httpLink
    // authLink.concat(httpLink),
  ]),
  cache: new InMemoryCache()
})

ReactDOM.render(
  <AuthProvider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </AuthProvider>,
  document.getElementById('app')
)
