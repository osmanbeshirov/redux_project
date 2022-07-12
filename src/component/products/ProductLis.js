import React from 'react'
import { useSelector } from 'react-redux';
import { Badge } from 'reactstrap'
import { changeCategory } from '../../redux/actions/categoryActions';

export default function ProductLis() {

    const currentCategory = useSelector(state => state.changeCategory);
    console.log(currentCategory);

    let text = () => {
        return (
            <React.Fragment>
                <span style = {{marginLeft: '10px',marginRight: '10px' }}>-</span>
                <Badge color='success'>{currentCategory.categoryName}</Badge>
            </React.Fragment>
        )
    }

    return (
        <div>
            <h3>ProductList
                {currentCategory.id > 0 ? text() : null}
            </h3>
        </div >
    )
}
