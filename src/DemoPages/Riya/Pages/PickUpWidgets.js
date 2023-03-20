import React from 'react'
import {
    Card,
    CardBody,
    CardHeader,
    Col,
    Container,
    Form,
    Input,
    Label,
    Nav,
    NavItem,
    NavLink,
    Row,
    TabContent,
    TabPane,
    Progress,
    Modal, ModalBody,
  } from "reactstrap";
import CountUp from "react-countup";


export const PickUpWidgets = () => {
    const ecomWidgets = [
        {
            id: 1,
            cardColor: "primary",
            label: "Total Points Earned",
            badge: "ri-arrow-right-up-line",
            badgeClass: "success",
            percentage: "+16.24",
            counter: "3533",
            link: "View net earnings",
            bgcolor: "success",
            icon: "bx bxs-coin",
            decimals: 0,
            prefix: "",
            suffix: ""
        },
        {
            id: 2,
            cardColor: "secondary",
            label: "Total Food Saved",
            badge: "ri-arrow-right-down-line",
            badgeClass: "danger",
            percentage: "-3.57",
            counter: "368",
            link: "View all orders",
            bgcolor: "info",
            icon: "bx bx-bowl-rice",
            decimals: 0,
            prefix: "",
            separator: ",",
            suffix: " kg"
        },
        {
            id: 3,
            cardColor: "success",
            label: "Activity Performed",
            badge: "ri-arrow-right-up-line",
            badgeClass: "success",
            percentage: "+29.08",
            counter: "19",
            link: "See details",
            bgcolor: "warning",
            icon: "bx bx-check-square",
            decimals: 0,
            prefix: "",
            suffix: " times"
        },
        {
            id: 4,
            cardColor: "info",
            label: "CO2 Reduction",
            badgeClass: "muted",
            percentage: "+0.00",
            counter: "165.89",
            link: "Withdraw money",
            bgcolor: "danger",
            icon: "bx bxs-radiation",
            decimals: 0,
            prefix: "",
            suffix: " kt"
        },
    ];
    

  return (
    <React.Fragment>
        {ecomWidgets.map((item, key) => (
                <Col xl={3} md={6} key={key}>
                    <Card className="card-animate">
                        <CardBody>
                            <div className="d-flex align-items-center">
                                <div className="flex-grow-1 overflow-hidden">
                                    <p className="text-uppercase fw-medium text-muted text-truncate mb-0">{item.label}</p>
                                </div>
                               
                            </div>
                            <div className="d-flex align-items-end justify-content-between mt-4">
                                <div>
                                    <h4 className="fs-22 fw-semibold ff-secondary mb-4"><span className="counter-value" data-target="559.25">
                                        <CountUp
                                            start={0}
                                            prefix={item.prefix}
                                            suffix={item.suffix}
                                            separator={item.separator}
                                            end={item.counter}
                                            decimals={item.decimals}
                                            duration={4}
                                        />
                                    </span></h4>
                                </div>
                                <div className="avatar-sm flex-shrink-0">
                                    <span className={"avatar-title rounded fs-3 bg-" + item.bgcolor}>
                                        <i className={`${item.icon}`}></i>
                                    </span>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Col>))}
    </React.Fragment>
  )
}
