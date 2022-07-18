import React from 'react';

import {
    Navbar, NavbarBrand, NavbarToggler, Collapse, Nav,
    NavItem, NavLink
} from 'reactstrap'
import CartSummary from '../cart/CartSummary';

export default function Navi() {


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
                    <Collapse navbar style={{ marginLeft: '45%' }}>
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

                            <CartSummary/>

                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        </div>
    )
}
