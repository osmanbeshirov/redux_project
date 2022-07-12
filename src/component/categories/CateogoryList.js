import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { changeCategory, getCategories } from '../../redux/actions/categoryActions';

export default function CateogoryList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories())
  }, [])

  const currentCategory = useSelector(state => state.changeCategory);
  const categories = useSelector(state => state.categoryList);

  // console.log(categories)

  return (
    <div>
      <h3>Categories - {categories.length}</h3>

      <ListGroup>
        {categories.map(category => (
          <ListGroupItem key={category.id}>{category.categoryName}</ListGroupItem>
        ))}
      </ListGroup>

      <h4>Seçilən: {currentCategory.categoryName}</h4>
    </div>
  )
}
