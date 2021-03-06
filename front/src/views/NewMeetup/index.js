import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Layout, Row, Col } from "antd";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import CreateMeetup from "../../components/Forms/CreateMeetup";
import { beerCalculator, fToCelsius } from "../../Utils/Utils";
import Api from "../../services/Services";
import Spinner from "../../components/Spinner";
import { createMeetup } from "../../store/creators";

const { Content } = Layout;

const NewMeetup = ({ history }) => {
  const dispatch = useDispatch();
  const { meetups } = useSelector(state => state);

  const [state, setState] = useState({
    beers: 0,
    weather: {
      temperature: null
    }
  });

  const handleBeers = (e = 2) => {
    setState({
      ...state,
      beers: beerCalculator(e, state.weather.temperature || 20)
    });
  };

  useEffect(() => {
    handleBeers();
  }, [state.weather.temperature]);

  const handleWeather = async (e, a) => {
    try {
      const { data, status, statusText } = await Api.weather.fetchByDate(
        moment(a).format("X")
      );
      if (status === 200) {
        setState({
          ...state,
          weather: {
            temperature: fToCelsius(data.currently.temperature)
          }
        });
      } else {
        console.log(statusText);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onFinish = values => {
    dispatch(
      createMeetup(
        {
          ...values,
          id: meetups.data.length + 1,
          temperature: state.weather.temperature,
          "date-picker": moment(values["date-picker"]).format("YYYY-MM-DD"),
          confirmed: []
        },
        history.push
      )
    );
  };

  const onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Content>
      <Row justify="center" align="middle" className="row-content">
        <Col span={16}>
          <h2>Crear una nueva Meetup</h2>
        </Col>
      </Row>
      <Row justify="center" align="middle" className="row-content">
        <Col span={16} className="spinner-content-new">
          {meetups.loading ? (
            <Spinner />
          ) : (
            <CreateMeetup
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              handleBeers={handleBeers}
              handleWeather={handleWeather}
              temperature={state.weather.temperature}
              beers={state.beers}
            />
          )}
        </Col>
      </Row>
    </Content>
  );
};

NewMeetup.propTypes = {
  history: PropTypes.object
};

export default NewMeetup;
