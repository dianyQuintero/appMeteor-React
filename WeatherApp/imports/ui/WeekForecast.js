import React, { Component } from "react";
import { withTracker } from 'meteor/react-meteor-data';

import { Forecast } from '../api/forecast.js';
import DayForecast from "./DayForecast.js";
 
class WeekForecast extends Component {

  renderDays1() {
    if(this.props.week ==="1")
    {
      return this.props.forecastWeek1.map((d) => (
      <DayForecast key={d._id} report={d} />
    ));
    }
  }
  renderDays2() {
    if(this.props.week ==="2"){
    return this.props.forecastWeek2.map((d) => (
      <DayForecast key={d._id} report={d} />
    ));
    }
  }
  renderDays3() {
    if(this.props.week ==="3"){
    return this.props.forecastWeek3.map((d) => (
      <DayForecast key={d._id} report={d} />
    ));
    }
  }
  renderDays4() {
    if(this.props.week ==="4"){
    return this.props.forecastWeek4.map((d) => (
      <DayForecast key={d._id} report={d} />
    ));
    }
  }
  render() {
    return (
      <div>
        <div className="row">
          {this.renderDays1()}
        </div>
        <div className="row">
          {this.renderDays2()}
        </div>
        <div className="row">
          {this.renderDays3()}
        </div>
        <div className="row">
          {this.renderDays4()}
        </div>
      </div>

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
})(WeekForecast);