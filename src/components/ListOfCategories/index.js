import React from 'react'
import { Category } from '../Category'
import { Item, List } from './styles'

export const ListOfCategories = () => {
  return (
    <List>
      {
        [1, 2, 3, 4].map(category => (
          <Item key={category}>
            <Category />
          </Item>
        ))
      }
    </List>
  )
}
