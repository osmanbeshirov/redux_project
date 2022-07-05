import { combineReducers } from "redux";
import changeCategoryReducer from "./changeCategoryReducer";

const rootReducer = combineReducers({
    changeCategory: changeCategoryReducer,

})

export default rootReducer;