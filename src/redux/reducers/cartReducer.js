import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

const cartReducer = (state = initialState.cart, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            return [...state, action.payload]
        default:
            return state;
    }
}

export default cartReducer;