import React from 'react'
import { Badge, Table, Button } from 'reactstrap'

import { useSelector, useDispatch } from 'react-redux'
import { deleteFromCart } from '../../redux/actions/cartActions'

export default function CartDetails() {
    const dispatch = useDispatch()
    const productsInCart = useSelector(state => state.cart)

    return (
        <div>
            <h2>CartDetails</h2>

            <Table
                hover
                responsive
            >
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Product Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        productsInCart.map((product) => (
                            <tr key={product.id}>
                                <th scope="row">
                                    {product.id}
                                </th>
                                <td>
                                    {product.productName}
                                </td>
                                <td>
                                    {product.quantity}
                                </td>
                                <td>
                                    {product.unitPrice} $$
                                </td>
                                <td> <Button onClick={() => dispatch(deleteFromCart(product))}
                                    color="danger"
                                >
                                    Delete from the Basket
                                </Button></td>
                            </tr>
                        ))
                    }

                </tbody>
            </Table>
        </div>
    )
}
