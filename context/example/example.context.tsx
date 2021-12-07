import React, { createContext, ReactElement } from 'react'
import { BaseContext, CustomDispatch, dispatchHook, stateHook } from '@caramelpoint/contuxt'
import { ExampleStore } from './example.reducer.types'
import { ExampleActionTypes } from './example.actions.types'
import { exampleReducer, initialExampleStore } from './example.reducer'

const ExampleStoreContext = createContext<ExampleStore | undefined>(undefined)

const ExampleDispatchContext = createContext<CustomDispatch<ExampleActionTypes, ExampleStore> | undefined>(undefined)

const CounterProvider = ({ children }: { children: React.ReactNode }): ReactElement => {
  return (
    <BaseContext<ExampleActionTypes, ExampleStore>
      reducer={exampleReducer}
      initialReducerStore={initialExampleStore}
      storeContext={ExampleStoreContext}
      dispatchContext={ExampleDispatchContext}
    >
      {children}
    </BaseContext>
  )
}

function useCounterState() {
  return stateHook<ExampleStore>(ExampleStoreContext)
}

function useCounterDispatch() {
  return dispatchHook<ExampleActionTypes, ExampleStore>(ExampleDispatchContext)
}
function useCounter() {
  return { state: useCounterState(), dispatch: useCounterDispatch() }
}

export { CounterProvider, useCounter, useCounterState, useCounterDispatch }
