import React from "react";
import { Layout, Row, Col } from "antd";

const { Footer } = Layout;

const FooterPage = () => (
  <Footer>
    <Row justify="center">
      <Col span={12} justify="center">
        <p className="footer-text">
          Santander Front End Challenge - Milton Arce
        </p>
      </Col>
    </Row>
  </Footer>
);

export default FooterPage;
