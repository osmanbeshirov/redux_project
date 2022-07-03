import React from 'react';
import { Row, Col } from 'reactstrap';
import CateogoryList from '../categories/CateogoryList';
import ProductLis from '../products/ProductLis';

export default function DashBoard() {
    return (
        <div>
            <Row>
                <Col xs='3'>
                    <CateogoryList />
                </Col>
                <Col xs='9'>
                    <ProductLis />
                </Col>
            </Row>
        </div>
    )
}
