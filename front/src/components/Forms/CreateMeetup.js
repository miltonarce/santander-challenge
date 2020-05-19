import React from "react";
import PropTypes from "prop-types";
import { Button, Form, Input, InputNumber, DatePicker, Col } from "antd";

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
        span: 4
      }
    },
    wrapperCol: {
      xs: {
        span: 12
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
      <Form.Item
        name="date-picker"
        label="Fecha"
        rules={[
          {
            required: true,
            message: "Por favor seleccione la fecha de su evento."
          }
        ]}
      >
        <DatePicker name="date" onChange={handleWeather} format="YYYY-MM-DD" />
      </Form.Item>
      <Col span={12}>
        {temperature ? (
          <p>{`Temperatura para la fecha C° ${temperature} grados.`}</p>
        ) : (
          <p>Debe seleccionar una fecha para ver el clima de la misma.</p>
        )}
      </Col>
      <Form.Item name="people" label="Cant. Integrantes">
        <InputNumber
          min={2}
          max={200}
          onChange={handleBeers}
          rules={[
            {
              required: true,
              message: "Por favor indique la cantidad de integrantes."
            }
          ]}
        />
      </Form.Item>
      <Col span={12}>
        <h3>
          {` Cantidad de birras recomendadas para el evento: ${beers} (${Math.ceil(
            beers / 6
          )} caja${beers > 6 ? "s" : ""} de 6 unidades).`}
        </h3>
      </Col>
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className="create-meet-form-button"
        >
          Crear meetup
        </Button>
      </Form.Item>
    </Form>
  );
};

CreateMeetup.propTypes = {};

export default CreateMeetup;
