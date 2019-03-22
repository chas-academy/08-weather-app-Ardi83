import React, { Component } from "react";
import { Consumer } from "./Context";
import Weather from "./Weather";
import "../App.css";

class Info extends Component {
  state = {
    units: "Imperial"
  };

  onSetTemp = (dispatch, e) => {
    e.preventDefault();
    if (e.target.value === "F") {
      this.setState({ units: "Metric" });
    }
    if (e.target.value === "C") {
      this.setState({ units: "Imperial" });
    }
    dispatch({ type: "CHANGE_UNIT", payload: this.state.units });
  };

  render() {
    return (
      <Consumer>
        {value => {
          const { temp, pressure, humidity, temp_min, temp_max } = value.main;
          const { country, sunrise, sunset } = value.sys;
          const { speed, deg } = value.wind;
          const { description, main } = value.weather;
          const { dispatch } = value;

          return (
            <div className="home">
              {value.name === "" || value.coord.lat === "" ? (
                <span />
              ) : (
                <div className="info">
                  <div className="info__top">
                    <h4>Country : {country}</h4>
                    <h4>City : {value.name}</h4>
                    <div style={{ display: "flex", textDecoration: "none" }}>
                      <div className="mr-1">
                        <img
                          alt="weather-symbol"
                          style={{ backgroundColor: "gray" }}
                          src={value.iconSrc}
                        />
                      </div>
                      <div className="mr-1" />
                      <h2>{temp}</h2>
                      <select
                        className="custom-select col-md-3 mx-2"
                        onChange={this.onSetTemp.bind(this, dispatch)}
                      >
                        <option>C</option>
                        <option>F</option>
                      </select>
                    </div>
                    <div className="mb-2">{new Date().toUTCString()}</div>
                  </div>
                  <table>
                    <tbody className="table table-info">
                      <tr>
                        <th scope="row">Wind</th>
                        <td>
                          {speed}{" "}
                          {value.unit === "metric" ? (
                            <span>m/s</span>
                          ) : (
                            <span>mil/h</span>
                          )}{" "}
                          , {deg}&deg;
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">Humidity</th>
                        <td>{humidity} %</td>
                      </tr>
                      <tr>
                        <th scope="row">Sunrise</th>
                        <td>{new Date(sunrise * 1000).toLocaleTimeString()}</td>
                      </tr>
                      <tr>
                        <th scope="row">Sunset</th>
                        <td>{new Date(sunset * 1000).toLocaleTimeString()}</td>
                      </tr>
                      <tr>
                        <th scope="row">Pressure</th>
                        <td>{pressure} hpa</td>
                      </tr>
                      <tr>
                        <th scope="row">Min Temp</th>
                        <td>
                          {temp_min}{" "}
                          {this.state.units === "Imperial" ? (
                            <span>&#8451;</span>
                          ) : (
                            <span>&#8457;</span>
                          )}
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">Max Temp</th>
                        <td>
                          {temp_max}{" "}
                          {this.state.units === "Imperial" ? (
                            <span>&#8451;</span>
                          ) : (
                            <span>&#8457;</span>
                          )}
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">main</th>
                        <td>{main}</td>
                      </tr>
                      <tr>
                        <th scope="row">Description</th>
                        <td>{description}</td>
                      </tr>
                      <tr>
                        <th scope="row">Coord</th>

                        <td>
                          Lat: {value.coord.lat} <div />
                          Lon: {value.coord.lon}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}
              <Weather units={this.state.units} />
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Info;
