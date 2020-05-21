import React from "react";
import PropTypes from "prop-types";
import {
 Button, Form, Input, Row, InputNumber, DatePicker, Col 
} from "antd";
import { SmileOutlined } from "@ant-design/icons";

const CreateMeetup = ({
  onFinish,
  onFinishFailed,
  handleWeather,
  temperature,
  handleBeers,
  beers
}) => {
  const formItemLayout = {
    labelCol: {
      xs: {
        span: 3
      }
    },
    wrapperCol: {
      xs: {
        span: 15
      }
    }
  };

  return (
    <Form
      {...formItemLayout}
      initialValues={{
        people: 2
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      className="form-newMeetup"
    >
      <Form.Item
        name="title"
        label="Titulo"
        rules={[
          {
            required: true,
            message: "Por favor ingrese un titulo para su evento."
          }
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item name="description" label="Descripción">
        <Input.TextArea />
      </Form.Item>
      <Form.Item label="Fecha" className="combined-items">
        <Form.Item
          name="date-picker"
          style={{
            display: "inline-block",
            width: "calc(30%)"
          }}
          rules={[
            {
              required: true,
              message: "Por favor seleccione la fecha de su evento."
            }
          ]}
        >
          <DatePicker
            name="date"
            onChange={handleWeather}
            format="YYYY-MM-DD"
          />
        </Form.Item>
        <Form.Item
          style={{
            display: "inline-block",
            width: "calc(70%)"
          }}
          className="content-weather"
        >
          {temperature ? (
            <p className="weather">
              {`Temperatura para la fecha C° ${temperature} grados. `}
              <SmileOutlined style={{ color: "#0C9D57", fontSize: "1rem" }} />
            </p>
          ) : (
            <p className="not-date">
              Debe seleccionar una fecha para ver el clima de la misma.
            </p>
          )}
        </Form.Item>
      </Form.Item>
      <Form.Item name="people" label="Integrantes">
        <Row>
          <Col>
            <InputNumber
              min={2}
              max={200}
              defaultValue={2}
              onChange={handleBeers}
              rules={[
                {
                  required: true,
                  message: "Por favor indique la cantidad de integrantes."
                }
              ]}
            />
          </Col>
          <Col span={12} offset={1}>
            <p>
              {` Cantidad de birras recomendadas para el evento: ${beers} (${Math.ceil(
                beers / 6
              )} caja${beers > 6 ? "s" : ""} de 6 unidades).`}
            </p>
          </Col>
        </Row>
      </Form.Item>
      <Form.Item>
        <Row>
          <Col offset={12}>
            <Button
              type="primary"
              htmlType="submit"
              className="create-meet-form-button"
            >
              Crear meetup
            </Button>
          </Col>
        </Row>
      </Form.Item>
    </Form>
  );
};

CreateMeetup.propTypes = {
  onFinish: PropTypes.func,
  onFinishFailed: PropTypes.func,
  handleWeather: PropTypes.func,
  temperature: PropTypes.number,
  handleBeers: PropTypes.func,
  beers: PropTypes.number
};

export default CreateMeetup;
