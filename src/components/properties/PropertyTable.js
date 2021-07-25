/**
 * Displays properties in a table for selection
 */
import React from "react";
import "../../css/properties/PropertyTable.css";
import TableList from "./TableList";
import Button from "@material-ui/core/Button";

class PropertyTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        {
          id: 1,
          title: "A1_Def_Subj",
          completed: true,
          value: "Yes",
          surness: "Certain"
        },
        {
          id: 2,
          title: "Aux Selection",
          completed: false,
          value: "N/A",
          surness: "None"
        },
        {
          id: 3,
          title: "PN Subj",
          completed: false,
          value: "N/A",
          surness: "None"
        },
        {
          id: 4,
          title: "A1_Def_Subj",
          completed: true,
          value: "Yes",
          surness: "Certain"
        },
        {
          id: 5,
          title: "Aux Selection",
          completed: false,
          value: "N/A",
          surness: "None"
        },
        {
          id: 6,
          title: "PN Subj",
          completed: false,
          value: "N/A",
          surness: "None"
        },
        {
          id: 7,
          title: "A1_Def_Subj",
          completed: true,
          value: "Yes",
          surness: "Certain"
        },
        {
          id: 8,
          title: "Aux Selection",
          completed: false,
          value: "N/A",
          surness: "None"
        },
        {
          id: 9,
          title: "PN Subj",
          completed: false,
          value: "N/A",
          surness: "None"
        }
      ]
    };
  }

  render() {
    return (
      <div>
        <div className="property-table">
          <h1>Properties</h1>
          <TableList items={this.state} />
        </div>
        <div className="nav-buttons">
          <Button
            className="button-unset"
            variant="contained"
            color="secondary"
            style={{ backgroundColor: "#C60404" }}
          >
            Next Unset
          </Button>
          <Button
            className="button-next"
            variant="contained"
            color="secondary"
            style={{ backgroundColor: "DarkGray" }}
          >
            Next
          </Button>
          <Button
            className="button-uncertain"
            variant="contained"
            color="secondary"
            style={{ backgroundColor: "#F4A408" }}
          >
            Next Uncertain
          </Button>
        </div>
      </div>
    );
  }
}

export default PropertyTable;
