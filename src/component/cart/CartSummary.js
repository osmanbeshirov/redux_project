import React from 'react';
import {
    Badge, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem
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

    return (
        <div>
            <UncontrolledDropdown
                inNavbar
                nav
            >
                <DropdownToggle
                    caret
                    nav
                >
                    Basket {productToCart.length > 0 ? cartInfo() : null}
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
        </div>
    )
}
