import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import chatSettingsReducer from "../features/settings/settings-slice"
import chatReducer from "../features/chat/chat-slice"
import { chatApi } from "../features/chat/chat-api"
import { localStorageMiddleware, preloadState } from "./localstorage-middleware"

export const store = configureStore({
  reducer: {
    chat: chatReducer,
    settings: chatSettingsReducer,
    [chatApi.reducerPath]: chatApi.reducer,
  },
  preloadedState: preloadState(),
  middleware: (getDefaultMiddleware) => {
    return [
      ...getDefaultMiddleware(),
      localStorageMiddleware.middleware,
      chatApi.middleware,
    ]
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
