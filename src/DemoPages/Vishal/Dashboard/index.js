import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Row,
  UncontrolledDropdown,
} from "reactstrap";

import Widgets from "./Widgets.js";
import Marketplace from "./Marketplace";
import Popularity from "./Popularity";
import FeaturedNFT from "./FeaturedNFT";
import RecentNFTs from "./RecentNFTs";
import ExploreNow from "./ExploreNow.js";
import RecentOrders from "./RecentOrders.js";
import UsersRevenue from "./UsersRevenue.js";
import RedeemedAmount from "./RedeemedAmount.js";
import VectorMaps from "./VectorMaps/VectorMaps.js";
import ClientRevenue from "./ClientRevenue.js";
import { Link, useNavigate } from "react-router-dom";
import UserCountry from "./UserCountry.js";

import FeatherIcon from "feather-icons-react";
import activity1 from "../../../assets/images/brands/slack.png";
import { ActivityHistory } from "../../Riya/Components/ActivityHistoryTable.js";
import { RedemptionHistory } from "../../../Components/RedemptionHistoryTable";
import sophiaverse2 from "../../../assets/images/demo/sophia5.png";
import Bgd from "../../../assets/images/bg-d.png";
const Dashboard = () => {
  // const headerImage ='https://uploads-ssl.webflow.com/622c1e6eb1cd192ecedc6225/622ef0219152c96bc2ea796e_sophia-kv.jpg';

  const providerData = [1234, 1980, 1456, 1678, 1289];
  const destinationData = [1234, 2345, 4456, 3567, 1345];

  const Destination = [
    {
      name: "Refugees",
      value: destinationData[0],
    },
    {
      name: "Farmers",
      value: destinationData[1],
    },
    {
      name: "Charities",
      value: destinationData[2],
    },
    {
      name: "Volunteer",
      value: destinationData[3],
    },
    {
      name: "Non-profits",
      value: destinationData[4],
    },
  ];

  const provider = [
    {
      name: "Save On Foods",
      value: providerData[0],
    },
    {
      name: "Urban Fare",
      value: providerData[1],
    },
    {
      name: "Simple Goodness",
      value: providerData[2],
    },
    {
      name: "Nesters Market",
      value: providerData[3],
    },
    {
      name: "Mein Hardt",
      value: providerData[4],
    },
  ];

  const projectLists = [
    {
      id: 1,
      time: `Updated 3hrs ago`,
      ratingClass: ``,
      imgbgColor: `warning`,
      img: activity1,
      label: `AI Code`,
      caption: `Write an AI code to fetch last 5 transactions to earn points`,
      number: `40/60`,
      progressBar: 100 * Number(40 / 60) + `%`,
      points: 23,
      date: `10 Jul, 2021`,
      link: "/activities/activity-detail",
    },
  ];

  const history = useNavigate();
  const activebtn = (ele) => {
    if (ele.closest("button").classList.contains("active")) {
      ele.closest("button").classList.remove("active");
    } else {
      ele.closest("button").classList.add("active");
    }
  };

  return (
    <React.Fragment>
      <div
        className="page-content"
      >
        <Container fluid>
          <Row>
            <Col>
              <Widgets />
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              {(projectLists || []).map((item, index) => (
                <React.Fragment key={index}>
                  <div className="project-card">
                    <Card className="card-height-100">
                      <div className="card-header border-0 align-items-center d-flex">
                        <h4 className="card-title mb-0 flex-grow-1  text-dark">
                          Last Activity
                        </h4>
                        <button
                          type="button"
                          onClick={() => {
                            history(`/activities`);
                          }}
                          className="btn btn-secondary btn-sm"
                        >
                          Earn Points
                        </button>
                      </div>
                      <CardBody className=" card-animate pt-0 pb-0">
                        <div className="d-flex flex-column h-100">
                          <div className="d-flex">
                            <div className="flex-grow-1">
                              <p className="text-muted mb-4">{item.time}</p>
                            </div>
                            <div className="flex-shrink-0">
                              <div className="d-flex gap-1 align-items-center">
                                {/* <button type="button" className={`btn avatar-xs mt-n1 p-0 favourite-btn shadow-none ${item.ratingClass}`} onClick={(e) => activebtn(e.target)}>
                                  <span className="avatar-title bg-transparent fs-15">
                                    <i className="ri-star-fill"></i>
                                  </span>
                                </button> */}
                                <UncontrolledDropdown direction="start">
                                  <DropdownToggle
                                    tag="button"
                                    className="btn btn-link text-muted p-1 mt-n2 py-0 text-decoration-none fs-15 shadow-none"
                                  >
                                    <FeatherIcon
                                      icon="more-horizontal"
                                      className="icon-sm"
                                    />
                                  </DropdownToggle>

                                  <DropdownMenu className="dropdown-menu-end">
                                    <DropdownItem
                                      href={item.link ? item.link : "#"}
                                    >
                                      <i className="ri-eye-fill align-bottom me-2 text-muted"></i>{" "}
                                      View
                                    </DropdownItem>
                                    <div className="dropdown-divider"></div>
                                  </DropdownMenu>
                                </UncontrolledDropdown>
                              </div>
                            </div>
                          </div>
                          <div
                            className="d-flex mb-2"
                            onClick={() => history(item.link)}
                            style={{ pointerEvents: "auto" }}
                          >
                            <div className="flex-shrink-0 me-3">
                              <div className="avatar-sm">
                                <span
                                  className={
                                    "avatar-title rounded p-2 bg-soft-" +
                                    item.imgbgColor
                                  }
                                >
                                  <img
                                    src={item.img}
                                    alt=""
                                    className="img-fluid p-1"
                                  />
                                </span>
                              </div>
                            </div>
                            <div className="flex-grow-1">
                              <h5 className="mb-1 fs-15">
                                <Link to="#" className="text-dark">
                                  {item.label}
                                </Link>
                              </h5>
                              <p className="text-white text-truncate-two-lines mb-3">
                                {item.caption}
                              </p>
                            </div>
                            {/* <img src={Bgd} alt="" className="img-fluid" /> */}
                          </div>
                        </div>
                      </CardBody>
                      <div className="card-footer bg-transparent border-top-dashed py-2">
                        <div className="d-flex align-items-center">
                          <div className="flex-grow-1">
                            <div className="avatar-group">
                              Points : {item.points}
                            </div>
                          </div>
                          <div className="flex-shrink-0">
                            <div className="text-muted">
                              <i className="ri-calendar-event-fill me-1 align-bottom"></i>{" "}
                              {item.date}
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                </React.Fragment>
              ))}
            </Col>
          </Row>
          <Row>
            <Col lg={7}>
              <ClientRevenue />
            </Col>
            <Col lg={5}>
              <RedeemedAmount />
            </Col>
          </Row>
          <Row className="">
            <Col lg={12}>
              <ActivityHistory />
            </Col>
          </Row>
          <Row className="">
            <Col lg={12}>
              <RedemptionHistory />
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
