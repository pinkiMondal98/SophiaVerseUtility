import React from 'react';
import { Card, CardBody, CardHeader, Col } from 'reactstrap';
import { popularityData } from "./data/dashboardNFT";

// Import Chart
import { PopularityChart } from "./data/DashboardNFTCharts";

//SimpleBar
import { Link } from 'react-router-dom';


import { topartWork, topartWorkUser } from "./data/index";
// Import Chart
import { TopArtworkChart } from "./data/DashboardNFTCharts";

//SimpleBar
import SimpleBar from "simplebar-react";
import { featuredNFTData } from "./data/dashboardNFT";
import UsersRevenue from './UsersRevenue.js';

import CountUp from "react-countup";
import { CountriesCharts } from './data/DashboardAnalyticsCharts.js';


const Popularity = () => {

    return (
        <React.Fragment>
            <Col lg={4}>



                <Card>
                    <div className="card-header align-items-center d-flex">
                        <h4 className="card-title mb-0 flex-grow-1">Top Users </h4>
                        <div className="flex-shrink-0">
                            <div>
                                <button
                                    type="button"
                                    className="btn btn-soft-primary btn-sm shadow-none"
                                >
                                    See All
                                </button>
                            </div>
                        </div>
                    </div>
                    <CardBody>
                        <div className="table-responsive table-card">
                            <SimpleBar style={{ maxHeight: "465px" }}>
                                <table className="table table-borderless align-middle">
                                    <tbody>
                                        {topartWorkUser.reverse().map((item, key) => (
                                            <tr key={key}>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <img
                                                            src={item.img}
                                                            alt=""
                                                            className="avatar-sm rounded-circle"
                                                        />
                                                        <div className="ms-3">
                                                            <Link to="#!">
                                                                <h6 className="fs-15 mb-1">{item.title}</h6>
                                                            </Link>
                                                            <p className="mb-0 text-muted">
                                                                < span className="counter-value" >
                                                                    <CountUp start={0} end={item.sales} separator={","} duration={4} />
                                                                </span > Activities
                                                            </p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="text-end">
                                                    <Link to="#!">
                                                        <h6 className="fs-15 mb-1">
                                                            $
                                                            < span className="counter-value" >
                                                                <CountUp start={0} end={item.collection} separator={","} duration={4} />
                                                            </span >
                                                            +
                                                        </h6>
                                                    </Link>
                                                    <p className="mb-0 text-muted">Redeemed Amount</p>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </SimpleBar>
                        </div>
                    </CardBody>
                </Card>



                <Card>
                    <CardHeader className="d-flex align-items-center">
                        <h6 className="card-title mb-0 flex-grow-1">Last Transactions</h6>
                        <Link className="text-muted" >
                            See All <i className="ri-arrow-right-line align-bottom"></i>
                        </Link>
                    </CardHeader>
                    <CardBody>
                        <div className="table-responsive table-card">
                            <SimpleBar style={{ maxHeight: "465px" }}>
                                <table className="table table-borderless align-middle">
                                    <tbody>
                                        {topartWork.map((item, key) => (
                                            <tr key={key}>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="ms-3">

                                                            <Link to="#!">
                                                                <h6 className="fs-15 mb-1">
                                                                    <span className="counter-value" >
                                                                        <CountUp start={0} end={item.sales} separator={","} duration={4} />
                                                                    </span> Points
                                                                </h6>
                                                            </Link>
                                                            <p className="mb-0 text-muted">
                                                                {item.date}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="text-end">
                                                    <Link to="#!">
                                                        <h6 className="fs-15 mb-1">
                                                            $
                                                            < span className="counter-value" >
                                                                <CountUp start={0} end={item.collection} separator={","} duration={4} />
                                                            </span >
                                                        </h6>
                                                    </Link>
                                                    <p className="mb-0 text-muted">Total USD</p>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </SimpleBar>
                        </div>
                    </CardBody>

                </Card>


            </Col>


        </React.Fragment >
    );
};

export default Popularity;