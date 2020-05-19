import React from "react";
import PropTypes from "prop-types";
import { Spin, Row, Col } from "antd";

const Spinner = props => (
  <Row align="middle" justify="center" className="content-spinner">
    <Col span={1}>
      <Spin />
    </Col>
  </Row>
);

Spinner.propTypes = {};

export default Spinner;
