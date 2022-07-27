import * as actionTypes from './actionTypes';

export const getProductsSuccess = (products) => ({
    type: actionTypes.GET_PRODUCTS_SUCCESS,
    payload: products
})

export const getProducts = (categoryId, allDb) => {
    return function (dispatch) {
        // let url = 'http://localhost:3000/products';

        // let url = 'db.json'

        // if (categoryId) {
        //     url = url + "?categoryId=" + categoryId;

        console.log(allDb)

        if (categoryId) {
            return fetch('db.json').then(res => res.json())
                .then(data => dispatch(getProductsSuccess(data.products.filter(pro => pro.categoryId === categoryId))))
        }

        return fetch('db.json').then(res => res.json())
            .then(data => dispatch(getProductsSuccess(data.products)))
    }
}