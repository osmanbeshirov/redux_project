import React from 'react';
import { useSelector } from 'react-redux';
import {
    Navbar, NavbarBrand, NavbarToggler, Collapse, Nav,
    NavItem, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavLink
} from 'reactstrap'

export default function Navi() {

    const productToCart = useSelector(state => state.cart);

    return (
        <div>
            <div>
                <Navbar
                    color="light"
                    expand="md"
                    light
                >
                    <NavbarBrand href="/">
                        reactstrap
                    </NavbarBrand>
                    <NavbarToggler onClick={function noRefCheck() { }} />
                    <Collapse navbar style={{ marginLeft: '50%' }}>
                        <Nav
                            className="me-auto"
                            navbar
                        >

                            <NavItem>
                                <NavLink href="/components/">
                                    Components
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://github.com/reactstrap/reactstrap">
                                    GitHub
                                </NavLink>
                            </NavItem>
                            <UncontrolledDropdown
                                inNavbar
                                nav
                            >
                                <DropdownToggle
                                    caret
                                    nav
                                >
                                    Options
                                </DropdownToggle>
                                <DropdownMenu end>
                                    {productToCart.map(product => (
                                        <DropdownItem key={product.id}>
                                            {product.productName}
                                        </DropdownItem>
                                    ))}
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        Reset
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        </div>
    )
}
