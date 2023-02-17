import { createSlice } from '@reduxjs/toolkit'

export const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    sidebarUnfoldable: false,
    sidebarShow: true,
  },
  reducers: {
    setSidebarUnfoldable: (state, action) => {
      state.sidebarUnfoldable = action.payload
    },
    setSidebarShow: (state, action) => {
      state.sidebarShow = action.payload
    },
  }
})

export const { setSidebarUnfoldable, setSidebarShow } = uiSlice.actions
export default uiSlice.reducer