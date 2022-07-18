import React from "react";
import { BrowserRouter, Link } from "react-router-dom";

import SnacksList from "./SnacksList";
import RoutesList from "./RoutesList";

/**Vending Machine component */
function VendingMachine({snacks}){

  // TODO: Logic
  //TODO: State
  return(
    <div>
      <h1>Vending Machine!</h1>
      Link
      <nav>
        Maperino<Link to="/{snack}"
      </nav>
      <BrowserRouter>
        <SnacksList />
        <RoutesList />
      </BrowserRouter>
    </div>
  )
}

export default VendingMachine;
