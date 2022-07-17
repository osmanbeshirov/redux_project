import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

const cartReducer = (state = initialState.cart, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            let addedProduct = state.find(product => product.id === action.payload.id);

            if (addedProduct) {
                const newState = state.map(cartItem => {
                    if (cartItem.id === action.payload.id) {
                        return Object.assign({}, addedProduct, { quantity: addedProduct.quantity + 1 })
                    }
                    return cartItem;
                })

                return newState;
            }

            else {
                return [...state, { ...action.payload, quantity: 1 }]
            }

        default:
            return state;
    }
}

export default cartReducer;