import React from "react";
import { BrowserRouter } from "react-router-dom";

import SnacksList from "./SnacksList";
import RoutesList from "./RoutesList";

/**Vending Machine component */
function VendingMachine(){

  // TODO: Logic
  //TODO: State
  return(
    <div>
      <h1>Vending Machine!</h1>
      <BrowserRouter>
        <SnacksList />
        <RoutesList />
      </BrowserRouter>
    </div>
  )
}

export default VendingMachine;
