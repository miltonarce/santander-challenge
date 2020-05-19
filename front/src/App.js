import React from "react";
import { Layout } from "antd";
import { Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "./views/Home";
import Auth from "./views/Auth";
import HeaderNav from "./components/HeaderNav";
import FooterPage from "./components/FooterPage";
import RouteAuth from "./components/RouteAuth";
import NewMeetup from "./views/NewMeetup";
import Meetup from "./views/Meetup";

const App = () => {
  const {
    authData: {
      data: { logged }
    }
  } = useSelector(state => state);
  return (
    <>
      <Layout>
        <HeaderNav />
        <Switch>
          <Route exact component={Home} path="/" />
          <Route component={Auth} path="/auth" />
          <RouteAuth auth={logged} component={NewMeetup} path="/newmeetup" />
          <RouteAuth auth={logged} component={Meetup} path="/meetup/:id" />
        </Switch>
        <FooterPage />
      </Layout>
    </>
  );
};

export default App;
