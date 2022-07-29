import React from 'react'
import {
    Badge, Table, Button, Row, Col, Card, CardHeader,
    CardBody, CardTitle, CardText
} from 'reactstrap'

import '../css/CartDetails.css'

import { useSelector, useDispatch } from 'react-redux'
import { deleteFromCart, increaseNumber, decreaseNumber, changeNumber } from '../../redux/actions/cartActions'

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
                            <input onChange={(e) => dispatch(changeNumber(e.target.value, product))} className='inputNumber' defaultValue={product.quantity} type={'number'}></input>
                            <button onClick={() => dispatch(increaseNumber(product))} className='btn-number increase'>+</button>
                        </div>

                    </td>
                    <td>
                        {product.totalPrice} $$
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
            <Row>
                <Col xs='9' className='cart-detail'>
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
                </Col>
                <Col xs='3'>
                    <Card
                        className="my-2"
                        style={{
                            width: '18rem'
                        }}
                    >
                        <CardHeader style={{ textAlign: 'center', fontWeight: '600' }}>
                            Your Cart
                        </CardHeader>
                        <CardBody>
                            <CardTitle tag="h3" style={{ marginBottom: '25px' }}>
                                Cart Summary
                            </CardTitle>
                            <CardText style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <span style={{ fontSize: '18px' }}>The overall total:</span>
                                <span style={{ fontSize: '18px', fontWeight: '500' }}> 23$$ </span>
                            </CardText>
                            <Button className='confirm-btn'>
                                Confirm and Buy (3)
                            </Button>
                        </CardBody>
                    </Card>
                </Col>

            </Row>

        )
    }

    const renderCartIsEmpty = () => {
        return (
            <div className='emptyCart'>
                <img src={cartIsEmpty}></img>
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
