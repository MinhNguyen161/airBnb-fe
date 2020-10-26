import React, { useState } from "react";
import "antd/dist/antd.css";
import { Form, Input, Button, Divider } from "antd";
import { EyeTwoTone, EyeInvisibleOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { authActions } from "../redux/actions";

const LoginPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  let [formData, setFormData] = useState({});

  // handle form submission---------
  const [form] = Form.useForm();
  const onFinish = (values) => {
    setFormData(values);
    const { email, password } = values;
    dispatch(authActions.login(email, password));
    history.push("/");
  };
  const onReset = () => {
    form.resetFields();
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

  return (
    <div className="container verticalJustify login">
      <h1>Log in</h1>
      <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
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
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Log in
          </Button>
          <Button htmlType="button" onClick={onReset}>
            Reset form
          </Button>
        </Form.Item>
        <Divider dashed />
      </Form>
      <p>
        or, <Link to="/register">Sign up</Link> if you haven't registered yet.
      </p>
    </div>
  );
};

export default LoginPage;
