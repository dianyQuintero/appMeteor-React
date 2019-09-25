import React, { Component } from 'react';
import {Row, Col, Image, Card} from "react-bootstrap";
import '../../styles/styles.css'
 
export default class DayForecast extends Component {

  setImage = () =>{
    if(this.props.report.status === "Mostly sunny"){
      console.log(this.props.report.status);
      return (
        <div>
          <Image className="Img" src="https://image.flaticon.com/icons/svg/1164/1164903.svg" ></Image>
        </div>
      );
    }
    if(this.props.report.status === "Cloudy"){
      return (
        <div>
          <Image className="Img" src="https://image.flaticon.com/icons/svg/1164/1164925.svg" ></Image>
        </div>
      );
    }
    if(this.props.report.status === "Rainy"){
      return (
        <div>
          <Image className="Img" src="https://image.flaticon.com/icons/svg/1164/1164894.svg" ></Image>
        </div>
      );
    }

  }

  render() {
    return (    
        <div>
          <Card id="days" >
          <Card.Body className="daysBody">
              <Card.Title>
                  <strong>{this.props.report.dayName}</strong>
              </Card.Title>
              <p>{this.setImage()}</p>
              <h5>Max: {this.props.report.minTemp}</h5>
              <h5>Min: {this.props.report.maxTemp}</h5>
              <h5>Status:</h5>
              <h5>{this.props.report.status}</h5>
          </Card.Body>
          </Card>
          </div>

    );
  }
}