import { INCREMENT, ExampleActionTypes } from './example.actions.types'
import { ExampleStore, ExampleDispatch } from './example.reducer.types'

export const increment = (): ExampleActionTypes => {
  return { type: INCREMENT }
}

export const incrementIfOdd = () => (dispatch: ExampleDispatch, state: ExampleStore) => {
  const { counter } = state
  if (counter % 2 !== 0) {
    dispatch({ type: 'INCREMENT' })
  }
}
export const incrementAsync = () => async (dispatch: ExampleDispatch) => {
  dispatch(increment())
  await setTimeout(() => {
    dispatch(increment())
  }, 2000)
}
