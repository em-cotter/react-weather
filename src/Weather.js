import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import './Weather.css'
export default function Weather(){
    return(
    <Container>
      <Row>
        <Col>High: 0°C</Col>
        <Col>Low: -5°C</Col>
      </Row>
      <Row>
        <Col>Humidity: 80%</Col>
        <Col>Wind 5km/h</Col>
      </Row>
    </Container>)
}