import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import chatSettingsReducer from "../features/settings/settings-slice"
import { chatApi } from "../features/chat/chat-api"

export const store = configureStore({
  reducer: {
    settings: chatSettingsReducer,
    [chatApi.reducerPath]: chatApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(chatApi.middleware)
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
