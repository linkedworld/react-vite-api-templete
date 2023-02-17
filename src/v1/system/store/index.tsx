import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'

import counterReducer from './slice/counterSlice'
import loginReducer from './slice/loginSlice'
import uiReducer from './slice/uiSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    login: loginReducer,
    ui: uiReducer,
  }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>

export default store