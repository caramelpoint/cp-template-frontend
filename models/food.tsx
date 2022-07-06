import { action, thunk } from 'easy-peasy'
import { FoodModel, IFood } from '../types/food-model.type'

const FoodData: FoodModel = {
  foods: [
    { id: 21, name: 'Broccoli', price: 2, purchased: false },
    { id: 22, name: 'Carrots', price: 4, purchased: true },
    { id: 23, name: 'Apple', price: 8, purchased: false },
  ],
  //Actions
  toggle: action((state, id) => {
    state.foods.map((food: IFood) => {
      if (food.id === Number(id)) {
        food.purchased = !food.purchased
      }
      return food
    })
  }),
  add: action((state, food) => {
    //food.id = Math.floor(Math.random() * 20);
    //food.name = "lala";
    //food.price = 0;
    //food.purchased = false;
    state.foods = [...state.foods, food]
  }),
  setFood: action((state, comida: IFood[]) => {
    state.foods = comida
  }),

  //Thunks
  updateThunk: thunk(async action => {
    const comidas = [
      { id: 21, name: 'Broccoli', price: 2, purchased: false },
      { id: 22, name: 'Carrots', price: 4, purchased: true },
      { id: 23, name: 'Apple', price: 8, purchased: false },
      { id: 23, name: 'Onion', price: 8, purchased: false },
      { id: 23, name: 'Watermelon', price: 8, purchased: false },
    ]

    const response: IFood[] = await new Promise(resolve =>
      setTimeout(() => {
        resolve(comidas)
      }, 300)
    )

    action.setFood(response)
  }),
}

export default FoodData
