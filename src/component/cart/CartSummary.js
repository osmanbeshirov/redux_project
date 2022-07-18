import React from 'react';
import {
    Badge, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavItem, NavLink
} from 'reactstrap'
import { useSelector } from 'react-redux';


export default function CartSummary() {

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
                           {product.productName} <Badge className='warning' pill>{product.quantity}</Badge>
                        </DropdownItem>
                    ))}
                    <DropdownItem divider />
                    <DropdownItem>
                        Reset
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
            {productToCart.length > 0 ? basketFull(): cartEmpty()}
        </div>
    )
}
