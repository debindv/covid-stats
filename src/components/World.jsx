import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Table } from 'react-bootstrap';
import styled from 'styled-components';
import Footer from './Footer'

function World() {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get("https://corona.lmao.ninja/v2/countries")
            .then(response => {setData(response.data)})
    }, []);
    return(
        <div className="row">
            <div className="col-md-12">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>Country</th>
                        <th>Total Cases</th>
                        <th>Total Death</th>
                        <th>Active</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        data.map((item,index) => {
                            return (
                                <tr key={index}>
                                    <td><Image src={item.countryInfo.flag} alt="Flag" /></td>
                                    <td>{item.country}</td>
                                    <td>{item.cases}</td>
                                    <td>{item.deaths}</td>
                                    <td>{item.active}</td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </Table>
            </div>
            <Footer />
        </div>
    )
}

export default World;


const Image = styled.img`
    width: 50px;
`;