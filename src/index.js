import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ApolloClient, InMemoryCache } from '@apollo/client'
import { ApolloProvider } from '@apollo/client/react'
import { AuthProvider } from './context'

const client = new ApolloClient({
  uri: 'https://petgramserver-9na7gnxdl-effrenanthony.vercel.app/graphql',
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
