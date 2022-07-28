import React from 'react';
import { Row, Col } from 'reactstrap';
import CateogoryList from '../categories/CateogoryList';
import ProductLis from '../products/ProductLis';

import './App.css'

export default function DashBoard() {
    return (
        <div>
            <Row>
                <Col className='left' >
                    <CateogoryList />
                </Col>
                <Col className='right' > 
                    <ProductLis />
                </Col>
            </Row>
        </div>
    )
}


