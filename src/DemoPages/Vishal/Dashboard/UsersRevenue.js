import React, { useState, useEffect } from "react";

import CountUp from "react-countup";

import { PortfolioCharts } from "./data/DashboardCryptoCharts";
import sophia from "../../../assets/images/demo/sophiaVerse4.jpg";

// Import Images
import Img1 from "../../../assets/images/nft/img-01.jpg";
import Img2 from "../../../assets/images/nft/img-02.jpg";
import Img3 from "../../../assets/images/nft/img-03.jpg";
import Img4 from "../../../assets/images/nft/img-04.jpg";
import Img5 from "../../../assets/images/nft/img-05.jpg";
import Img6 from "../../../assets/images/nft/img-06.jpg";

const UsersRevenue = ({
    title, provider, dataColor, series, lable
}) => {



    return (
        <React.Fragment>
            <div>
                <div className="card card-height-100">
                    <div className="card-header border-0 align-items-center d-flex">
                        <h4 className="card-title mb-0 flex-grow-1  text-dark">{title}</h4>
                    </div>
                    <div className="card-body">
                        <PortfolioCharts
                            series={series}
                            dataColors={dataColor}
                            lable={lable}
                        />

                        <ul className="list-group list-group-flush border-dashed mb-0 mt-3 pt-2">
                            {provider.map((element, index) => {
                                return (
                                    <li key={index} className="list-group-item px-0">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="d-flex align-items-center gap-3">

                                                <h6 className="mb-1">{element.name}</h6>
                                            </div>

                                            <div className="flex-shrink-0 text-end">
                                                <h6 className="mb-1 text-success">
                                                    <CountUp
                                                        start={0}
                                                        end={element.value}
                                                        duration={4}
                                                    /> kg
                                                </h6>
                                            </div>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>

                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default UsersRevenue;
