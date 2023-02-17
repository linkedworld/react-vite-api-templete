import { createSlice } from '@reduxjs/toolkit'

export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    isLogedIn: false,
    accessToken: "",
    loginId: "",
    loginPassword: ""
  },
  reducers: {
    setIsLogedIn: (state, action) => {
      state.isLogedIn = action.payload
    },
    setToken: (state, action) => {
      state.accessToken = action.payload
    }
  }
})

export const { setToken, setIsLogedIn } = loginSlice.actions
export default loginSlice.reducer