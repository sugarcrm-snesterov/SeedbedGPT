import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "../../app/store"

export type ChatSettings = {
  systemRole: string
}

// Define the initial state using that type
const initialState: ChatSettings = {
  systemRole:
    "Act as a quality analyst who is highly experienced in behavioural driven development and developing well-constructed Gherkin Scenarios from supplied requirements.",
}

export const counterSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    setSystemRole: (state, action: PayloadAction<string>) => {
      state.systemRole = action.payload
    },
  },
})

export const { setSystemRole } = counterSlice.actions

export const selectSystemRole = (state: RootState) => state.settings.systemRole

export default counterSlice.reducer
