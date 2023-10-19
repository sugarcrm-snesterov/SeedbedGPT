import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "../../app/store"

export type ChatSettings = {
  systemRole: string
  model: string
  temperature: number
}

// Define the initial state using that type
const initialState: ChatSettings = {
  systemRole:
    "Act as a quality analyst who is highly experienced in behavioral driven development and developing well-constructed Gherkin Scenarios from supplied requirements.",
  model: "gpt-3.5-turbo",
  temperature: 0,
}

export const counterSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    setSystemRole: (state, action: PayloadAction<string>) => {
      state.systemRole = action.payload
    },
    setModel: (state, action: PayloadAction<string>) => {
      state.model = action.payload
    },
    setTemperature: (state, action: PayloadAction<number>) => {
      state.temperature = action.payload
    },
  },
})

export const { setSystemRole } = counterSlice.actions
export const { setModel } = counterSlice.actions
export const { setTemperature } = counterSlice.actions

export const selectSystemRole = (state: RootState) => state.settings.systemRole
export const selectTemperature = (state: RootState) =>
  state.settings.temperature
export const selectModel = (state: RootState) => state.settings.model

export default counterSlice.reducer
