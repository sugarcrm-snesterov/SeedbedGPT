import { createSlice } from "@reduxjs/toolkit"
import { type PayloadAction } from "@reduxjs/toolkit"
import { type RootState } from "../../app/store"
import { type DialogItem } from "./ChatPanel"

export type ChatState = {
  dialog: DialogItem[]
}

// Define the initial state using that type
const initialState: ChatState = {
  dialog: [],
}

export const counterSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    addDialogItem: (state, action: PayloadAction<DialogItem[]>) => {
      state.dialog = [...state.dialog, ...action.payload]
    },
    setDialog: (state, action: PayloadAction<DialogItem[]>) => {
      state.dialog = action.payload
    },
  },
})

export const { addDialogItem, setDialog } = counterSlice.actions

export const selectDialog = (state: RootState) => state.chat.dialog

export default counterSlice.reducer
