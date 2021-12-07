import { CustomDispatch } from '@caramelpoint/contuxt'
import { ExampleActionTypes } from './example.actions.types'

export type ExampleStore = {
  counter: number
}

export type ExampleDispatch = CustomDispatch<ExampleActionTypes, ExampleStore>
