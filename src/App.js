//childs
//import Child1 from './components/child';
//import Child2 from './components/child2';
//import {ArrayFunctions} from './components/arrayFunctions';
//Hooks
//import React, { useState } from "react";

import { BrowserRouter } from "react-router-dom";
import { Router } from "./components/Router/router";


function App() {
  return( 
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )
}

export default App;
