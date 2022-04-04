import React, { useState } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useLoginContext } from "../context/LoginContext";

function Navbar() {
  const { checkLogin } = useLoginContext();
  const { logOut } = useLoginContext();
  const { data } = useLoginContext();
  const [state, setState] = useState({ activeItem: "home" });
  const handleItemClick = (e, { name }) => {
    checkLogin();
    setState({ activeItem: name });
  };
  const { activeItem } = state;

  return (
    <div>
      <Menu inverted pointing primary>
        <Link to="/">
          <Menu.Item active={activeItem === ""} onClick={handleItemClick}>
            <img
              size="mini"
              alt="logo"
              src="https://www.nicepng.com/png/full/223-2232564_icon-slack.png"
            />
          </Menu.Item>
        </Link>
        {data.loginStatus && (
          <Link to="/dashboard">
            <Menu.Item
              name="dashboard"
              active={activeItem === "dashboard"}
              onClick={handleItemClick}
            />
          </Link>
        )}
        <Menu.Menu position="right">
          {data.loginStatus && (
            <Link to="/">
              <Menu.Item
                name="signout"
                active={activeItem === "signin"}
                onClick={logOut}
              />
            </Link>
          )}
          {!data.loginStatus && (
            <Link to="/signin">
              <Menu.Item
                name="signin"
                active={activeItem === "signin"}
                onClick={handleItemClick}
              />
            </Link>
          )}
        </Menu.Menu>
      </Menu>
      <br />
    </div>
  );
}

export default Navbar;
