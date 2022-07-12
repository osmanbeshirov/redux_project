import * as actionTypes from './actionTypes';

export const addToCart = (product) => ({
    type: actionTypes.ADD_TO_CART,
    payload: product
})

