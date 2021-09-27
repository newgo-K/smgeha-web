import { AxiosError } from 'axios';
import {
  reqProductsMainMenuSelectPacket,
  resProductPacket,
} from 'lib/api/product';
import {
  createActionEntity,
  createAsyncActionType,
} from 'lib/common/reducerUtils';
import { createAction } from 'typesafe-actions';

/////////////////////////////////////
// createActionType
/////////////////////////////////////
export const PRODUCTS_MAIN_MENU_SELECT = 'products/PRODUCTS_MAIN_MENU_SELECT';
export const REQ_PRODUCTS_INIT = createAsyncActionType(
  'products/REQ_PRODUCTS_INIT',
);
export const REQ_PRODUCTS_MAIN_MENU_SELECT = createAsyncActionType(
  'products/REQ_PRODUCTS_MAIN_MENU_SELECT',
);

/////////////////////////////////////
// createActionEntity
/////////////////////////////////////
export const productsMainMenuSelect = createAction(
  PRODUCTS_MAIN_MENU_SELECT,
)<any>();
export const productsInitAsync = createActionEntity<
  null,
  resProductPacket,
  AxiosError
>(REQ_PRODUCTS_INIT);

export const productsMainMenuSelectAsync = createActionEntity<
  reqProductsMainMenuSelectPacket,
  resProductPacket,
  AxiosError
>(REQ_PRODUCTS_MAIN_MENU_SELECT);

/////////////////////////////////////
// actionsSetting
/////////////////////////////////////
export const actions = {
  productsMainMenuSelect,
  productsInitAsync,
  productsMainMenuSelectAsync,
};