import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import categoryListReducer from "./categoryListReducer";
import changeCategoryReducer from "./changeCategoryReducer";
import productReducer from "./productReducer";

const rootReducer = combineReducers({
    changeCategory: changeCategoryReducer,
    categoryList: categoryListReducer,
    products: productReducer,
    cart: cartReducer

})

export default rootReducer;