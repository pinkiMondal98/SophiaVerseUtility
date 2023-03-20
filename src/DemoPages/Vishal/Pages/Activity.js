import React from 'react';
import BreadCrumb from '../../Common/BreadCrumb.js';
import { Col, Container, Row } from 'reactstrap';

import List from '../Components/Activity/List.js';

const Activity = () => {

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <Row>
                        <Col sm={12}>
                            <BreadCrumb title="Activities List" />
                            <List />
                        </Col>

                    </Row>

                </Container>
            </div>
        </React.Fragment>
    );
};

export default Activity;