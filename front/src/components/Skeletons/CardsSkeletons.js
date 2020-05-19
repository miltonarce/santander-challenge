import React from "react";
import PropTypes from "prop-types";
import { Card, Col } from "antd";

const CardsSkeletons = props => (
  <>
    <Col span={8}>
      <Card loading />
    </Col>
    <Col span={8}>
      <Card loading />
    </Col>
    <Col span={8}>
      <Card loading />
    </Col>
    <Col span={8}>
      <Card loading />
    </Col>
    <Col span={8}>
      <Card loading />
    </Col>
    <Col span={8}>
      <Card loading />
    </Col>
    <Col span={8}>
      <Card loading />
    </Col>
    <Col span={8}>
      <Card loading />
    </Col>
    <Col span={8}>
      <Card loading />
    </Col>
  </>
);

CardsSkeletons.propTypes = {};

export default CardsSkeletons;
