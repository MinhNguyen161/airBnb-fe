import React, { useState, useEffect } from "react";
import { HeartTwoTone, StarFilled } from "@ant-design/icons";

const Experience = ({ exp, goToDetail }) => {
  return (
    exp && (
      <div
        className="card verticalJustifyB"
        onClick={() => {
          goToDetail(exp._id);
        }}
      >
        <div className="cardImg">
          <div className="displayImg">
            <img
              src={
                exp.pictureUrl[0]
                  ? exp.pictureUrl[0]
                  : "../../images/airbnbLogo.png"
              }
              alt=""
            />
          </div>
          <div className="like">
            <HeartTwoTone
              style={{
                twoToneColor: "rgba(0, 0, 0, 0.37)",
                color: "white",
                fontSize: "20px",
              }}
            />
          </div>
        </div>

        <div>
          <div>
            <StarFilled style={{ color: "#ed3b5a" }} /> 4.6 ({exp.reviewCount})
            . {exp.author && exp.author.location}
          </div>
          <div>{exp.title}</div>
          <div>
            <b>From ${exp.price}</b> / person
          </div>
        </div>
      </div>
    )
  );
};

export default Experience;
