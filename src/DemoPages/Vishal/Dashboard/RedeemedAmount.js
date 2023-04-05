import React from "react";
import {
  Card,
  CardHeader,
  Col,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap";
import { StoreVisitsCharts } from "./data/DashboardEcommerceCharts";

const RedeemedAmount = () => {
  return (
    <React.Fragment>
      <Card className="card-height-100">
        <CardHeader className="align-items-center d-flex">
          <h4 className="card-title mb-0 flex-grow-1 text-dark">Redemptions</h4>
          <div className="flex-shrink-0"></div>
        </CardHeader>

        <div className="card-body">
          <div dir="ltr">
            <StoreVisitsCharts dataColors='["--vz-primary", "--vz-success", "--vz-warning"]' />
          </div>
        </div>
      </Card>
    </React.Fragment>
  );
};

export default RedeemedAmount;
