import { asyncState, createAsyncReducer } from 'lib/common/reducerUtils';
import { createReducer } from 'typesafe-actions';
import {
  PRODUCTS_MAIN_MENU_SELECT,
  productsInitAsync,
  productsMainMenuSelectAsync,
  productsSideMenuSelectAsync,
} from './actions';
import { ProductsState, ProductsAction } from './types';

const initState: ProductsState = {
  productsMainMenuSelect: 0,
  viewData: asyncState.init(),
};

const products = createReducer<ProductsState, ProductsAction>(initState, {
  [PRODUCTS_MAIN_MENU_SELECT]: (
    state,
    { payload: productsMainMenuSelect },
  ) => ({
    ...state,
    productsMainMenuSelect: productsMainMenuSelect,
  }),
  ...createAsyncReducer(productsInitAsync, 'viewData'),
  ...createAsyncReducer(productsMainMenuSelectAsync, 'viewData'),
  ...createAsyncReducer(productsSideMenuSelectAsync, 'viewData'),
});

export default products;
