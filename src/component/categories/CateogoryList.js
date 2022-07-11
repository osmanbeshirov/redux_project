import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeCategory, getCategories } from '../../redux/actions/categoryActions';

export default function CateogoryList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories())
  })



  const currentCategory = useSelector(state => state.changeCategory);
  const categories = useSelector(state => state.categoryList.categories)



  console.log(currentCategory)
  console.log(categories)

  return (
    <div>
     
      {/* <ul key={}>{categories.map(categogry => {
        <li>{categogry.categoryName}</li>
      })}

      </ul> */}
      <h4>Seçilən: {currentCategory.categoryName}</h4>
    </div>
  )
}
