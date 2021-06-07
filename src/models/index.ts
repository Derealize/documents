import controllesModel, { ControllesModel } from './controlles'

export interface StoreModel {
  controlles: ControllesModel
}

const storeModel: StoreModel = {
  controlles: controllesModel,
}

export default storeModel
