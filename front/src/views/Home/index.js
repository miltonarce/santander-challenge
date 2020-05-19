import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { Layout, Row, Col } from "antd";
import { getMeetups } from "../../store/creators";
import CardMeetup from "../../components/CardMeetup";
import CardsSkeleton from "../../components/Skeletons/CardsSkeletons";

const { Content } = Layout;

const Home = ({ history }) => {
  const dispatch = useDispatch();
  const {
    meetups,
    authData: {
      data: { logged }
    }
  } = useSelector(state => state);

  useEffect(() => {
    if (!meetups.firstData) {
      dispatch(getMeetups());
    }
  }, []);

  const handleRedirect = id => {
    history.push(`/${logged ? `meetup/${id}` : "auth"}`);
  };
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
                  <CardMeetup info={m} redirect={handleRedirect} />
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
