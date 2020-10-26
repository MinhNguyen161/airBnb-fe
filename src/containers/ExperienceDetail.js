import React, { useEffect } from "react";
import { Row, Col } from "antd";
import {
  StarFilled,
  ClockCircleOutlined,
  UsergroupAddOutlined,
  MobileOutlined,
  MessageOutlined,
  LaptopOutlined,
  TeamOutlined,
  CheckCircleOutlined,
  LikeFilled,
  LockOutlined,
  SmileOutlined,
  EditOutlined,
} from "@ant-design/icons";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { experienceActions } from "../redux/actions";
import Reviews from "./Reviews";

const ExperienceDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch(experienceActions.getDetail(id));
  const expDetail = useSelector((state) => state.experience.selectedExp);
  const currentUser = useSelector((state) => state.auth.user);
  const isAuthorized = useSelector((state) => state.auth.isAuthorized);

  const scrollTo = (where) => {
    const element = document.getElementById(`${where}`);
    element.scrollIntoView({ behavior: "smooth" });
  };

  const getDetail = () => {
    dispatch(experienceActions.getDetail(id));
  };

  useEffect(() => {
    getDetail();
  }, [id]);

  return (
    expDetail && (
      <>
        <div className="container filterBar horizontalJustify detailSection">
          <div className="horizontalLeft">
            <div onClick={() => scrollTo("overview")} className="detailTag">
              Overview
            </div>
            <div onClick={() => scrollTo("host")} className="detailTag">
              The host
            </div>
            <div onClick={() => scrollTo("reviews")} className="detailTag">
              Reviews
            </div>
          </div>
          {isAuthorized && currentUser._id == expDetail.author._id ? (
            <Link to={`/exp/edit/${id}`}>
              <EditOutlined /> Edit Experience
            </Link>
          ) : (
            <></>
          )}
        </div>
        <div className="container verticalJustify">
          <div className="gallery">
            <div className="gallerySide">
              <img src={expDetail.pictureUrl[0]} alt="" className="gallery" />
            </div>
            {/* <div className="galleryCenter">
              <img
                src="../../images/airbnbLogo.png"
                alt=""
                className="gallery"
              />
              <img
                src="../../images/airbnbLogo.png"
                alt=""
                className="gallery"
              />
            </div> */}
            <div className="gallerySide">
              <img src={expDetail.pictureUrl[1]} alt="" className="gallery" />
            </div>
          </div>
          <div id="overview" className=" verticalJustify">
            <div className="overviewDetail ">
              <h1>{expDetail.title}</h1>
              <div>
                <StarFilled style={{ color: "#ed3b5a" }} /> 4.6 (
                {expDetail.reviewCount}) .{" "}
                {expDetail.author && expDetail.author.location}
              </div>
            </div>
            <div className="overviewDetail ">
              <Row>
                <Col
                  span={12}
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <h2>Online experience hosted by {expDetail.author.name}</h2>
                </Col>
                <Col span={12}>
                  <img
                    className="avatarpic"
                    src={expDetail.author.avatarUrl}
                    alt=""
                  />
                </Col>
              </Row>
              <br />
              <Row>
                <Col span={12}>
                  <ClockCircleOutlined style={{ fontSize: "25px" }} />{" "}
                  {expDetail ? expDetail.duration : "60 mins"}
                </Col>
                <Col span={12}>
                  <UsergroupAddOutlined style={{ fontSize: "25px" }} /> Up to 10
                  people. Private groups available for up to 30
                </Col>
              </Row>
              <br />
              <Row>
                <Col span={12}>
                  <MobileOutlined style={{ fontSize: "25px" }} /> Join from your
                  computer, phone, or tablet
                </Col>
                <Col span={12}>
                  <MessageOutlined style={{ fontSize: "25px" }} /> Hosted in
                  English
                </Col>
              </Row>
            </div>
            <div className="overviewDetail">
              <h2>What you'll do</h2>
              <p>Have fun during quarantine :)</p>
            </div>
            <div className="overviewDetail verticalLeft">
              <h2>How to participate</h2>
              <div className="horizontalLeft">
                <div className="participation">
                  <LaptopOutlined style={{ fontSize: "25px" }} />
                  <h3>Join a video call</h3>
                  <div>
                    Download Zoom for free on a desktop or mobile device. After
                    you book, you’ll receive an email with a link and details on
                    how to join.
                  </div>
                </div>
                <div className="participation">
                  <TeamOutlined style={{ fontSize: "25px" }} />
                  <h3>Book a private group</h3>
                  <div>
                    You can book private groups of any size, up to 30 guests.
                    Private group rates start at $200.
                  </div>
                </div>
              </div>
            </div>
            <div className="overviewDetail">
              <h2>What to bring</h2>
              <p>
                <CheckCircleOutlined style={{ fontSize: "20px" }} /> Laptop
              </p>
              <p>
                <CheckCircleOutlined style={{ fontSize: "20px" }} /> Pen & Paper
                (preferably a journal if long term booking)
              </p>
              <p>
                <CheckCircleOutlined style={{ fontSize: "20px" }} /> have space
                to move around
              </p>
              <p>
                <CheckCircleOutlined style={{ fontSize: "20px" }} /> good wifi
                connection
              </p>
              <p>
                <CheckCircleOutlined style={{ fontSize: "20px" }} /> Good
                lighting (this is crucial)
              </p>
              <p>
                <CheckCircleOutlined style={{ fontSize: "20px" }} />{" "}
                {expDetail.whatToBring[0]}
              </p>
              <p>
                <CheckCircleOutlined style={{ fontSize: "20px" }} />{" "}
                {expDetail.whatToBring[1]}
              </p>
            </div>
          </div>
          <div id="host" className=" overviewDetail verticalLeft">
            <div className="  horizontalLeft">
              <Col span={2}>
                <img
                  className="avatarpic"
                  src={expDetail.author.avatarUrl}
                  alt=""
                />
              </Col>
              <Col span={22}>
                <h3>Meet you host, {expDetail.author.name}</h3>
                <div>Host on Airbnb since 2017</div>
              </Col>
            </div>
            <br />
            <div className="horizontalLeft">
              <p>
                <StarFilled style={{ color: "#ed3b5a" }} /> 30 Reviews
                &nbsp;&nbsp;
                <LikeFilled style={{ color: "#ed3b5a" }} /> Identity verified
              </p>
            </div>
            <div>
              Hi, I'm the host.
              <br />
              Hope you have a great time during this hard time. <br />
              Thank you for joining me!
            </div>
            <br />
            <div className="horizontalLeft">
              <button> Contact host</button> &nbsp;&nbsp;
              <div>
                <LockOutlined /> To protect your payment, never transfer money
                or communicate outside of the Airbnb website or app.
              </div>
            </div>
          </div>
          <div className="overviewDetail verticalLeft">
            <h1>Airbnb Online Experiences</h1>
            <div className="horizontalLeft" style={{ textAlign: "center" }}>
              <Col span={2}>
                <SmileOutlined style={{ fontSize: "40px" }} />
              </Col>
              <Col span={6}>
                <h3>Thoughtful hosts</h3>
                <div>
                  Get to know hosts who share their expertise and a window to
                  their world.
                </div>
              </Col>
              <Col span={2}>
                <TeamOutlined style={{ fontSize: "40px" }} />
              </Col>
              <Col span={6}>
                <h3>Small group activities</h3>
                <div>
                  Meet people from all over the world while learning something
                  new together.
                </div>
              </Col>
              <Col span={2}>
                <LaptopOutlined style={{ fontSize: "40px" }} />
              </Col>
              <Col span={6}>
                <h3>Simple and global</h3>
                <div>
                  Join easily and participate from home without a lot of prep.
                </div>
              </Col>
            </div>
          </div>
          <div id="reviews">
            <Reviews />
            <div
              className="verticalLeft"
              style={{
                width: "100%",
                padding: "25px 0",
              }}
            >
              <h2>Things to know</h2>
              <div
                className="horizontalJustify"
                style={{ alignItems: "flex-start" }}
              >
                <Col span={6}>
                  <h3>Cancellation policy</h3>
                  <div>
                    Any experience can be canceled and fully refunded within 24
                    hours of purchase, or at least 7 days before the experience
                    starts.
                  </div>
                </Col>
                <Col span={6}>
                  <h3>Guest requirements</h3>
                  <div>
                    You’ll need an internet connection and the ability to stream
                    audio and video to participate. A link and details on how to
                    join will be included in your booking confirmation email.
                  </div>
                </Col>
                <Col span={6}>
                  <h3>More tips</h3>
                  <div>BE READY TO LEARN!</div>
                </Col>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  );
};

export default ExperienceDetail;
