//🐨 import jest-dom/extend-expect
import React from 'react'
import ReactDOM from 'react-dom'
import {FavoriteNumber} from '../favorite-number'

test('renders a number input with a label "Favorite Number"', () => {
  const div = document.createElement('div')
  ReactDOM.render(<FavoriteNumber />, div)
  // 🐨 change this to use jest-dom's `toHaveAttribute` assertion
  expect(div.querySelector('input').type).toBe('number')
  // 🐨 change this to use jest-dom's `toHaveTextContent` assertion
  expect(div.querySelector('label').textContent).toBe('Favorite Number')
})
