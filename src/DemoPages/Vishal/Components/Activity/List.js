import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Card,
  CardBody,
  Col,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Input,
  Row,
  UncontrolledDropdown,
} from "reactstrap";
import { ToastContainer } from "react-toastify";

//Import Icons
import FeatherIcon from "feather-icons-react";
import activity1 from "../../../../assets/images/brands/slack.png";
import activity2 from "../../../../assets/images/brands/dribbble.png";
import activity3 from "../../../../assets/images/brands/dropbox.png";
import activity4 from "../../../../assets/images/brands/bitbucket.png";
import activity5 from "../../../../assets/images/brands/mail_chimp.png";

const List = () => {
  const history = useNavigate();

  const projectLists = [
    {
      id: 1,
      time: `Updated 3hrs ago`,
      ratingClass: ``,
      imgbgColor: `info`,
      img: activity3,
      label: `Invite new friends`,
      caption: `build perfect team to help needfull peoples `,
      number: `36/56`,
      progressBar: 100 * Number(36 / 56) + `%`,
      points: 2345,
      date: `02 Jun, 2020`,
      link: "/coming-soon",
    },

    {
      id: 2,
      time: `Updated 1hrs ago`,
      ratingClass: ``,
      imgbgColor: `danger`,
      img: activity4,
      label: `Join our bussiness`,
      caption: `help peoples who want foods they have not any thing to eat.   `,
      number: `1/1`,
      progressBar: 100 + `%`,
      points: 3000,
      date: `10 AUG, 2020`,
      link: "/coming-soon",
    },

    {
      id: 3,
      time: `Updated 1hrs ago`,
      ratingClass: ``,
      imgbgColor: `info`,
      img: activity5,
      label: `Watch a Video`,
      caption: `help peoples who want foods they have not any thing to eat.   `,
      number: `5/13`,
      progressBar: 100 * Number(5 / 13) + `%`,
      points: 3000,
      date: `10 AUG, 2020`,
      link: "/coming-soon",
    },
  ];
  const activebtn = (ele) => {
    if (ele.closest("button").classList.contains("active")) {
      ele.closest("button").classList.remove("active");
    } else {
      ele.closest("button").classList.add("active");
    }
  };
  return (
    <React.Fragment>
      <Row className="g-4 mb-3">
        <div className="col-sm-auto"></div>
        <div className="col-sm-3 ms-auto">
          <div className="d-flex justify-content-sm-end gap-2">
            <div className="search-box ms-2 col-sm-7">
              <Input
                type="text"
                className="form-control"
                placeholder="Search..."
              />
              <i className="ri-search-line search-icon"></i>
            </div>

            <select
              className="form-control w-md"
              data-choices
              data-choices-search-false
            >
              <option value="All">All</option>
              <option value="inprogress">Completed</option>
              <option value="Completed">inprogress</option>
            </select>
          </div>
        </div>
      </Row>

      <div className="row">
        {(projectLists || []).map((item, index) => (
          <React.Fragment key={index}>
            <Col xxl={3} sm={6} className="project-card">
              <Card className="card-height-100">
                <CardBody className=" card-animate">
                  <div className="d-flex flex-column h-100">
                    <div className="d-flex">
                      <div className="flex-grow-1">
                        <p className="text-muted mb-4">{item.time}</p>
                      </div>
                      <div className="flex-shrink-0">
                        <div className="d-flex gap-1 align-items-center">
                          <button
                            type="button"
                            className={`btn avatar-xs mt-n1 p-0 favourite-btn shadow-none ${item.ratingClass}`}
                            onClick={(e) => activebtn(e.target)}
                          >
                            <span className="avatar-title bg-transparent fs-15">
                              <i className="ri-star-fill"></i>
                            </span>
                          </button>
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
                              <DropdownItem href={item.link ? item.link : "#"}>
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
                      onClick={() => {
                        item.link && history(item.link);
                      }}
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
                        <p className="text-muted text-truncate-two-lines mb-3">
                          {item.caption}
                        </p>
                      </div>
                    </div>
                    <div className="mt-auto">
                      <div className="d-flex mb-2">
                        <div className="flex-grow-1">
                          <div>Tasks</div>
                        </div>
                        <div className="flex-shrink-0">
                          <div>
                            <i className="ri-list-check align-bottom me-1 text-muted"></i>{" "}
                            {item.number}
                          </div>
                        </div>
                      </div>
                      <div className="progress progress-sm animated-progess">
                        <div
                          className="progress-bar bg-success"
                          role="progressbar"
                          aria-valuenow="34"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style={{ width: item.progressBar }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </CardBody>
                <div className="card-footer bg-transparent border-top-dashed py-2">
                  <div className="d-flex align-items-center">
                    <div className="flex-grow-1">
                      <div className="avatar-group">Points : {item.points}</div>
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
            </Col>
          </React.Fragment>
        ))}
      </div>
    </React.Fragment>
  );
};

export default List;
