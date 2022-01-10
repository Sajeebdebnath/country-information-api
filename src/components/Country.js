import React, {useState} from 'react';
import { Card, Button, Col } from 'react-bootstrap';

const Country = (props) => {
    const {name, flags, region, population, area} = props.country;

    const [area_info, setArea_info] = useState('');

    const showArea = () =>{
        setArea_info(area);
    }
    return (
        <Col>
            <div className='country'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={flags.png} height="150" />
                <Card.Body>
                    <Card.Title>{name.common}</Card.Title>
                    <Card.Text>
                        <small>
                            Region : <span>{region}</span> <br/>
                            Population : <span>{population}</span>
                        </small>
                        <br/>
                        <small>Area : {area_info || 'Hide'}</small>
                    </Card.Text>
                    <Button onClick={showArea} size='sm' style={{marginRight:"10px"}}>Show Area</Button>
                    <Button onClick={()=>props.handleAddCountry(props.country)} variant="success" size="sm">Add Country</Button>
                </Card.Body>
            </Card>
        </div>
        </Col>
    );
};

export default Country;