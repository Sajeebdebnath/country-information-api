import React, {useState} from 'react';
import { Link } from "react-router-dom";
import { Card, Button, Col } from 'react-bootstrap';
import LazyLoad from 'react-lazyload';



const Country = (props) => {
    const {name, flags, region, population, area} = props.country;

    const [population_info, setPopulation_info] = useState('');

    const showPopulation = () =>{
        setPopulation_info(population);
    }
    return (
        <Col style ={{display:"flex", justifyContent:"center"}}>
            <LazyLoad>
                <div className='country'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={flags.png} height="150" />
                        <Card.Body>
                            <Card.Title>
                                <Link className='country_link'  to={`/country/`+ name.common}>{name.common}</Link>
                            </Card.Title>
                            <Card.Text>
                                <small>
                                    Region : <span>{region}</span> <br/>
                                    Population : <span>{population_info || "Hide"}</span>
                                </small>
                                <br/>
                                <small>Area : {area} km²</small>
                            </Card.Text>
                            <Button onClick={showPopulation} size='sm' style={{marginRight:"10px"}}>Show Population</Button>
                            <Link className='country_link'  to={`/country/`+ name.common}><Button variant="success" size="sm">View Details</Button></Link>
                        </Card.Body>
                    </Card>
                </div>
            </LazyLoad>
        </Col>
    );
};

export default Country;