import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu, Segment, Button } from "semantic-ui-react";
import SigninForm from "./SigninForm";
import SignupForm from "./SignupForm";

export default class Signin extends Component {
  state = { activeItem: "Signin" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  render() {
    let toggle;
    const { activeItem } = this.state;
    if (activeItem === "Signin") {
      toggle = <SigninForm />;
    } else if (activeItem === "Signup") {
      toggle = <SignupForm />;
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
              <Link to="/institutesignin">
                <Button basic color="grey" content="Grey">
                  Institute
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
