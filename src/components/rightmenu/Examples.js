import React from "react";
import "../../css/rightmenu/Examples.css";
import Button from "@material-ui/core/Button/";

class Examples extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      default: "No property has been selected for editing examples yet.",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer necodio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin quam. Etiam ultrices. Suspendisse in justo eu magna luctus suscipit. Sed lectus. Integer euismod lacus luctus magna. Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at interdum magna augue eget diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi lacinia molestie dui."
    };
  }
  render() {
    return (
      <div className="examples-container">
        <div className="examples-header">
          <h1 className="examples-header-title">Examples</h1>
          <Button
            className="examples-header-button-left"
            variant="contained"
            color="secondary"
            style={{ backgroundColor: "#ff6584" }}
          >
            Edit
          </Button>
          <Button
            className="examples-header-button-right"
            variant="contained"
            color="secondary"
            style={{ backgroundColor: "#FF6584" }}
          >
            Create
          </Button>
        </div>
        <textarea
          className="examples-text"
          defaultValue={this.state.default}
        ></textarea>
      </div>
    );
  }
}

export default Examples;
