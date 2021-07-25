import React from "react";
import "../../css/properties/TableList.css";

class TableList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "Yes" };
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    const items = this.props.items.todos;
    const listItems = items.map((item) => (
      <tr key={item.id} className="table-row">
        <td>{item.title}</td>
        <td>
          <select
            value={item.value}
            onChange={this.handleChange}
            style={{ backgroundColor: "#F3E63F" }}
            className="dropdown-menu"
          >
            <option value="grapefruit">{item.value}</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </td>
        <td>
          <select
            value={item.surness}
            onChange={this.handleChange}
            style={{ backgroundColor: "#F3E63F" }}
            className="dropdown-menu"
          >
            <option value="grapefruit">{item.surness}</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </td>
      </tr>
    ));

    return (
      <table className="table-container">
        <thead className="table-header">
          <tr>
            <th>Property Name</th>
            <th>Value</th>
            <th>Surness</th>
          </tr>
        </thead>
        <tbody className="table-body">{listItems}</tbody>
      </table>
    );
  }
}

export default TableList;
