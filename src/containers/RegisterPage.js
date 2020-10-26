import React, { useState } from "react";
import "antd/dist/antd.css";
import { Form, Input, Button, Divider } from "antd";
import {
  EyeTwoTone,
  EyeInvisibleOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { userActions } from "../redux/actions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const RegisterPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  let [avatarUrl, setAvatarUrl] = useState("");
  let [formData, setFormData] = useState({});

  // handle form submission---------
  const [form] = Form.useForm();
  const onFinish = (values) => {
    setFormData(values);
    const { name, email, password, location, language } = values;
    dispatch(
      userActions.register(name, email, password, location, language, avatarUrl)
    );
    history.push("/login");
  };
  const onReset = () => {
    form.resetFields();
    setAvatarUrl("");
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
      offset: 4,
      span: 20,
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
          setAvatarUrl(result.info.secure_url);
        }
      }
    );
    widget.open(); // open up the widget after creation
  };
  //end submit img ------

  return (
    <div className="container verticalJustify register">
      <h1>Sign up</h1>
      <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
        <Form.Item
          name="name"
          label="Username"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input.Password
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
        </Form.Item>
        <Form.Item
          name="location"
          label="Country"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="language"
          label="Language"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <div
          className="verticalCenter imgUpload"
          style={{ marginLeft: "33%" }}
          onClick={() => openWidget()}
        >
          {avatarUrl ? (
            <img src={avatarUrl} alt="" style={{ maxWidth: "100%" }} />
          ) : (
            <>
              <PlusOutlined />
              <p>Add avatar</p>
            </>
          )}
        </div>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Sign up
          </Button>
          <Button htmlType="button" onClick={onReset}>
            Reset form
          </Button>
        </Form.Item>
        <Divider dashed />
      </Form>
      <p>
        or, <Link to="/login">Log in</Link> if you have already registered.
      </p>
    </div>
  );
};

export default RegisterPage;
