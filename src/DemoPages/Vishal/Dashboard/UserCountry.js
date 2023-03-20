import React from 'react';
import { Card } from 'reactstrap';
import CountUp from "react-countup";
import { CountriesCharts } from './data/DashboardAnalyticsCharts.js';

const UserCountry = () => {
    return (
        <div>
            <Card >
                <div className="card-header align-items-center d-flex">
                    <h4 className="card-title mb-0 flex-grow-1">Food Delivered In Countries (kg)</h4>
                    <div className="d-flex gap-1">
                        {/* <button type="button" className={("btn btn-soft-secondary btn-sm")}>
                                ALL
                            </button>
                            <button type="button" className={("btn btn-soft-primary btn-sm")} >
                                1M
                            </button>
                            <button type="button" className={("btn btn-soft-secondary btn-sm")}>
                                6M
                            </button> */}
                    </div>
                </div>
                <div className="card-body p-0">
                    <div>
                        <CountriesCharts dataColors='[ "--vz-primary", "--vz-info",  "--vz-danger", "--vz-warning"]' />
                    </div>
                </div>
            </Card>

        </div>
    );
};

export default UserCountry;