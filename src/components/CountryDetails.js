import React,{ useState, useEffect} from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const CountryDetails = () => {
    const {countryName} = useParams();
    const [countryDetails, setCountryDetails] = useState('')

    useEffect(() => {
        const url = `https://restcountries.com/v3.1/name/${countryName}`;
        fetch(url)
        .then((res)=>res.json())
        .then((data)=> setCountryDetails(data[0]))

    }, []);

    const {area, region, subregion, cca2, cca3, ccn3} = countryDetails;

 
    return (
        <div>
            <Container>
                <Row>
                <h1 style={{textAlign:"left",marginBottom:"30px"}}>{countryName}</h1>
                    <Col>
                        <h3 className='item-heading'>Names</h3>
                        <Table bordered>
                            <tbody>
                                <tr>
                                    <th>Common</th>
                                    <td>{countryDetails.name?.common}</td>
                                </tr>
                                <tr>
                                    <th>Official</th>
                                    <td>{countryDetails.name?.official}</td>
                                </tr>
                                <tr>
                                    <th>Common (Native)</th>
                                    <td>{countryDetails.name?.nativeName?.ben?.common}</td>
                                </tr>
                                <tr>
                                    <th>Official (Native)</th>
                                    <td>{countryDetails.name?.nativeName?.ben?.official}</td>
                                </tr>
                                <tr>
                                    <th>Alternative spellings</th>
                                    <td>{countryDetails.altSpellings && countryDetails.altSpellings[0]}, {countryDetails.altSpellings && countryDetails.altSpellings[1]}, {countryDetails.altSpellings && countryDetails.altSpellings[2]} </td>
                                </tr>
                            </tbody>

                        </Table>

                        <h3 className='item-heading'>Codes</h3>
                        <Table bordered>
                            <tbody>
                                <tr>
                                    <th>ISO 3166-1 alpha-2	</th>
                                    <td>{cca2}</td>
                                </tr>
                                <tr>
                                    <th>ISO 3166-1 alpha-3	</th>
                                    <td>{cca3}</td>
                                </tr>
                                <tr>
                                    <th>ISO 3166-1 numeric	</th>
                                    <td>{ccn3}</td>
                                </tr>
                                <tr>
                                    <th>International calling code	</th>
                                    <td>{countryDetails.idd?.root}{countryDetails.idd?.suffixes[0]}</td>
                                </tr>
                                <tr>
                                    <th>Top level domain</th>
                                    <td>{countryDetails.tld && countryDetails.tld[0]} </td>
                                </tr>
                            </tbody>

                        </Table>
                    </Col>

                    <Col>
                            <h3 className='item-heading'>Geography</h3>
                            <Table bordered>
                                <tbody>
                                    <tr>
                                        <th>Region</th>
                                        <td>{region}</td>
                                    </tr>
                                    <tr>
                                        <th>Subregion</th>
                                        <td>{subregion}</td>
                                    </tr>
                                    <tr>
                                        <th>Capital</th>
                                        <td>{countryDetails.capital && countryDetails.capital[0]}</td>
                                    </tr>
                                    <tr>
                                        <th>Lat/Lng</th>
                                        <td><a href={countryDetails.maps?.openStreetMaps} target={"_blank"}> {countryDetails.latlng && countryDetails.latlng[0]},{countryDetails.latlng && countryDetails.latlng[1]}</a></td>
                                    </tr>
                                    <tr>
                                        <th>Area</th>
                                        <td>{area} km²</td>
                                    </tr>
                                    <tr>
                                        <th>Land borders</th>
                                        <td>{countryDetails.borders && countryDetails.borders[0]}, {countryDetails.borders && countryDetails.borders[1]}</td>
                                    </tr>
                                </tbody>

                        </Table>
                    </Col>
                    <Col>
                        <div style={{textAlign:"left"}}>
                            <h3 className='item-heading'>Flags</h3>
                            <img src={countryDetails.flags?.png} alt={countryDetails.name?.common} />
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default CountryDetails;