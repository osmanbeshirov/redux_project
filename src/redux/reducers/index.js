import { combineReducers } from "redux";
import categoryListReducer from "./categoryListReducer";
import changeCategoryReducer from "./changeCategoryReducer";
import productReducer from "./productReducer";

const rootReducer = combineReducers({
    changeCategory: changeCategoryReducer,
    categoryList: categoryListReducer,
    products: productReducer

})

export default rootReducer;