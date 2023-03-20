import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardHeader, Col, DropdownItem, DropdownMenu, DropdownToggle, Row, UncontrolledDropdown } from 'reactstrap';
import CountUp from "react-countup";
import Countdown from "react-countdown";
import { useSelector, useDispatch } from "react-redux";

// Import Images

// Import Chart
import { MarketplaceChart } from "./data/DashboardNFTCharts";

import { Link } from 'react-router-dom';

const Marketplace = () => {
    const dispatch = useDispatch();

    const [chartData, setchartData] = useState([]);
    const allMarketplaceData = [
        {
            name: "Earned Points",
            data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
        },
        {
            name: "Redeemed Points",
            data: [40, 120, 83, 45, 31, 74, 35, 34, 78],
        },
        {
            name: "Redeemed Amount",
            data: [95, 35, 20, 130, 64, 22, 43, 45, 31],
        },
    ];


    const onChangeChartPeriod = pType => {
        console.log(pType);
    };


    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
            // Render a completed state
            return <span>You are good to go!</span>;
        } else {
            return (
                <>
                    <div className="countdownlist">
                        <div className="countdownlist-item">
                            <div className="count-title">Days</div>
                            <div className="count-num">{days}</div></div>
                        <div className="countdownlist-item">
                            <div className="count-title">Hours</div>
                            <div className="count-num">{hours}</div></div>
                        <div className="countdownlist-item"><div className="count-title">Minutes</div>
                            <div className="count-num">{minutes}</div></div><div className="countdownlist-item">
                            <div className="count-title">Seconds</div>
                            <div className="count-num">{seconds}</div></div>
                    </div>
                </>
            );
        }
    };
    return (
        <React.Fragment>
            <Row>
                <Col xxl={12}>
                    <Card >
                        <CardBody className="p-0">
                            <Row className="g-0">
                                <Col lg={12}>
                                    <div className="">
                                        <CardHeader className="border-0 align-items-center d-flex">
                                            <h4 className="card-title mb-0 flex-grow-1">Redemption</h4>
                                            <div className='d-flex gap-1'>
                                                <button type="button" className="btn btn-soft-secondary btn-sm" onClick={() => { onChangeChartPeriod("all"); }}>
                                                    ALL
                                                </button>
                                                <button type="button" className="btn btn-soft-secondary btn-sm" onClick={() => { onChangeChartPeriod("month"); }}>
                                                    1M
                                                </button>
                                                <button type="button" className="btn btn-soft-secondary btn-sm" onClick={() => { onChangeChartPeriod("halfyear"); }}>
                                                    6M
                                                </button>
                                                <button type="button" className="btn btn-soft-primary btn-sm" onClick={() => { onChangeChartPeriod("year"); }}>
                                                    1Y
                                                </button>
                                            </div>
                                        </CardHeader>
                                        <Row className="g-0 text-center">
                                            <Col sm={4} className="col-6">
                                                <div className="p-3 border border-dashed border-start-0">
                                                    <h5 className="mb-1">
                                                        <span className="counter-value" data-target="36.48">
                                                            <CountUp start={0} end={36.48} decimals={2} suffix={"k"} duration={4} />
                                                        </span>
                                                    </h5>
                                                    <p className="text-muted mb-0">Earned Points</p>
                                                </div>
                                            </Col>
                                            <Col sm={4} className="col-6">
                                                <div className="p-3 border border-dashed border-start-0">
                                                    <h5 className="mb-1">
                                                        <span className="counter-value" data-target="92.54">
                                                            <CountUp start={0} end={92.54} decimals={2} suffix={"k"} duration={4} />
                                                        </span>
                                                    </h5>
                                                    <p className="text-muted mb-0">Redeemed Points</p>
                                                </div>
                                            </Col>
                                            <Col sm={4} className="col-6">
                                                <div className="p-3 border border-dashed border-end-0">
                                                    <h5 className="mb-1">
                                                        $<span className="counter-value" data-target="8.62">
                                                            <CountUp start={0} end={8.62} decimals={2} suffix={"k"} duration={4} />
                                                        </span>
                                                    </h5>
                                                    <p className="text-muted mb-0">Redeemed Amount</p>
                                                </div>
                                            </Col>
                                        </Row>
                                        <MarketplaceChart series={allMarketplaceData} dataColors='["--vz-primary","--vz-success", "--vz-danger"]' />
                                    </div>
                                </Col>

                            </Row>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default Marketplace;