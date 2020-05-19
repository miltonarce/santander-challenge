import React from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import {
 Form, Input, Button, Checkbox 
} from "antd";
import { doLogin } from "../../store/creators";
import Spinner from "../Spinner";

const Login = ({ redirect }) => {
  const dispatch = useDispatch();
  const { authData } = useSelector(state => state);

  const layout = {
    labelCol: {
      span: 8
    },
    wrapperCol: {
      span: 16
    }
  };
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16
    }
  };
  const onFinish = values => {
    dispatch(doLogin(values, redirect));
  };

  const onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo);
  };

  if (authData.loading) {
    return <Spinner />;
  }

  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{
        remember: true
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Usuario"
        name="username"
        rules={[
          {
            required: true,
            message: "Por favor ingrese su usuario!"
          }
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Contraseña"
        name="password"
        rules={[
          {
            required: true,
            message: "Por favor ingrese su contraseña!"
          }
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Recordarme</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Iniciar sesión
        </Button>
      </Form.Item>
    </Form>
  );
};

Login.propTypes = {};

export default Login;
