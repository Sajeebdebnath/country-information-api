import React, { useState, useEffect } from "react";
import Country from "../components/Country";
import { Container, Row, Form } from "react-bootstrap";

const MainComponent = () => {
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((rson) => rson.json())
      .then((data) => setCountries(data));
  }, []);

  const [searchItem, setSearchItem] = useState("");

  const [countrires, setCountries] = useState([]);

  const country_info = countrires
    .filter((country) => {
      if (searchItem === " ") {
        return country;
      } else if (
        country.name.common
          .toLocaleLowerCase()
          .includes(searchItem.toLocaleLowerCase())
      ) {
        return country;
      }
    })
    .map((country) => {
      return (
        <Country
          country={country}
        ></Country>
      );
    });


  return (
    <div>
      <Container>
        <Row>
          <h1>Countries of the World</h1>
          <h5>Number of Countries : {country_info.length}</h5>
          <Form>
            <Form.Group>
              <Form.Control
                type="text"
                onChange={(event) => setSearchItem(event.target.value)}
                placeholder="Search Country.."
              />
            </Form.Group>
          </Form>
        </Row>
      </Container>

      <div className="country-wrapper">
        <Container>
          <Row>{country_info}</Row>
        </Container>
      </div>
    </div>
  );
};

export default MainComponent;
