import React from "react";
import { Row, Col, Divider } from "antd";
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
} from "@ant-design/icons";
import "../App.css";

const Footer = () => {
  return (
    <div className="container footer">
      <Row justify="space-between">
        <Col>
          <h4>ABOUT</h4>
          <ul style={{ listStyleType: "none" }}>
            <li>How Airbnb works</li>
            <li>Newsroom</li>
            <li>Airbnb Plus</li>
            <li>Airbnb Luxe</li>
            <li>HotelTonight</li>
            <li>Airbnb for Work</li>
            <li>Olympics</li>
          </ul>
        </Col>
        <Col>
          <h4>COMMUNITY</h4>
          <ul style={{ listStyleType: "none" }}>
            <li>Diversity & Belonging</li>
            <li>Against Discrimination</li>
            <li>Accessibility</li>
            <li>Airbnb Associates</li>
            <li>Frontline Stays</li>
            <li>Invite friends</li>
            <li>Gift cards</li>
          </ul>
        </Col>
        <Col>
          <h4>HOST</h4>
          <ul style={{ listStyleType: "none" }}>
            <li>Host your home</li>
            <li>Host an Online Experience</li>
            <li>Host an Experience</li>
            <li>Responsible hosting</li>
            <li>Open Homes</li>
            <li>Resource Center</li>
            <li>Community Center</li>
          </ul>
        </Col>
        <Col>
          <h4>SUPPORT</h4>
          <ul style={{ listStyleType: "none" }}>
            <li>Updates for COVID-19</li>
            <li>Help Center</li>
            <li>Cancellation options</li>
            <li>Neighborhood Support</li>
            <li>Trust & Safety</li>
          </ul>
        </Col>
      </Row>
      <Divider />
      <Row justify="center">
        <FacebookOutlined style={{ fontSize: "25px" }} />
        &nbsp;
        <TwitterOutlined style={{ fontSize: "25px" }} />
        &nbsp;
        <InstagramOutlined style={{ fontSize: "25px" }} />
      </Row>
    </div>
  );
};

export default Footer;
