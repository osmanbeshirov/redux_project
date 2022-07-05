import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeCategory } from '../../redux/actions/categoryActions';

export default function CateogoryList() {






  const currentCategory = useSelector(state => state.changeCategory.categoryName)

  console.log(currentCategory)


  return (
    <div>

      <h4>{currentCategory}</h4>
    </div>
  )
}
