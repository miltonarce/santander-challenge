import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import {
 Card, Layout, Row, Col 
} from "antd";
import { getMeetups } from "../../store/creators";
import CardMeetup from "../../components/CardMeetup";
import CardsSkeleton from "../../components/Skeletons/CardsSkeletons";

const { Content } = Layout;

const Home = () => {
  const dispatch = useDispatch();
  const { meetups } = useSelector(state => state);

  useEffect(() => {
    dispatch(getMeetups());
  }, []);
  return (
    <Content>
      <Row justify="center" align="middle" className="row-content">
        <Col span={12}>
          <Row gutter={[16, 16]}>
            {meetups.loading ? (
              <CardsSkeleton />
            ) : (
              meetups.data.map((m, i) => (
                <Col key={`col-${i}`} span={8}>
                  <CardMeetup info={m} />
                </Col>
              ))
            )}
          </Row>
        </Col>
      </Row>
    </Content>
  );
};

Home.propTypes = {};

export default Home;
