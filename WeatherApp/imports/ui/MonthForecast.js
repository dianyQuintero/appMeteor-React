import React, { Component } from "react";
import { withTracker } from 'meteor/react-meteor-data';
import {Row, Col, Image, Container} from "react-bootstrap";
import { Forecast } from '../api/forecast.js';
import WeekForecast from "./WeekForecast.js";
import '../../styles/styles.css'
 
class MonthForecast extends Component {

  render() {
    return (
      <Container id= "Contenedor">
        <Row className="text-center">
          <Col id="titulo" sm={12}>
            <strong>Montlhy Forecast</strong>        
          </Col>
        </Row>
        <Row className="text-center"> 
          <h3>Week 1</h3>
        </Row>
        <WeekForecast week="1"/>
        <Row className="text-center">
          <h3>Week 2</h3>
        </Row >
        <WeekForecast week="2"/>
        <Row className="text-center">
          <h3>Week 3</h3>
        </Row>
        <WeekForecast week="3"/>
        <Row className="text-center"> 
          <h3>Week 4</h3>
        </Row>
        <WeekForecast week="4"/>
      </Container>
    );
  }
}

export default withTracker(() => {
  return {
    forecastWeek1: Forecast.find({"week":1}).fetch(),
    forecastWeek2: Forecast.find({"week":2}).fetch(),
    forecastWeek3: Forecast.find({"week":3}).fetch(),
    forecastWeek4: Forecast.find({"week":4}).fetch(),
  };
})(MonthForecast);