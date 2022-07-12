import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

const cartReducer = (state = initialState.cart, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            let addedProduct = state.find(product => product.id === action.payload.id);

            if (addedProduct) {
                addedProduct.quantity += 1;
            }

            else {
                return [...state, { ...action.payload, quantity: 1 }]
            }

        default:
            return state;
    }
}

export default cartReducer;