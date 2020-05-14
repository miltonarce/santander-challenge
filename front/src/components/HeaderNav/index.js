import React from "react";
import PropTypes from "prop-types";
import { Layout } from "antd";

const { Header } = Layout;

const HeaderNav = props => (
  <Header className="header">
    <h1>Meetup</h1>
  </Header>
);

Header.propTypes = {};

export default HeaderNav;
