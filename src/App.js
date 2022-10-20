import React from "react";
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Container from "./demo";
import './App.css'
import Lif from "./Lifting";
import HomePage from "./Home";
import Contact from "./Contact";
import MyForm from "./Crud";
import Form from "./Funccrud";
import Create from "./Create";
import Read from "./Read";
function App() {
  function parentAlert() {
      alert("hello")
      
  }
  return (
      <>
          {/*<Contact/>*/}
          {/*<HomePage/>*/}
          {/*<Lif alert={parentAlert} />*/}

          {/*<Container/>*/}
          {/*<Switch>*/}
          {/*    <Route path="/" component={HomePage} />*/}
          {/*    <Route path="/contact" component={Contact}/>*/}
          {/*</Switch>*/}
          <BrowserRouter>
            <Routes>
              <Route exact path="/" element={ <Create />} />
              <Route path="/read" element={<Read />} />
            </Routes>
          </BrowserRouter>
          {/*<MyForm />*/}
          {/*<Form />*/}
          {/*<Create />*/}
      </>
  )

}

export default App;
