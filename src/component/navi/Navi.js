import React from 'react';

import {
    Navbar, NavbarBrand, NavbarToggler, Collapse, Nav,
    NavItem, NavLink
} from 'reactstrap'
import CartSummary from '../cart/CartSummary';

import { Link } from 'react-router-dom'

export default function Navi() {


    return (
        <div>
            <div>
                <Navbar
                    color="light"
                    expand="md"
                    light
                >
                    <NavbarBrand href="/" >
                        <Link style={{ textDecoration: 'none', color: 'black' }} to='/' >Our District</Link>
                    </NavbarBrand>
                    <NavbarToggler onClick={function noRefCheck() { }} />
                    <Collapse navbar style={{ marginLeft: '45%' }}>
                        <Nav
                            className="me-auto"
                            navbar
                        >

                            <NavItem>
                                <NavLink>
                                    <Link style={{ textDecoration: 'none', color: 'black' }} to={'product'}>Main page</Link>

                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink style={{ textDecoration: 'none', color:'black' }} href="https://github.com/osmanbeshirov/redux_project">
                                    GitHub
                                </NavLink>
                            </NavItem>

                            <CartSummary />

                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        </div>
    )
}
