import React from "react";
import PropTypes from "prop-types";
import { Layout } from "antd";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const { Header } = Layout;

const HeaderNav = () => {
  const { authData } = useSelector(state => state);
  return (
    <Header className="header">
      <Link to="/">
        <h1>Meetups</h1>
      </Link>
      <div>
        <ul>
          {authData.data.logged ? (
            <>
              {authData.data.type === 1 ? (
                <li>
                  <Link to="/newmeetup">Crear una meetup</Link> |{" "}
                </li>
              ) : (
                ""
              )}
              <li>{` Bienvenido! ${authData.data.username}`}</li>
            </>
          ) : (
            <>
              <li>
                <Link to="/auth">Iniciar sesión</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </Header>
  );
};

Header.propTypes = {};

export default HeaderNav;
