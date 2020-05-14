import React from "react";
import { Layout } from "antd";
import Home from "./views/Home";
import HeaderNav from "./components/HeaderNav";
import FooterPage from "./components/FooterPage";

const App = () => (
  <>
    <Layout>
      <HeaderNav />
      <Home />
      <FooterPage />
    </Layout>
  </>
);

export default App;
