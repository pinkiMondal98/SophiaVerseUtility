import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardHeader, Col, Container, DropdownItem, DropdownMenu, DropdownToggle, Input, Label, Nav, NavItem, NavLink, Pagination, PaginationItem, PaginationLink, Progress, Row, TabContent, Table, TabPane, UncontrolledCollapse, UncontrolledDropdown, Modal, ModalBody,Form} from 'reactstrap';
import classnames from 'classnames';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";

import profileBg from '../../../assets/images/demo/banner1.jpg';
import clientLogo from "../../../assets/images/demo/mindplex.svg"
import sophiaLogo from "../../../assets/images/demo/sophiaVerse4.jpg"
import foodSharing from '../../../assets/images/demo/foodSharing.jpg';

import avatar1 from '../../../assets/images/users/avatar-1.jpg';
import { EditProfileForm } from './EditProfileForm';
import Avatar from '../../../Components/Avatar';
import Flatpickr from "react-flatpickr";


export const ProfilePage = () => {
  
    SwiperCore.use([Autoplay]);

    const [activeTab, setActiveTab] = useState('1');
    const [activityTab, setActivityTab] = useState('1');
    const inputFileRef = React.useRef(null);
    const [isShown, setIsShown] = useState(false);
    const [show, setShow] = useState(false);
    const editClick = () => {
        inputFileRef.current?.click();
    }
    const [modal_successMessage, setmodal_successMessage] = useState(false);
    function tog_successMessage() {
        setmodal_successMessage(!modal_successMessage);
    }

    function handleFileUpload(e){
        e.preventDefault();
    }

    const toggleTab = (tab) => {
        if (activeTab !== tab) {
            setActiveTab(tab);
        }
    };

    const toggleActivityTab = (tab) => {
        if (activityTab !== tab) {
            setActivityTab(tab);
        }
    };
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <div className="profile-foreground position-relative mx-n4 mt-n4">
                        <div className="profile-wid-bg">
                            <img src={profileBg} alt="" className="profile-wid-img" />
                        </div>
                    </div>
                    <div className="pt-4 mb-4 mb-lg-3 pb-lg-2">
                        <Row className="g-4 mt-2">
                            <div className="col-auto" onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}>
                                <div className="avatar-lg">
                                    <Avatar profile = {avatar1}/>
                                    {isShown && (
                                        <i className="ri-edit-box-line text-white edit-icon" style={{position:'absolute',left:'5.9rem',fontSize:'1.5rem'}} onClick={editClick}></i>
                                    )}
                                    <input type="file" ref={inputFileRef} accept="image/*" onChange={handleFileUpload} style={{position:'absolute',display:'none'}}/>
                                </div>
                            </div>

                            <Col>
                                <div className="p-2">
                                    <h3 className="text-white mb-1">Alex Smith</h3>
                                    <p className="text-white">alexSmith@gmail.com</p>
                                    <div className="hstack text-white gap-1">
                                        <div className="me-2"><i
                                            className="ri-map-pin-user-line me-2 text-white fs-16 align-middle"></i>California,
                                            United States</div>
                                        <div><i
                                            className="ri-building-line me-2 text-white fs-16 align-middle"></i>Mindplex
                                        </div>
                                    </div>
                                </div>
                            </Col>

                            <Col xs={12} className="col-lg-auto order-last order-lg-0">
                                <Row className="text text-white text-center">
                                    <Col lg={4} xs={4}>
                                        <div className="p-2">
                                            <h4 className="text-white mb-1">24.3K</h4>
                                            <p className="fs-14 mb-0">Earned Points</p>
                                        </div>
                                    </Col>
                                    <Col lg={4} xs={4}>
                                        <div className="p-2">
                                            <h4 className="text-white mb-1">24.3K</h4>
                                            <p className="fs-14 mb-0">Redeemed Points</p>
                                        </div>
                                    </Col>
                                    <Col lg={4} xs={4}>
                                        <div className="p-2">
                                            <h4 className="text-white mb-1">98</h4>
                                            <p className="fs-14 mb-0">Total Activities</p>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row className="g-4">
                            {/* <Col className='col-4'></Col> */}
                            <Col className="col-12">
                                <Row className="text text-white text-center">
                                    <Col lg={3} xs={12}>
                                        <Card className="card-animate card-dark">
                                            <div className="p-2">
                                                <h4 className="text-white mb-1">Mindplex</h4>
                                                <div className="fs-14 mb-0">
                                                    {/* <div className='avatar-sm flex-shrink-0'> */}
                                                        <Row>
                                                            <Col className='col-6'>
                                                                <div className='avatar-sm flex-shrink-0' style={{float:'right'}}>
                                                                    <img src={clientLogo} alt="" className="avatar-title rounded-circle avatar-xs shadow" />
                                                                </div>
                                                            </Col>
                                                            <Col className='col-6'>
                                                                <span className='d-flex align-items-end justify-content-between mt-2'>Client</span>
                                                            </Col>
                                                        </Row>
                                                    {/* </div> */}
                                                </div>
                                            </div>
                                        </Card>
                                    </Col>
                                    <Col lg={3} xs={12}>
                                        <Card className="card-animate card-dark">
                                            <div className="p-2">
                                                <h4 className="text-white mb-1">Sophia Verse</h4>
                                                <div className="fs-14 mb-0">
                                                    <Row>
                                                        <Col className='col-6'>
                                                            <div className='avatar-sm flex-shrink-0' style={{float:'right'}}>
                                                                <span className="logo-sm" >
                                                                    <img src={sophiaLogo} alt="" className="avatar-title rounded-circle   avatar-xs shadow" />
                                                                </span>                                                            
                                                            </div>
                                                        </Col>
                                                        <Col className='col-6'>
                                                            <span className='d-flex align-items-end justify-content-between mt-2'>Protocol</span>
                                                        </Col>
                                                    </Row>
                                                </div>
                                            </div>
                                        </Card>
                                    </Col>
                                    <Col lg={3} xs={12}>
                                        <Card className="card-animate card-dark">
                                            <div className="p-2">
                                                <h4 className="text-white mb-1">BX0290325995</h4>
                                                <div className="fs-14 mb-0">
                                                    {/* <div className='avatar-sm flex-shrink-0'> style={{background:'#212529'}} */}
                                                        <Row>
                                                            <Col className='col-6'>
                                                                <div className='avatar-sm flex-shrink-0' style={{float:'right'}}>
                                                                    <span className='avatar-title bg-primary rounded-circle fs-16 text-white shadow'><i className="bx bx-user-pin"></i></span>
                                                                </div>
                                                            </Col>
                                                            <Col className='col-6'>
                                                                <span className='d-flex align-items-end justify-content-between mt-2'>Wallet ID</span>
                                                            </Col>
                                                        </Row>
                                                    {/* </div> */}
                                                </div>
                                            </div>
                                        </Card>
                                    </Col>
                                    <Col lg={3} xs={12}>
                                        <Card className="card-animate card-dark">
                                            <div className="p-2">
                                                <h4 className="text-white mb-1">24.3K</h4>
                                                <div className="fs-14 mb-0">
                                                    <Row>
                                                        <Col className='col-6'>
                                                            <div className='avatar-sm flex-shrink-0' style={{float:'right'}}>
                                                                <span className='avatar-title bg-primary rounded-circle fs-16 text-white shadow'><i className="bx bx-wallet "></i></span>
                                                            </div>
                                                        </Col>
                                                        <Col className='col-6'>
                                                            <span className='d-flex align-items-end justify-content-between mt-2'>Wallet Points</span>
                                                        </Col>
                                                    </Row>
                                                </div>
                                            </div>
                                        </Card>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </div>

                 <div className='mt-6 mb-3'>
                    <Row >
                        <Col xxl={3}>
                            {/* <Card>
                                <CardBody>
                                    <h5 className="card-title mb-5">Complete Your Profile</h5>
                                    <Progress value={30} color="danger" className="animated-progess custom-progress progress-label" ><div className="label">30%</div> </Progress>
                                </CardBody>
                            </Card> */}

                            <Card>
                                <CardBody>
                                    <h5 className="card-title mb-3">Personal Info</h5>
                                    <div className="table-responsive">
                                        <Table className="table-borderless mb-0">
                                            <tbody>
                                                <tr>
                                                    <th className="ps-0 fs-16" scope="row">Full Name :</th>
                                                    <td className="text-muted fs-16">Alex Smith</td>
                                                {/* </tr>
                                                <tr> */}
                                                    <th className="ps-0 fs-16" scope="row">Mobile :</th>
                                                    <td className="text-muted fs-16">+(1) 987 6543</td>
                                                </tr>
                                                <tr>
                                                    <th className="ps-0 fs-16" scope="row">E-mail :</th>
                                                    <td className="text-muted fs-16">alexSmith@gmail.com</td>
                                                {/* </tr>
                                                <tr> */}
                                                    <th className="ps-0 fs-16" scope="row">Location :</th>
                                                    <td className="text-muted fs-16">California, United States
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th className="ps-0 fs-16" scope="row">Joining Date</th>
                                                    <td className="text-muted fs-16">24 Nov 2021</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                    <div className="flex-shrink-0">
                                        <a href="#" className="btn btn-primary float-end" onClick={()=>tog_successMessage()}><i className="ri-edit-box-line align-bottom"></i> Edit Profile</a>
                                    </div>
                                </CardBody>
                            </Card>
                            {/* <Card>
                                <CardBody>
                                    <h5 className="card-title mb-3">Wallet Info</h5>
                                    <div className="table-responsive">
                                        <Table className="table-borderless mb-0">
                                            <tbody>
                                                <tr>
                                                    <th className="ps-0" scope="row">Wallet Id :</th>
                                                    <td className="text-muted">BX0290325995</td>
                                                    <th className="ps-0" scope="row">Wallet Points:</th>
                                                    <td className="text-muted">24.9k</td>
                                                </tr>
                                                
                                            </tbody>
                                        </Table>
                                    </div>
                                </CardBody>
                            </Card> */}
                        </Col>
                    </Row>
                 </div>
                </Container>
                <Modal tabIndex="-1" isOpen={modal_successMessage} toggle={() => { tog_successMessage(); }} centered>
                    <ModalBody className='text-center p-5'>
                        <div className="">
                            <button type="button" onClick={() => { tog_successMessage(); }} className="btn-close float-end" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="mt-2">
                            <lord-icon src="https://cdn.lordicon.com/tqywkdcz.json" trigger="hover"
                                style={{width: "150px", height: "150px" }}>
                            </lord-icon>
                            <EditProfileForm/>
                        </div>
                    </ModalBody>
                </Modal>
            </div>
        </React.Fragment>
    )


}
