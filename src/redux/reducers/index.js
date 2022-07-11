import { combineReducers } from "redux";
import categoryListReducer from "./categoryListReducer";
import changeCategoryReducer from "./changeCategoryReducer";

const rootReducer = combineReducers({
    changeCategory: changeCategoryReducer,
    categoryList: categoryListReducer

})

export default rootReducer;