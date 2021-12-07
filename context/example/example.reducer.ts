import { ExampleActionTypes, INCREMENT } from './example.actions.types'
import { ExampleStore } from './example.reducer.types'

export const initialExampleStore: ExampleStore = {
  counter: 0
}

export const exampleReducer = (state: ExampleStore, action: ExampleActionTypes): ExampleStore => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        counter: state.counter + 1
      }
    default: {
      throw new Error(`Unhandled action type: ${action}`)
    }
  }
}
