import elementModel, { ElementModel } from './element'
import controllesModel, { ControllesModel } from './controlles/controlles'
import layoutModel, { LayoutModel } from './controlles/layout'
import spacingModel, { SpacingModel } from './controlles/spacing'
import borderModel, { BorderModel } from './controlles/border'
import typographyModel, { TypographyModel } from './controlles/typography'
import backgroundModel, { BackgroundModel } from './background'
import effectsModel, { EffectsModel } from './controlles/effects'

export interface StoreModel {
  element: ElementModel
  controlles: ControllesModel
  layout: LayoutModel
  spacing: SpacingModel
  border: BorderModel
  typography: TypographyModel
  background: BackgroundModel
  effects: EffectsModel
}

const storeModel: StoreModel = {
  element: elementModel,
  controlles: controllesModel,
  layout: layoutModel,
  spacing: spacingModel,
  border: borderModel,
  typography: typographyModel,
  background: backgroundModel,
  effects: effectsModel,
}

export default storeModel
