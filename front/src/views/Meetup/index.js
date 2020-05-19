import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import {
 Layout, Row, Col, Avatar, Button 
} from "antd";
// import { UserOutlined } from "@antd-design/icons";
import Spinner from "../../components/Spinner";
import { suscribeMeetupStart } from "../../store/creators";

const { Content } = Layout;

const Meetup = ({ match }) => {
  const dispatch = useDispatch();
  const { meetups, authData } = useSelector(state => state);

  const [meetup, setMeetup] = useState({});
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setMeetup(meetups.data.find(m => m.id == match.params.id));
    setLoading(false);
  }, [meetups.data]);

  const handleSuscribe = () => {
    if (authData.data.logged) {
      dispatch(
        suscribeMeetupStart({
          ...meetup,
          confirmed: meetup.confirmed.concat(authData.data)
        })
      );
    }
  };

  return (
    <Content>
      <Row justify="center" align="middle" className="row-content">
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <Col span={12}>
              <section>
                <h2>{meetup.title}</h2>
                <p>{meetup.description}</p>
              </section>
            </Col>
            <Col span={4}>
              <aside>
                <section>
                  <p>
                    El evento será el dia
                    {meetup["date-picker"]}
.
{" "}
                  </p>
                  <p>
                    Ese día hara C°
                    {" "}
                    {meetup.temperature}
{' '}
grados de temperatura.
</p>
                  <div>
                    <ul>
                      {meetup.confirmed.length === 0 ? (
                        <li>Aún no hay asistentes.</li>
                      ) : (
                        <>
                          <li>Asistentes:</li>
                          {meetup.confirmed.map(p => (
                            <li>
                              <Avatar>{p.id}</Avatar>
                            </li>
                          ))}
                        </>
                      )}
                    </ul>
                  </div>
                </section>
                <section>
                  <div>
                    {meetup.confirmed.find(i => i.id == authData.data.id) ? (
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
  history: PropTypes.object
};

export default Meetup;
