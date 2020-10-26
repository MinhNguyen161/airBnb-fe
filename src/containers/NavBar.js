import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { Popover } from "antd";
import { MenuOutlined, UserOutlined, CloseOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import { useSelector } from "react-redux";
import { authReducer } from "../redux/reducers";
import "../App.css";

const NavBar = () => {
  const isAuthorized = useSelector((state) => state.auth.isAuthorized);
  const user = useSelector((state) => state.auth.user);
  const [visible, setVisible] = useState(false);
  const history = useHistory();

  return (
    <div className="container horizontalJustify">
      <Link to="/">
        <img src="/images/airbnbLogo.png" alt="logo" className="logo" />
      </Link>
      <Popover
        style={{ borderRadius: "20px" }}
        title={
          <div style={{ height: "100px" }} className="verticalJustify">
            <div
              className="popOverMenu"
              onClick={() => history.push("/register")}
            >
              Sign up
            </div>
            <div className="popOverMenu" onClick={() => history.push("/login")}>
              Log in
            </div>
          </div>
        }
        content={
          <div style={{ height: "160px" }} className="verticalJustify">
            <div
              className="popOverMenu"
              onClick={() => history.push("/exp/create")}
            >
              Host an experience
            </div>
            <div className="popOverMenu">Help</div>
            <div className="popOverMenu" onClick={() => setVisible(false)}>
              <CloseOutlined />
              Close
            </div>
          </div>
        }
        trigger="click"
        visible={visible}
        onVisibleChange={(visible) => setVisible({ visible })}
      >
        <div className="popOverBtn horizontalJustify">
          <MenuOutlined style={{ fontSize: "15px" }} /> &nbsp;&nbsp;
          {isAuthorized ? (
            <span>Hi! {user.name}</span>
          ) : (
            <UserOutlined style={{ fontSize: "22px" }} />
          )}
        </div>
      </Popover>
    </div>
  );
};

export default NavBar;
