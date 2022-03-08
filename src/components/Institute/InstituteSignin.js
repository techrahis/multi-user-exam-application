import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu, Segment, Button } from "semantic-ui-react";
import SigninCollege from "./SigninCollege";
import SignupCollege from "./SignupCollege";

export default class InstituteSignin extends Component {
  state = { activeItem: "Signin" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  render() {
    let toggle;
    const { activeItem } = this.state;
    if (activeItem === "Signin") {
      toggle = <SigninCollege />;
    } else if (activeItem === "Signup") {
      toggle = <SignupCollege />;
    }
    return (
      <div>
        <Segment>
          <Menu tabular>
            <Menu.Item
              name="Signin"
              active={activeItem === "Signin"}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="Signup"
              active={activeItem === "Signup"}
              onClick={this.handleItemClick}
            />

            <Menu.Item position="right">
              <Link to="/signin">
                <Button basic color="grey" content="Grey">
                  Student
                </Button>
              </Link>
            </Menu.Item>
          </Menu>
          {toggle}
        </Segment>
      </div>
    );
  }
}
