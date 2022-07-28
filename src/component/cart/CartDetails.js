import React from 'react'
import { Badge, Table, Button } from 'reactstrap'

import '../css/CartDetails.css'

import { useSelector, useDispatch } from 'react-redux'
import { deleteFromCart, increaseNumber, decreaseNumber } from '../../redux/actions/cartActions'

import cartIsEmpty from '../../photos/cart_empty.png'

export default function CartDetails() {


    const dispatch = useDispatch()
    const productsInCart = useSelector(state => state.cart)

    const ProductList = () => {
        return (
            productsInCart.map((product) => (
                <tr key={product.id}>
                    <th scope="row">
                        {product.id}
                    </th>
                    <td>
                        {product.productName}
                    </td>
                    <td>
                        <div className='number-area'>
                            <button onClick={() => dispatch(decreaseNumber(product))} className='btn-number decrease'>-</button>
                            <input className='inputNumber' defaultValue={product.quantity} type={'number'}></input>
                            <button onClick={() => dispatch(increaseNumber(product))} className='btn-number increase'>+</button>
                        </div>

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
        )
    }

    const renderDetails = () => {
        return (
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
                    <ProductList />
                </tbody>
            </Table>
        )
    }

    const renderCartIsEmpty = () => {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img style={{ width: "550px", marginTop: '30px' }} src={cartIsEmpty}></img>
                <h1>Your Cart is currently empty :(</h1>
            </div>
        )
    }

    return (
        <div>
            <h2>CartDetails</h2>

            {productsInCart.length > 0 ? renderDetails() : renderCartIsEmpty()}
        </div>
    )
}
