import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { Layout, Button, Row, Col, Card } from "antd";
import { getMeetups } from "../../store/creators";

const { Content } = Layout;

const Home = props => {
  const dispatch = useDispatch();
  const { meetups } = useSelector(state => state);

  useEffect(() => {
    dispatch(getMeetups());
  }, []);
  console.log(meetups);
  return (
    <Content>
      <Row justify="center">
        {meetups.data.map(m => (
          <Col key={m.id} span={8}>
            <Card title={m.name} className="cards">
              {m.body}
            </Card>
          </Col>
        ))}
      </Row>
    </Content>
  );
};

Home.propTypes = {};

export default Home;
