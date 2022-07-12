import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { changeCategory, getCategories } from '../../redux/actions/categoryActions';
import { getProducts } from '../../redux/actions/productActoins';
import './categories.css'

export default function CateogoryList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories())
  }, [])

  const currentCategory = useSelector(state => state.changeCategory);
  const categories = useSelector(state => state.categoryList);

  const selectCategory = (category) => {
    dispatch(changeCategory(category));
    dispatch(getProducts(category.id))
  }

  // console.log(categories)
  // console.log(currentCategory);
  return (
    <div>
      <h3>Categories</h3>

      <ListGroup>
        {categories.map(category => (
          <ListGroupItem active={category.id === currentCategory.id}
            onClick={() => selectCategory(category)}
            key={category.id} className='categories'>{category.categoryName}</ListGroupItem>
        ))}
      </ListGroup>

      {/* <h4>Seçilən: {currentCategory.categoryName}</h4> */}
    </div>
  )
}
