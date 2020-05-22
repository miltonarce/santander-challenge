import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { Layout, Row, Col, Avatar, Button, icon, Tooltip } from "antd";
import { UserOutlined } from "@ant-design/icons";
import Spinner from "../../components/Spinner";
import { suscribeMeetupStart } from "../../store/creators";

const { Content } = Layout;

const Meetup = ({ match }) => {
  const dispatch = useDispatch();
  const { meetups, authData } = useSelector((state) => state);

  const [meetup, setMeetup] = useState({});
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setMeetup(meetups.data.find((m) => m.id == match.params.id));
    setLoading(false);
  }, [meetups.data]);

  const handleSuscribe = () => {
    if (authData.data.logged) {
      dispatch(
        suscribeMeetupStart({
          ...meetup,
          confirmed: meetup.confirmed.concat(authData.data),
        })
      );
    }
  };

  return (
    <Content>
      <Row justify="center" align="top" className="row-content">
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <Col xs={24} lg={16}>
              <section className="main-section-meetup">
                <h2>{meetup.title}</h2>
                <p>{meetup.description}</p>
              </section>
            </Col>
            <Col xs={24} lg={6} offset={1}>
              <aside className="additional-data">
                <section>
                  <h2>Información adicional</h2>
                  <p>
                    <label>El evento será el dia</label> {meetup["date-picker"]}
                    .{" "}
                  </p>
                  <p>
                    {" "}
                    <label> Ese día hará</label> C°
                    {meetup.temperature} grados de temperatura.
                  </p>
                  <div>
                    <ul>
                      {meetup.confirmed.length === 0 ? (
                        <li>Aún no hay asistentes.</li>
                      ) : (
                        <>
                          <li>Asistentes:</li>
                          {meetup.confirmed.map((p, i) => (
                            <li key={`a-${i}`}>
                              <Tooltip title={p.username} placement="bottom">
                                <Avatar icon={<UserOutlined />} />
                              </Tooltip>
                            </li>
                          ))}
                        </>
                      )}
                    </ul>
                  </div>
                </section>
                <section>
                  <div>
                    {meetup.confirmed.find((i) => i.id == authData.data.id) ? (
                      <p>Usted ya está suscripto a este evento.</p>
                    ) : (
                      <Button type="primary" onClick={handleSuscribe}>
                        Asistir
                      </Button>
                    )}
                  </div>
                </section>
              </aside>
            </Col>
          </>
        )}
      </Row>
    </Content>
  );
};

Meetup.propTypes = {
  history: PropTypes.object,
};

export default Meetup;
