import React,{ useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import {Accordion, Card, Button, Table} from 'react-bootstrap';
import Footer from './Footer'

function State() {
    let [stateData,setData] = useState({});
    let keys = Object.keys(stateData);
    useEffect(()=> {
        axios.get("https://api.covid19india.org/state_district_wise.json")
            .then(response => {setData(response.data)})
            
    }, []);
    
    return(
        <div className="row" style={{marginTop: "30px"}}>
            <div className="col-md-12">
                <Accordion>
                    {
                        keys.map((itm,k) => {
                            let dist = stateData[itm].districtData;
                            let total_cases = 0;
                            let total_death = 0;
                            let recovered = 0;
                            let active = 0;
                            let dist_list = [];
                            for(let x in dist) {
                                total_cases+=dist[x].confirmed;
                                total_death+=dist[x].deceased;
                                recovered+=dist[x].recovered;
                                active+=dist[x].active;
                                let ob = dist[x];
                                ob["dist_name"] = x;
                                dist_list.push(ob);   
                            }
                            return (
                                <Card>
                                    <Card.Header>
                                    <Accordion.Toggle as={Button} variant="primary" eventKey={k}>
                                        {itm}  <span className="btn btn-secondary">Total Cases - {total_cases}</span> <span className="btn btn-secondary">Total Active - {active}</span> <span className="btn btn-secondary">Total Recovered - {recovered}</span> <span className="btn btn-secondary">Total Death - {total_death}</span>
                                    </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey={k}>
                                    <Card.Body>
                                        <Table striped bordered hover>
                                            <thead>
                                                <tr>
                                                <th>Sl. No</th>
                                                <th>District</th>
                                                <th>Active Cases</th>
                                                <th>Death</th>
                                                <th>Recovery</th>
                                                <th>Total Cases</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            {
                                            dist_list.map((data,k) => {
                                                return (
                                                    <tr key={k}>
                                                        <td>{k}</td>
                                                        <td>{data.dist_name}</td>
                                                        <td>{data.active}</td>
                                                        <td>{data.deceased}</td>
                                                        <td>{data.recovered}</td>
                                                        <td>{data.confirmed}</td>
                                                    </tr>
                                                )
                                                })
                                            }
                                            </tbody>
                                        </Table>
                                    </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            )
                        })
                    } 
                </Accordion>
            </div>
            <Footer />
        </div>
        
    )
}

export default State;

