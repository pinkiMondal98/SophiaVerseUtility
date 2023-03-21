import React, {useEffect, useState} from 'react';
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
// import Flatpickr from "react-flatpickr";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import activityBg from '../../assets/images/demo/sophiaverse-1.png';
import successLogo from '../../assets/images/demo/giphy.gif';
import activity1 from "../../assets/images/brands/slack.png";
import classnames from "classnames";
import { ActivityTable } from '../ActivityTable';

export const ActivityList = () => {
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

  /**
   * Formats the size
   */
  return (
    <div className=''>
    <Card>
      <CardBody>
        <div className='' style={{padding:"10px"}}>
        </div>
      </CardBody>
    </Card>
     <ActivityTable/> 
    </div>
  )
}
