import React,{useState, useEffect} from 'react';
import Country from './components/Country';
import { Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
    .then((rson)=> rson.json())
    .then((data)=> setCountries(data))

  }, [])

  const [selected, setSelected] = useState([]);

  const handleAddCountry = (country) =>{
    const newSelected = [...selected, country];
    setSelected(newSelected)
  }

  const [countrires, setCountries] = useState([]);

  const country_info =  countrires.map((country)=>{
              return(
                <Country country={country} handleAddCountry={handleAddCountry}></Country>
              );
            });
  const populations = selected.reduce((sum,country)=> sum +country.population,0)

  const country_list = selected.map((country)=> <p>{country.name.common}</p>)
  
  return (
    <div className="App">
      <h1>Country Information App</h1>
      <h5>Number of Countries : {countrires.length}</h5>
      {country_list}
      <p>{selected.length || 0} Countries are Selected and their total Population is {populations || 0} </p>

      
      <div className='country-wrapper'>
      <Container>
        <Row>
            {country_info}
        </Row>
      </Container> 
      </div>
    </div>
  );
}

export default App;
