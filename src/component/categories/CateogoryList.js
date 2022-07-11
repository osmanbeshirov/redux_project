import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeCategory } from '../../redux/actions/categoryActions';

export default function CateogoryList() {

  const currentCategory = useSelector(state => state.changeCategory)

  console.log(currentCategory)

  return (
    <div>
     <h4></h4>
      
    </div>
  )
}
