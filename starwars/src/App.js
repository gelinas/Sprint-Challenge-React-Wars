// dependencies
import React, { useEffect, useState }  from "react";
import axios from "axios";
import {
  Button
} from "reactstrap";
// components
import CharPage from "./components/characterpage"

// styles
import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [characterPage, setCharacterPage] = useState({});
  const [currentPage, setCurrentPage] = useState(`https://swapi.co/api/people/`);

  useEffect(() => {
    console.log(currentPage);
    
    axios
      .get(currentPage)
      .then(response => {
        const characterPage = response.data;
        console.log("CHARACTER PAGE:", characterPage);
        setCharacterPage(characterPage);
      })

      .catch(error => {
        console.log("The data was not returned", error);
      });
  }, [currentPage]);

  console.log(characterPage);

  return (
    <div className="App">
      {/*HEADER*/}
      
      <h1 className="Header">React Wars</h1>
      <Button color="danger" onClick={() => setCurrentPage(characterPage.previous)}>
        Previous Page!
      </Button>
      <Button color="success" onClick={() => setCurrentPage(characterPage.next)}>
        Next Page!
      </Button>
      <br /><br />

      {/*NAV*/}

      {/*JUMBOTRON */}

      {/*CHARACTER PAGE*/
      console.log("on app.js", characterPage.results)}
      <CharPage characterList={characterPage.results} />
      
      {/*FOOTER*/}
    </div>
  );
}

export default App;
