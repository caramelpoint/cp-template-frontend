/* eslint-disable no-undef*/

import { createStore } from 'easy-peasy'
import FoodItem from '../components/ShopList/FoodItem'
import FoodData from '../models/model'

test('is working', () => {
  // arrange
  const todo = { id: 30, name: 'hola', price: 31, purchased: false }
  const store = createStore(FoodData)

  // act
  store.getActions().add(todo)

  // assert
  expect(store.getState().foods).toEqual([todo])
})

export { }
