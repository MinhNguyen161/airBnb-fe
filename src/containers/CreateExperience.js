import React, { useState } from "react";
import "antd/dist/antd.css";
import { Form, Input, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { experienceActions } from "../redux/actions/experienceActions";
import { useHistory } from "react-router-dom";

const CreateExperience = () => {
  const user = useSelector((state) => state.auth.user);
  let author = user._id;
  const history = useHistory();
  const dispatch = useDispatch();
  const { TextArea } = Input;
  let [pictureUrl, setpictureUrl] = useState([]);

  // handle form submission---------
  const [form] = Form.useForm();
  const onFinish = (values) => {
    const { title, country, price, duration, whatToBring, content } = values;
    dispatch(
      experienceActions.createExperience(
        title,
        country,
        price,
        duration,
        whatToBring,
        content,
        author,
        pictureUrl
      )
    );
    history.push("/");
  };
  const onReset = () => {
    form.resetFields();
    setpictureUrl([]);
  };
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };
  //end handle form submit-----

  //handle submit image ----
  const openWidget = () => {
    // create the widget
    const widget = window.cloudinary.createUploadWidget(
      {
        cloud_name: "ellenlinh",
        upload_preset: "gzkez3bx",
      },
      (error, result) => {
        if (result.event === "success") {
          let newImg = result.info.secure_url;
          setpictureUrl([...pictureUrl, newImg]);
          console.log([...pictureUrl, newImg]);
        }
      }
    );
    widget.open(); // open up the widget after creation
  };
  //end submit img ------

  return (
    <div className="container verticalJustify register">
      <h1>Create experience</h1>
      <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
        <Form.Item
          name="title"
          label="Event title"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="duration"
          label="Duration"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="price"
          label="Price"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="content"
          label="Content"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <TextArea allowClear />
        </Form.Item>
        <Form.Item
          name="whatToBring"
          label="Require"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <TextArea allowClear />
        </Form.Item>
        <Form.Item
          name="country"
          label="Location"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <div className="horizontalCenter">
          <div
            className="verticalCenter imgUpload"
            onClick={() => openWidget()}
          >
            {pictureUrl[0] ? (
              <img src={pictureUrl[0]} alt="" style={{ maxWidth: "100%" }} />
            ) : (
              <>
                <PlusOutlined />
                <p>Add image</p>
              </>
            )}
          </div>
          <div
            className="verticalCenter imgUpload"
            onClick={() => openWidget()}
          >
            {pictureUrl[1] ? (
              <img src={pictureUrl[1]} alt="" style={{ maxWidth: "100%" }} />
            ) : (
              <>
                <PlusOutlined />
                <p>Add image</p>
              </>
            )}
          </div>
          <div
            className="verticalCenter imgUpload"
            onClick={() => openWidget()}
          >
            {pictureUrl[2] ? (
              <img src={pictureUrl[2]} alt="" style={{ maxWidth: "100%" }} />
            ) : (
              <>
                <PlusOutlined />
                <p>Add image</p>
              </>
            )}
          </div>
          <div
            className="verticalCenter imgUpload"
            onClick={() => openWidget()}
          >
            {pictureUrl[3] ? (
              <img src={pictureUrl[3]} alt="" style={{ maxWidth: "100%" }} />
            ) : (
              <>
                <PlusOutlined />
                <p>Add image</p>
              </>
            )}
          </div>
        </div>
        <p>Pick the best 4 pictures to represent your event.</p>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Create
          </Button>
          <Button htmlType="button" onClick={onReset}>
            Reset form
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CreateExperience;
