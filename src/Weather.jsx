import React, { Component } from "react";
import { Consumer } from "./Context";
import "./App.css";

class Weather extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { week, day } = value;
          return (
            <div className="weather mx-5">
              <div className="forcast__top">
                <div className="input-group my-3" action="">
                  <input
                    className="form-control-sm forcast__top__input"
                    placeholder="Enter location name..."
                    type="text"
                  />
                  <button type="button" className="btn btn-dark btn-sm">
                    <i className="fas fa-arrow-right" />
                  </button>
                </div>
                <ul className="forcast__top__tabs ">
                  <li className="mr-2">
                    <a href="">Main</a>
                  </li>
                  <li className="mr-2">
                    <a href="">Daily</a>
                  </li>
                  <li className="mr-2">
                    <a href="">Hourly</a>
                  </li>
                </ul>
              </div>
              <hr />
              <img
                src={value.map}
                alt="Card image cap"
                className="card-image"
              />
              <hr />
              <div className="forcast mb-4">
                {day.map((data, i) => {
                  return (
                    <div key={i} className="forcast__detail">
                      <p>{data.time}</p>
                      <div className="list-group">
                        <span>{data.temp}&#8451;</span>
                        <span>{data.wind} m/s</span>
                      </div>
                    </div>
                  );
                })}
              </div>
              {week.map((day, i) => {
                return (
                  <table key={i} className="table col-md-4 bg-info mb-0">
                    <tbody>
                      <tr>
                        <td> {day.date}</td>
                        <td>{day.temp}</td>
                      </tr>
                    </tbody>
                  </table>
                );
              })}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Weather;
