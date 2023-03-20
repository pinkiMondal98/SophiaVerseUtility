import React, {useState} from 'react'
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
import { useNavigate } from "react-router-dom";

// import { Alert, Button, Card, CardBody, Col, Container, Input,  ModalHeader, PopoverBody, PopoverHeader, Row, UncontrolledPopover, UncontrolledTooltip } from 'reactstrap';
import { Link } from 'react-router-dom';

import classnames from "classnames";
import dummyUser from "../../../assets/images/users/user-dummy-img.jpg";


export const PickupForm = () => {
  const history = useNavigate();
  // let history = useHistory();
  const [activeTab, setactiveTab] = useState(1);
  const [progressbarvalue, setprogressbarvalue] = useState(0);
  const [passedSteps, setPassedSteps] = useState([1]);
  const [activeTab1, setactiveTab1] = useState("1");
  const [justifyTab, setjustifyTab] = useState("1");
  const justifyToggle = (tab) => {
      if (justifyTab !== tab) {
          setjustifyTab(tab);
      }
  };

  function toggleTab(tab, value) {
    if (activeTab !== tab) {
      var modifiedSteps = [...passedSteps, tab];

      if (tab >= 1 && tab <= 4) {
        setactiveTab(tab);
        setPassedSteps(modifiedSteps);
      }
    }
    setprogressbarvalue(value);
  }

  const [defaultCounter, setdefaultCounter] = useState(50);
  const [defaultCounterBoxes, setdefaultCounterBoxes] = useState(1);

  function countUP(id, prev_data_attr) {
    id(prev_data_attr + 1);
  }

  function countDown(id, prev_data_attr) {
    if(prev_data_attr>0){
    id(prev_data_attr - 1);}
  }
  const [modal_successMessage, setmodal_successMessage] = useState(false);
  function tog_successMessage() {
      setmodal_successMessage(!modal_successMessage);
  }

  return (
    <div className=''>
       <Modal id="success-Payment" tabIndex="-1" isOpen={modal_successMessage} toggle={() => { tog_successMessage(); }} centered>
                <ModalBody className='text-center p-5'>
                    <div className="text-end">
                        <button type="button" onClick={() => { tog_successMessage(); }} className="btn-close text-end" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="mt-2">
                        <lord-icon src="https://cdn.lordicon.com/tqywkdcz.json" trigger="hover"
                            style={{width: "150px", height: "150px" }}>
                        </lord-icon>
                        <h4 className="mb-3 mt-4">Points Earned Successfully</h4>
                        <p className="text-muted fs-15 mb-4">You have been earned 500 points for your activity. Complete More challenges to earn more points</p>
                        <div className="hstack gap-2 justify-content-center">
                            <button className="btn btn-primary" onClick={() => history("/dashboard")}>Go To dashboard</button>
                            {/* <button className="btn btn-soft-success" ><i className="ri-links-line align-bottom"></i> Go to dashboard</button> */}
                        </div>
                    </div>
                </ModalBody>
    </Modal>
    <Card>
      <CardBody>
      <div className='' style={{padding:"10px"}}>
        <Form action="#" >
            <div className="text-center pt-3 pb-4 mb-1">
                <h5>Food Pick Up Form </h5>
                {/* <hr></hr> */}
            </div>
            <div>
               
                <div className="mb-2">

                <Row>

                    <Col md={6} >
                    <Label className="form-label mb-0">PROVIDERS</Label>
                    <select className="form-select mb-2" aria-label="Default select example">
                            <option >Search for Providers</option>
                            <option defaultValue="1">Save On Foods</option>
                            <option defaultValue="2">Urban Fare </option>
                            <option defaultValue="3">Simple Goodness</option>
                            <option defaultValue="3">Nesters Market</option>
                            <option defaultValue="3">Mein Hardt</option>

                        </select>
                    </Col>
                    <Col md={6} >
                    <Label className="form-label mb-0">LOCATIONS</Label>
                    <select className="form-select mb-2" aria-label="Default select example">
                            <option >Search for Locations</option>
                            <option defaultValue="1">Store - 199</option>
                            <option defaultValue="2">Store - 324</option>
                            <option defaultValue="3">Store - 354</option>
                            <option defaultValue="3">Store - 243</option>
                            <option defaultValue="3">Store - 123</option>
                    </select>
                    </Col>

                  <Row>
                    <Col md={8}>
                    <Col className='mt-2' md ={8}>
                        <Label className="form-label mb-1">DATE</Label>
                        <Flatpickr
                            className="form-control"
                            options={{
                            dateFormat: "Y-m-d",
                            defaultDate: ["2022-01-20"]
                            }}
                        />
                    </Col>
                    <Col className='mt-4' md={12}>
                    <Label className="mt-1 mb-1 form-label ">WHAT WAS PICKED UP</Label>

                    <div style={{display:"flex" , flexDirection:"row", flexWrap:"wrap", justifyContent:"flex-start"}}>

                        <div  className="mx-2 form-check form-radio-primary mb-2">
                                    <Input className="form-check-input" type="radio" name="formradiocolor1" id="formradioRight5" defaultChecked />
                                    <Label className="form-check-label" htmlFor="formradioRight5">
                                        Bakery
                                    </Label>
                        </div>
                        <div  className="mx-2 form-check form-radio-primary mb-2">
                                    <Input className="form-check-input" type="radio" name="formradiocolor1" id="formradioRight5"  />
                                    <Label className="form-check-label" htmlFor="formradioRight5">
                                        Diary
                                    </Label>
                        </div>
                        <div  className="mx-2 form-check form-radio-primary mb-2">
                                    <Input className="form-check-input" type="radio" name="formradiocolor1" id="formradioRight5"  />
                                    <Label className="form-check-label" htmlFor="formradioRight5">
                                       Meat & Fish
                                    </Label>
                        </div>
                        <div  className="mx-2 form-check form-radio-primary mb-2">
                                    <Input className="form-check-input" type="radio" name="formradiocolor1" id="formradioRight5" />
                                    <Label className="form-check-label" htmlFor="formradioRight5">
                                       Deli
                                    </Label>
                        </div>
                        <div  className="mx-2 form-check form-radio-primary mb-2">
                                    <Input className="form-check-input" type="radio" name="formradiocolor1" id="formradioRight5" />
                                    <Label className="form-check-label" htmlFor="formradioRight5">
                                       Produce
                                    </Label>
                        </div>
                        <div  className="mx-2 form-check form-radio-primary mb-2">
                                    <Input className="form-check-input" type="radio" name="formradiocolor1" id="formradioRight5" />
                                    <Label className="form-check-label" htmlFor="formradioRight5">
                                       Grocery
                                    </Label>
                        </div>
                        <div  className="mx-2 form-check form-radio-primary mb-2">
                                    <Input className="form-check-input" type="radio" name="formradiocolor1" id="formradioRight5" />
                                    <Label className="form-check-label" htmlFor="formradioRight5">
                                       Others
                                    </Label>
                        </div>
                    </div>
                    </Col>
                    </Col>
                    <Col md={4}>

                      <Card>

                          <CardBody>
                <Label className="form-label mb-2">FOOD MEASUREMENT</Label>


                                <Nav pills className="nav-primary mb-2">
                                            <NavItem>
                                                <NavLink style={{ cursor: "pointer" }} className={classnames({ active: justifyTab === "1", })} onClick={() => { justifyToggle("1"); }} >
                                                    Weight(lbs)
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink style={{ cursor: "pointer" }} className={classnames({ active: justifyTab === "2", })} onClick={() => { justifyToggle("2"); }} >
                                                   Banana Boxes
                                                </NavLink>
                                            </NavItem>
                                        
                                </Nav>
                            <TabContent activeTab={justifyTab} className="text-muted">
                                        <TabPane tabId="1" id="base-justified-home">
                                        <div>
                          
                          <div className="input-step">
                            <button
                              type="button"
                              className="minus"
                              onClick={() => {
                                countDown(setdefaultCounter, defaultCounter);
                              }}
                            >
                              –
                            </button>
                            <Input
                              type="number"
                              className="product-quantity"
                              value={defaultCounter}
                              min="0"
                              max="100000"
                              readOnly
                            />
                            <button
                              type="button"
                              className="plus"
                              onClick={() => {
                                countUP(setdefaultCounter, defaultCounter);
                              }}
                            >
                              +
                            </button>
                          </div>
                        </div>
                                        </TabPane>

                                        <TabPane tabId="2" id="product">
                                        <div>
                          <h5 className="fs-13 fw-medium text-muted">
                            {/* Default */}
                          </h5>
                          <div className="input-step">
                            <button
                              type="button"
                              className="minus"
                              onClick={() => {
                                countDown(setdefaultCounterBoxes, defaultCounterBoxes);
                              }}
                            >
                              –
                            </button>
                            <Input
                              type="number"
                              className="product-quantity"
                              value={defaultCounterBoxes}
                              min="0"
                              max="100000"
                              readOnly
                            />
                            <button
                              type="button"
                              className="plus"
                              onClick={() => {
                                countUP(setdefaultCounterBoxes, defaultCounterBoxes);
                              }}
                            >
                              +
                            </button>
                          </div>
                        </div>
                                        </TabPane>
                                        </TabContent>
                          </CardBody>
                        </Card>
                      </Col>
                  </Row>
                </Row>
               
                </div>

                <div className="mt-1 mb-1">
                    <Row>
                        <Col md={6}>
                        <div>
                        <Label className="form-label mb-0">DESTINATION TYPE</Label>
                        <select className="form-select mb-3" aria-label="Default select example">
                            <option >Search for Destination</option>
                            <option defaultValue="1">Refugees</option>
                            <option defaultValue="2">Farmers</option>
                            <option defaultValue="3">Charities</option>
                            <option defaultValue="3">Volunteer</option>
                            <option defaultValue="3">Non-profits</option>
                        </select>
                    </div>
                        </Col>
                        <Col md={6}>
                        <div>
                        <Label className="form-label mb-0">DESTINATION ADDRESS</Label>
                        <select className="form-select mb-3" aria-label="Default select example">
                            <option >Search for Destination Address</option>
                            <option defaultValue="1">Street - 409</option>
                            <option defaultValue="2">greenway Farms</option>
                            <option defaultValue="3">Street - 234</option>
                            <option defaultValue="3">Street - 235</option>
                            <option defaultValue="3"> Street - 298</option>
                        </select>
                    </div>
                        </Col>
                    </Row>
                    
                </div>
                <div style={{display:"flex" , flexDirection:"row", flexWrap:"wrap", justifyContent:"space-around"}}>
                <button type="button" className="mx-auto px-auto btn btn-primary waves-effect waves-light" onClick={() => setmodal_successMessage(true)}>Submit Information</button>

                </div>
                </div>
                

               

        </Form>

        </div>
      </CardBody>
   
    </Card>
      
    </div>
  )
}
