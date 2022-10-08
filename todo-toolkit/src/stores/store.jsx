import { configureStore } from '@reduxjs/toolkit'

import todo from './todo'
import auth from './auth'
import modal from './modal'

const store = configureStore({
  reducer: {
    todo: todo,
    auth: auth,
    //auth
    modal: modal,
  },
})

export default store
