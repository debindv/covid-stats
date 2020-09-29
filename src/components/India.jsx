import React, { useEffect,useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import axios from 'axios'
import State from './State'

function India() {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get("https://corona.lmao.ninja/v2/countries")
            .then(response => {setData(response.data)})         
    }, []);
    let ind = data[93];
    let death;
    let active;
    let cases;
    let todayCases;
    let todayDeaths;
    let todayRecovered;
    let recovered;
    for (let x in ind) {
        if(x === "active"){
            active = ind[x];
        }
        else if (x === "cases") {
            cases = ind[x];
        }
        else if (x === "deaths") {
            death = ind[x];
        }
        else if (x === "todayCases") {
            todayCases = ind[x];
        }
        else if ( x === "todayDeaths" ) {
            todayDeaths = ind[x];
        }
        else if ( x === "todayRecovered") {
            todayRecovered = ind[x];
        }
        else if ( x === "recovered") {
            recovered = ind[x];
        }
    }
    return(
        <div className="row">
            <div className="col-md-12">
                <img src="https://www.countryflags.io/in/shiny/64.png" alt="Indian flag" />
                <h1>INDIA</h1>
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-3">
                            <Card className="badge badge-info" style={{ width: '18rem' }}>
                                <Card.Body className="text-center">
                                    <Card.Title>TOTAL DEATH</Card.Title>
                                        <h3>{death}</h3>
                                    <Card.Text>
                                        [Today: {todayDeaths}]
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-3">
                            <Card className="badge badge-info" style={{ width: '18rem' }}>
                                <Card.Body className="text-center">
                                    <Card.Title>ACTIVE CASES</Card.Title>
                                        <h3>{active}</h3>
                                    <Card.Text>
                                    [Today: {todayCases}]
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-3">
                            <Card className="badge badge-info" style={{ width: '18rem' }}>
                                <Card.Body className="text-center">
                                    <Card.Title>RECOVERY</Card.Title>
                                        <h3>{recovered}</h3>
                                        <Card.Text>
                                        [Today: {todayRecovered}]
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-3">
                            <Card className="badge badge-info" style={{ width: '18rem' }}>
                                <Card.Body className="text-center">
                                    <Card.Title>TOTAL CASES</Card.Title>
                                        <h3>{cases}</h3>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>  
            <State />
        </div>
    )
}

export default India;