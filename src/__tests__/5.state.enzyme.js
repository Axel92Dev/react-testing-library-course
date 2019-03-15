import React from 'react'
import Enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {FavoriteNumber} from '../favorite-number'

Enzyme.configure({adapter: new Adapter()})

test('a try with enzyme', () => {
  const myComp = shallow(<FavoriteNumber />)

  expect(myComp.exists()).toBe(true)
})
