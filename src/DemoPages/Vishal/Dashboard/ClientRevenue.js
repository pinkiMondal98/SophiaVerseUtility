import React, { useState, useEffect } from "react";
import { Card, CardBody, CardHeader, Col, DropdownItem, DropdownMenu, DropdownToggle, Row, UncontrolledDropdown } from "reactstrap";
import { RevenueCharts } from "./data/DashboardEcommerceCharts";
import CountUp from "react-countup";

const ClientRevenue = () => {
  const chartData1 = [{ "name": "Earned Points", "type": "bar", "data": [89, 98, 108, 77, 84, 51, 92] }];
  const chartData2 = [{ "name": "Earned Points", "type": "bar", "data": [80, 99, 108, 77, 70, 90, 92] }];
  const chartData3 = [{ "name": "Earned Points", "type": "bar", "data": [30, 30, 9, 30, 10, 30, 50] }];
  const chartData4 = [{ "name": "Earned Points", "type": "bar", "data": [60, 80, 108, 77, 80, 93, 92] }];

  const [chartData, setDataChange] = useState(chartData1);
  function changeData(variable){
    if(variable === 'all')
      setDataChange(chartData1);
    else if(variable === '1m')
      setDataChange(chartData2);
    else if(variable === '6m')
      setDataChange(chartData3);
    else
      setDataChange(chartData4);
  }

  return (
    <React.Fragment>
      <Card>
        <CardHeader className="border-0 align-items-center d-flex">
          <h4 className="card-title mb-0 flex-grow-1 text-dark">Revenue</h4>
          <div className="d-flex gap-1">
            <button type="button" onClick ={() => changeData('all')} className="btn btn-soft-secondary btn-sm" >
              ALL
            </button>
            <button type="button" onClick ={() => changeData('1m')} className="btn btn-soft-secondary btn-sm" >
              1M
            </button>
            <button type="button" onClick ={() => changeData('6m')} className="btn btn-soft-secondary btn-sm">
              6M
            </button>
            <button type="button" onClick ={() => changeData('1y')} className="btn btn-soft-primary btn-sm">
              1Y
            </button>
          </div>
        </CardHeader>
        <CardBody className="p-0 pb-2">
          <div className="w-100">
            <div dir="ltr">
              <RevenueCharts height={457} series={chartData} dataColors='["--vz-primary"]' />
            </div>
          </div>
        </CardBody>
      </Card>
    </React.Fragment>
  );
};

export default ClientRevenue;
