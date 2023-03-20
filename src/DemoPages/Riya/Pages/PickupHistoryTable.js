import React from 'react';
import { Grid, _ } from 'gridjs-react';
import { Card, CardBody, CardHeader, Col, Container, Row } from 'reactstrap';
import wire from "../../../assets/images/demo/wire.jpg"
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const data = [
    ["Urban Fare", "Store 234", "12/09/2022", "12", "Bakery","Refugee","street-234",'4358'],
    ["Save On Foods", "Store 344", "11/10/2022", "22", "Diary","Non Profits","Help Organization",'8358'],
    [ "Urban Fare", "Store 664", "15/12/2022", "32", "Deli","Charities","Charity - 13",'8658'],
    ["Save On Foods", "Store 235", "21/09/2022", "16", "Bakery","Refugee","street-234",'5358'],
    ["Urban Fare", "Store 214", "13/08/2022", "45", "Deli","Refugee","street-214",'1234'],
    ["Simple Goodness", "Store 224", "2/09/2022", "24", "Deli","Farmers","Green Farms",'9754'],
    [ "Nesters Market", "Store 534", "25/12/2022", "42", "Bakery","Charities","street-234",'9758'],
    ["Urban Fare", "Store 273", "16/07/2022", "21", "Diary","Refugee","street-224",,'2458'],


];

const scanLink = `https://etherscan.io/tx/0xfa430d80e107aeb588cf54f8112af0e5bccf5019a957222998a37715e1a015c4`;

export const PickupHistoryTable = () => {
  return (
        <Card>
                                <CardHeader>
                                    <h4 className="card-title mb-0 flex-grow-1">Activity History</h4>
                                </CardHeader>

                                <CardBody>
                                    <div id="table-gridjs">
                                                            <Grid
                                            data={data}
                                            columns={[
                                                {name:"Provider",width:"150px"},
                                                {name:"Location",width:"150px"},
                                                {name:"Date",width:"100px"},
                                                {name:"Weight",width:"90px"},


                                               
                                                {
                                                    name:"Food Type",
                                                    width:"120px",
                                                    formatter: (cell) => _(<div>
                                                        {console.log(typeof cell)}
                                                       {cell === 'Bakery' && <span className="badge badge-soft-primary">{cell}</span>}  
                                                       {cell === 'Diary' && <span className="badge badge-soft-info">{cell}</span>}  
                                                       {cell === 'Deli' && <span className="badge badge-soft-success">{cell}</span>}  

                                                    </div>
                                                    )
                                                },
                                                // "Type",
                                                ,{name:"Destination",width:"120px",formatter : (cell) => _(<span className="text-success">{cell}</span>) },

                                                {name:"Destination Address",width:"200px"},
                                                ,{
                                                    name:"Trx Hash",
                                                    width:"250px",
                                                    formatter : (cell) => _(<div className="d-flex align-items-center gap-2">

                                                    <div className="d-flex align-items-center">
                                                        <img src={wire} alt="" className="avatar-xs rounded-circle me-2" /><a href={scanLink} className="text-info p-0" >
                                                            {`0X${cell}.....${cell}`} 
                                                            {/* {`${cell}`} */}
                                                        </a>
                                                    </div>
    
    
                                                    <span role="button" className="fa-layers text-gray fa-fw p-0" >
                                                        <FontAwesomeIcon icon={faCopy} />
                                                        {/* <FontAwesomeIcon icon="fa-solid fa-copy" /> */}
                                                        {/* <i className="fa-light fa-copy"></i> */}
                                                    </span>
                                                </div>)
                                                },
                                            ]}
                                            search={true}
                                            sort={true}
                                            pagination={{ enabled: true, limit: 5, }}
                                    />
                                    </div>
                                </CardBody>
                            </Card>

  )
}
