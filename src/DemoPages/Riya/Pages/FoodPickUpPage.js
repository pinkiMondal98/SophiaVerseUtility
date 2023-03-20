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
import Flatpickr from "react-flatpickr";
// import { Alert, Button, Card, CardBody, Col, Container, Input,  ModalHeader, PopoverBody, PopoverHeader, Row, UncontrolledPopover, UncontrolledTooltip } from 'reactstrap';
import { Link } from 'react-router-dom';
import slackImage from "../../../assets/images/brands/slack.png"

import classnames from "classnames";
import { PickupForm } from './PickupForm';
import { PickUpWidgets } from './PickUpWidgets';
import { FoodSavedByDatesChart } from './FoodSavedByDatesChart';
import { PickupHistoryTable } from './PickupHistoryTable';
export const FoodPickUpPage = () => {
  return (
    <div className='page-content'>

        <Container fluid>
        <Row>
                <Col lg={12}>
                    <Card className="mt-n4 mx-n4">
                        <div className="bg-soft-warning">
                            <CardBody className="pb-0 px-4">
                                <Row className="mb-3">
                                    <div className="col-md">
                                        <Row className="align-items-center g-3">
                                            <div className="col-md-auto">
                                                <div className="avatar-md">
                                                    <div className="avatar-title bg-white rounded-circle">
                                                        <img src={slackImage} alt="" className="avatar-xs" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md">
                                                <div>
                                                    <h4 className="fw-bold">Food Pickup And Delivery</h4>
                                                    <div className="hstack gap-3 flex-wrap">
                                                        <div><i className="ri-building-line align-bottom me-1"></i> pickup food and deliver to needed person and earn points</div>
                                                        <div className="vr"></div>
                                                        <div>Points : <span className="fw-medium">500</span></div>
                                                        {/* <div className="vr"></div>
                                                        <div>Due Date : <span className="fw-medium">29 Dec, 2021</span></div>
                                                        <div className="vr"></div>
                                                        <div className="badge rounded-pill bg-info fs-12">New</div>
                                                        <div className="badge rounded-pill bg-danger fs-12">High</div> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </Row>
                                    </div>
                                    {/* <div className="col-md-auto">
                                        <div className="hstack gap-1 flex-wrap">
                                            <button type="button" className="btn py-0 fs-16 favourite-btn active shadow-none">
                                                <i className="ri-star-fill"></i>
                                            </button>
                                            <button type="button" className="btn py-0 fs-16 text-body shadow-none">
                                                <i className="ri-share-line"></i>
                                            </button>
                                            <button type="button" className="btn py-0 fs-16 text-body shadow-none">
                                                <i className="ri-flag-line"></i>
                                            </button>
                                        </div>
                                    </div> */}
                                </Row>
                            </CardBody>
                        </div>
                    </Card>
                </Col>
            </Row>
            <Row>
       <PickUpWidgets/>

        </Row>
        <Row>
            
            <Col lg={6}>
            <Card style={{height:"96%"}}>
                                <CardHeader>
                                    <div style={{display:"flex", flexDirection:"row" , justifyContent:"space-between"}}>
                                    <h4 className="card-title mb-0">Food Saved In 2022</h4>
                                    <div className="toolbar d-flex align-items-start justify-content-start flex-wrap gap-2">
                                        <button type="button" className="btn btn-soft-primary timeline-btn btn-sm active"  id="six_months">
                                                    9M
                                                </button>
                                                <button type="button" className="btn btn-soft-primary timeline-btn btn-sm" id="one_month">
                                                    12M
                                                </button>
                                            
                                                <button type="button" className="btn btn-soft-primary timeline-btn btn-sm " id="one_year">
                                                    1Y
                                                </button>
                                                <button type="button" className="btn btn-soft-primary timeline-btn btn-sm" id="all">
                                                    ALL
                                                </button>
                                     </div>
                                    </div>
                                    

                                </CardHeader>
                                <CardBody >
                                    <div>
                                    <FoodSavedByDatesChart/>
                                    </div>
                                </CardBody>
                            </Card>
               
            
            </Col>
            <Col lg={6}>
                <PickupForm/>
            </Col>
        </Row>

                                    <Row>
                                        
                                        <Col lg={12}>
                                        <PickupHistoryTable/>
                                        </Col>
                                    </Row>

        </Container>
        

        {/* <Card> */}
        {/* <div className='mb-2' style={{display:"flex" , flexDirection:"row", flexWrap:"wrap",justifyContent:"flex-start"}}>
            <div style={{display:"flex" , flexDirection:"row", flexWrap:"wrap",justifyContent:"space-between",alignItems:"center"}}>
                <div className="avatar-lg" style={{display:"flex" , flexDirection:"row", flexWrap:"wrap",justifyContent:"center",alignItems:"center"}}>
                    <img src={slackImage} alt="user-img"
                        className="img-thumbnail rounded-circle" />
                </div>
                <div className="mt-3">
                                    <h3 className=" mb-1">Food Pickup And Delivery</h3>
                                    <p className="">pickup food and deliver to needed person and earn points</p>
                                    
                                </div>
            </div>
        </div> */}

        
        
       


        {/* </Card> */}
    </div>
  )
}
