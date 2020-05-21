import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { Layout, Row, Col } from "antd";
import Login from "../../components/Forms/Login";
import Register from "../../components/Forms/Register";

const { Content } = Layout;

const Auth = ({ history }) => (
  <Content>
    <Row justify="center" align="middle" className="row-content">
      <Col span={12}>
        <h2>INGRESE SU USUARIO Y CONTRASEÑA</h2>
      </Col>
    </Row>
    <Row justify="center" align="middle" className="row-content">
      <Col span={8} className="content-form-login">
        {history.location.pathname === "/auth/register" ? (
          <Register />
        ) : (
          <Login redirect={history.push} />
        )}
      </Col>
    </Row>
  </Content>
);

Auth.propTypes = {};

export default Auth;
