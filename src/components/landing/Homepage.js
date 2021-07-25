/**
 * Taken from terraling-ui
 * */

import React from "react";
import PropertyTable from "../properties/PropertyTable";
import Examples from "../rightmenu/Examples";
import "../../css/landing/Homepage.css";
import PropertyDesc from "../rightmenu/PropertyDesc";

function Homepage() {
  return (
    <div>
      PropertyContextProvider
      <h1>ValuesContextProvider</h1>
      <main className="properties">
        <div className="properties-card">
          <PropertyTable />
          <div className="properties-card-right">
            <div className="properties-card-top">
              <PropertyDesc />
            </div>
            <div className="properties-card-bottom">
              <Examples />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Homepage;
