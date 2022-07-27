import { type } from '@testing-library/user-event/dist/type';
import * as actionTypes from './actionTypes';

export const changeCategory = (category) => ({
    type: actionTypes.CHANGE_CATEGORY,
    payload: category
})

export const getCategoriesSuccess = (categories) => ({
    type: actionTypes.GET_CATEGORIES_SUCCESS,
    payload: categories
})

export const getCategories = () => {

    return function (dispatch) {
        let url = 'db.json';
        return fetch(url).then(res => res.json())
            .then(data => dispatch(getCategoriesSuccess(data.categories)))
    }

}