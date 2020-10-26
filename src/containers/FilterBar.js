import React, { useState } from "react";
import { DatePicker, Popover } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import { Link } from "react-router-dom";

const FilterBar = () => {
  const [visible, setVisible] = useState(false);
  const [inputRange, setInputRange] = useState({ min: 1, max: 100 });
  const onChange = (date, dateString) => {
    console.log(date, "----", dateString);
  };

  return (
    <div className="container filterBar horizontalJustify">
      <div className="horizontalLeft">
        <DatePicker
          onChange={onChange}
          placeholder="Date"
          style={{
            height: "40px",
            border: "solid 1px gray",
            borderRadius: "30px",
          }}
        />
        <Popover
          content={
            <div
              style={{ width: "300px", height: "200px" }}
              className="verticalJustify"
            >
              <div>The average price of an experience is $23.</div>
              <InputRange
                formatLabel={(value) => `$${value}`}
                maxValue={100}
                minValue={1}
                value={inputRange}
                onChange={(range) => setInputRange(range)}
              />
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
          <div className="pricePopBtn horizontalCenter">
            {inputRange.min == 1 && inputRange.max == 100
              ? `Price`
              : `$${inputRange.min} - $${inputRange.max}`}
          </div>
        </Popover>

        <select className="pricePopBtn horizontalCenter">
          <option>Sort By Price</option>
          <option value="lowtohigh">Lowest First</option>
          <option value="hightolow">Highest First</option>
        </select>
        <select className="pricePopBtn horizontalCenter">
          <option>Sort By Rating</option>
          <option value="lowtohigh">Lowest First</option>
          <option value="hightolow">Highest First</option>
        </select>
      </div>
      <Link to="/exp/create">Create experience</Link>
    </div>
  );
};

export default FilterBar;
