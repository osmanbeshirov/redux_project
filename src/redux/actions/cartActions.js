import * as actionTypes from './actionTypes';
import alertify from 'alertifyjs';

export const addToCart = (product) => {

    alertify.set('notifier', 'position', 'top-right');

    alertify.notify(product.productName + '-' + 'Added to Basket');

    return {
        type: actionTypes.ADD_TO_CART,
        payload: product
    }
}

export const deleteFromCart = (product) => {



    return {
        type: actionTypes.DELETE_FROM_CART,
        payload: product
    }
}

export const resetCart = () => {

    alertify.error('All products are deleted from the Basket');

    return {
        type: actionTypes.RESET_CART,
        payload: []
    }
}



