import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MainComponent from "./components/MainComponent";
import CountryDetails from "./components/CountryDetails";

function App() {
  

  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route>
              <Route extact path="/" element={<MainComponent />}/>
            </Route>
            <Route>
              <Route path="/country" element={<MainComponent />}/>
            </Route>
            <Route>
              <Route path="/country/:countryName" element={<CountryDetails />}/>
            </Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
