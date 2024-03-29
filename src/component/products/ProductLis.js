import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Badge, Table, Button } from 'reactstrap'
import { addToCart } from '../../redux/actions/cartActions';
import { changeCategory } from '../../redux/actions/categoryActions';
import { getProducts } from '../../redux/actions/productActoins';

import './productList.css'

export default function ProductLis() {

    const currentCategory = useSelector(state => state.changeCategory);
    const allProducts = useSelector(state => state.products);

    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getProducts())
    }, [])


    let text = () => {
        return (
            <React.Fragment>
                <span style={{ marginLeft: '10px', marginRight: '10px' }}>-</span>
                <Badge color='success'>{currentCategory.categoryName}</Badge>
            </React.Fragment>
        )
    }

    return (
        <div className='productList'>
            <h3>ProductList
                {currentCategory.id > 0 ? text() : null}
            </h3>

            <Table
                hover
                responsive
            >
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Product Name</th>
                        <th>Quantity number</th>
                        <th>Price</th>
                        <th>Stock number</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allProducts.map((product) => (
                            <tr key={product.id}>
                                <th scope="row">
                                    {product.id}
                                </th>
                                <td>
                                    {product.productName}
                                </td>
                                <td>
                                    {product.quantityPerUnit}
                                </td>
                                <td>
                                    {product.unitPrice}
                                </td>
                                <td>
                                    {product.unitsInStock}
                                </td>
                                <td className='btn-td'> <Button onClick={() => dispatch(addToCart(product))}
                                    color="primary"
                                >
                                    Add to Basket
                                </Button></td>
                            </tr>

                        ))
                    }


                </tbody>
            </Table>
        </div >
    )
}
