import { createStore, persist, PersistConfig, createTypedHooks } from 'easy-peasy'
import model, { StoreModel } from './models'

export const { useStoreActions, useStoreDispatch, useStoreState } = createTypedHooks<StoreModel>()

const store = createStore(persist(model))

const debugStore = createStore(model)

// export default window.env.isDev ? debugStore : store
export default debugStore
