import React, { useEffect, useState } from "react";
import { StarFilled } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { Form, Input, Button, Col, Rate } from "antd";
import { useParams } from "react-router-dom";
import { reviewActions } from "../redux/actions/reviewActions";

const Reviews = () => {
  const dispatch = useDispatch();
  const isAuthorized = useSelector((state) => state.auth.isAuthorized);
  const reviewList = useSelector((state) => state.review.reviewList);
  const { id } = useParams();
  let [activePage, setActivePage] = useState(1);
  const [content, setReviewCont] = useState("");
  const [rating, setRating] = useState();
  const [form] = Form.useForm();

  const onFinish = (values) => {
    setReviewCont(values.review);
    console.log(content);
    dispatch(reviewActions.createReview(id, values.review, rating));
  };

  const getReview = () => {
    dispatch(reviewActions.getAllReviews(id, activePage));
  };

  useEffect(() => {
    getReview();
  }, [activePage, content]);

  return (
    reviewList && (
      <div className="overviewDetail">
        {console.log(reviewList)}
        {isAuthorized ? (
          <Form form={form} name="control-hooks" onFinish={onFinish}>
            <Form.Item
              name="review"
              label="Review"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item>
              <Rate
                allowHalf
                defaultValue={2.5}
                onChange={(value) => {
                  setRating(value);
                  console.log(value);
                }}
              />
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        ) : (
          <></>
        )}

        <h2>
          <StarFilled style={{ fontSize: "25px", color: "#ed3b5a" }} /> 5.0 (
          {reviewList.length}&nbsp; reviews)
        </h2>

        {reviewList &&
          reviewList.map((review) => (
            <>
              <div className="  horizontalLeft">
                <Col span={2}>
                  <img
                    className="avatarpic"
                    src={review.user.avatarUrl}
                    alt=""
                  />
                </Col>
                <Col span={22}>
                  <h3>{review.user.name}</h3>
                  <div>October 2020</div>
                </Col>
              </div>
              <br />
              <div>{review.content}</div>
            </>
          ))}
        <br />
        <button>Show more reviews</button>
      </div>
    )
  );
};

export default Reviews;
