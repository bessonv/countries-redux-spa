import { combineReducers } from "redux";
import { themeReducer } from "./theme/theme-reducer";
import { countiresReducer } from "./countries/countries-reducer";

export const rootReducer = combineReducers({
  theme: themeReducer,
  countries: countiresReducer,
});
