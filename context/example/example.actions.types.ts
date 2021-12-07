export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

interface Increment {
  type: typeof INCREMENT
}

interface Decrement {
  type: typeof DECREMENT
}

export type ExampleActionTypes = Increment | Decrement
