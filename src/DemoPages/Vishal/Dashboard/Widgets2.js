import React from 'react';
import { Card, CardBody, Col, DropdownItem, DropdownMenu, DropdownToggle, Row, UncontrolledDropdown } from 'reactstrap';
import CountUp from "react-countup";


// Import Images
import sophiaText from "../../../assets/images/demo/sophiaText.jpg";
import sophiaverse2 from "../../../assets/images/demo/sophia5.png";
import sophiaverse3 from "../../../assets/images/demo/sophiaVerse3.jpg";
import Bgd from "../../../assets/images/bg-d.png";
import { Link } from 'react-router-dom';

const Widgets = () => {
    return (
        <React.Fragment>
            <Row>
                <Col xl={12}>
                    <Row>
                        <Col lg={4}>
                            <Card className="card-height-100">
                                <CardBody>

                                    <div className="d-flex align-items-center">
                                        <div className="avatar-sm flex-shrink-0">
                                            <span className="avatar-title bg-primary rounded fs-3">
                                                <i className="bx bx-dollar-circle"></i>
                                            </span>
                                        </div>
                                        <div className="flex-grow-1 ps-3">
                                            <h5 className="text-muted text-uppercase fs-13 mb-0">Total Amount</h5>
                                        </div>
                                    </div>
                                    <div className="mt-4 pt-1">
                                        <h4 className="fs-22 fw-semibold ff-secondary mb-0">$
                                            <span className="counter-value">
                                                <CountUp start={0} end={55954} separator={","} duration={4} />
                                            </span>
                                        </h4>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col lg={4}>
                            <Card className="card-height-100">
                                <CardBody>
                                    <div className="d-flex align-items-center">
                                        <div className="avatar-sm flex-shrink-0">
                                            <span className="avatar-title bg-danger rounded fs-3">
                                                <i className="bx bx-wallet"></i>
                                            </span>
                                        </div>
                                        <div className="flex-grow-1 ps-3">
                                            <h5 className="text-muted text-uppercase fs-13 mb-0">Redemption Amount</h5>
                                        </div>
                                    </div>
                                    <div className="mt-4 pt-1">
                                        <h4 className="fs-22 fw-semibold ff-secondary mb-0">$
                                            <span className="counter-value">
                                                <CountUp start={0} end={62456} separator={","} duration={4} />
                                            </span>
                                        </h4>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col lg={4}>
                            <Card className="card-height-100">
                                <CardBody>
                                    <div className="d-flex align-items-center">
                                        <div className="avatar-sm flex-shrink-0">
                                            <span className="avatar-title bg-warning rounded fs-3">
                                                <i className="bx bx-gift"></i>
                                            </span>
                                        </div>
                                        <div className="flex-grow-1 ps-3">
                                            <h5 className="text-muted text-uppercase fs-13 mb-0">Redemption Points</h5>
                                        </div>
                                    </div>
                                    <div className="mt-4 pt-1">
                                        <h4 className="fs-22 fw-semibold ff-secondary mb-0">
                                            <span className="counter-value">
                                                <CountUp start={0} end={42456} separator={","} duration={4} />
                                            </span>
                                        </h4>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>


                        <Col lg={4}>
                            <Card className="card-height-100">
                                <CardBody>
                                    <div className="d-flex align-items-center">
                                        <div className="avatar-sm flex-shrink-0">
                                            <span className="avatar-title bg-warning rounded fs-3">
                                                <i className="bx bx-gift"></i>
                                            </span>
                                        </div>
                                        <div className="flex-grow-1 ps-3">
                                            <h5 className="text-muted text-uppercase fs-13 mb-0">Redemption Points</h5>
                                        </div>
                                    </div>
                                    <div className="mt-4 pt-1">
                                        <h4 className="fs-22 fw-semibold ff-secondary mb-0">
                                            <span className="counter-value">
                                                <CountUp start={0} end={42456} separator={","} duration={4} />
                                            </span>
                                        </h4>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col lg={4}>
                            <Card className="card-height-100">
                                <CardBody>

                                    <div className="d-flex align-items-center">
                                        <div className="avatar-sm flex-shrink-0">
                                            <span className="avatar-title bg-secondary rounded fs-3">
                                                <i className="bx bx-bar-chart-alt-2"></i>
                                            </span>
                                        </div>
                                        <div className="flex-grow-1 ps-3">
                                            <h5 className="text-muted text-uppercase fs-13 mb-0">Earned Points</h5>
                                        </div>
                                    </div>
                                    <div className="mt-4 pt-1">
                                        <h4 className="fs-22 fw-semibold ff-secondary mb-0">
                                            <span className="counter-value">
                                                <CountUp start={0} end={85954} separator={","} duration={4} />
                                            </span>
                                        </h4>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col lg={4}>
                            <Card className="card-height-100">
                                <CardBody>
                                    <div className="d-flex align-items-center">
                                        <div className="avatar-sm flex-shrink-0">
                                            <span className="avatar-title bg-warning rounded fs-3">
                                                <i className="bx bx-gift"></i>
                                            </span>
                                        </div>
                                        <div className="flex-grow-1 ps-3">
                                            <h5 className="text-muted text-uppercase fs-13 mb-0">Redemption Points</h5>
                                        </div>
                                    </div>
                                    <div className="mt-4 pt-1">
                                        <h4 className="fs-22 fw-semibold ff-secondary mb-0">
                                            <span className="counter-value">
                                                <CountUp start={0} end={42456} separator={","} duration={4} />
                                            </span>
                                        </h4>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                </Col>

            </Row>
        </React.Fragment >
    );
};

export default Widgets;