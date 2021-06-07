import { Action, action } from 'easy-peasy'

export interface ControllesModel {
  className: string
  setClassName: Action<ControllesModel, string>
}

const controllesModel: ControllesModel = {
  className: '',
  setClassName: action((state, payload) => {
    state.className = payload
  }),
}

export default controllesModel
