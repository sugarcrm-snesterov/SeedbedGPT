import { createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit"
import { actions } from "../features/settings/settings-slice"
import type { RootState } from "./store"

const actionItems = Object.values(actions)

const KEY = "gpt-store"

export const localStorageMiddleware = createListenerMiddleware()
localStorageMiddleware.startListening({
  matcher: isAnyOf(...actionItems),
  effect: (action, listenerApi) =>
    localStorage.setItem(
      KEY,
      JSON.stringify((listenerApi.getState() as RootState).settings),
    ),
})

export const preloadState = () => {
  const storedData = localStorage.getItem(KEY)
  let jsonData = null

  if (storedData) {
    try {
      jsonData = JSON.parse(storedData)
    } catch (e) {
      localStorage.removeItem(KEY)
    }
  }

  return {
    settings: jsonData,
  }
}
