import React from 'react';
import {
    Badge, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavItem, NavLink
} from 'reactstrap'
import { useSelector, useDispatch } from 'react-redux';
import { deleteFromCart, resetCart } from '../../redux/actions/cartActions';

import { Link } from 'react-router-dom'

import basket from '../../photos/shopping-cart.png'


export default function CartSummary() {

    const dispatch = useDispatch();

    const productToCart = useSelector(state => state.cart);

    console.log(productToCart);

    let cartInfo = () => {
        return (
            <React.Fragment>
                <span>-</span>
                <Badge color="success" pill>{productToCart.length}</Badge>
            </React.Fragment>

        )
    }

    let basketFull = () => {
        return (
            <UncontrolledDropdown
                inNavbar
                nav
            >
                <DropdownToggle
                    caret
                    nav
                >
                    Basket {productToCart.length > 0 ? cartInfo() : cartEmpty()}
                </DropdownToggle>
                <DropdownMenu end>
                    {productToCart.map(product => (
                        <DropdownItem key={product.id}>
                            <Badge onClick={() => dispatch(deleteFromCart(product))} color='danger' style={{ marginRight: '10px' }}>X</Badge>
                            {product.productName} <Badge color='warning' pill>{product.quantity}</Badge>
                        </DropdownItem>
                    ))}
                    <DropdownItem divider />
                    <DropdownItem >
                        <Link style={{ textDecoration: 'none' }} to='cart'>  <img style={{ width: '30px', marginRight: '5px' }} src={basket}></img>

                            <span style={{ color: 'black' }}> Go to the Basket</span> </Link>
                    </DropdownItem>
                    <DropdownItem onClick={() => dispatch(resetCart())}>
                        Remove all products
                    </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        )
    }

    let cartEmpty = () => {
        return (
            <React.Fragment>
                <NavItem>
                    <NavLink>Basket is empty</NavLink>
                </NavItem>
            </React.Fragment>
        )
    }

    return (
        <div>
            {productToCart.length > 0 ? basketFull() : cartEmpty()}
        </div>
    )
}
