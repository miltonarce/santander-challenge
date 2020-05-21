import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { Layout, Row, Col } from "antd";
import { getMeetups, cleanQueuNot } from "../../store/creators";
import CardMeetup from "../../components/CardMeetup";
import CardsSkeleton from "../../components/Skeletons/CardsSkeletons";
import { Notifications } from "../../components/Notifiations";

const { Content } = Layout;

const Home = ({ history }) => {
  const dispatch = useDispatch();
  const { meetups, authData } = useSelector(state => state);

  useEffect(() => {
    if (!meetups.firstData) {
      dispatch(getMeetups());
    }

    if (meetups.queueNot.length >= 1 && authData.data.type === 2) {
      meetups.queueNot.map(m => Notifications(m, history));
      dispatch(cleanQueuNot());
    }
  }, []);

  const handleRedirect = id => {
    history.push(`/${authData.data.logged ? `meetup/${id}` : "auth"}`);
  };

  return (
    <Content>
      <div>
        <div className="banner-welcome">
          <h2>Si no hay birra no es una meetup!</h2>
          <p>
            Juntate, reunite, acercate a tu equipo, pero primero unite a
{" "}
            <strong>Meetups</strong>.
          </p>
        </div>
        <div className="banner-image" />
      </div>
      <Row justify="center" align="middle" className="row-content">
        <Col xs={24} md={20}>
          <Row gutter={[16, 16]}>
            {meetups.loading ? (
              <CardsSkeleton />
            ) : (
              meetups.data.map((m, i) => (
                <Col key={`col-${i}`} xs={24} lg={8}>
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

Home.propTypes = {
  history: PropTypes.object
};

export default Home;
