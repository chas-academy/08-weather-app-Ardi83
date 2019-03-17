import React, { Component } from "react";
import { Consumer } from "./Context";
import Weather from "./Weather";
import "../App.css";

class Info extends Component {
  state = {
    f: false
  };

  onSetTemp = () => {
    this.setState({ f: !this.state.f });
  };

  render() {
    return (
      <Consumer>
        {value => {
          const { temp, pressure, humidity, temp_min, temp_max } = value.main;
          const { country, sunrise, sunset } = value.sys;
          const { speed, deg } = value.wind;
          const { description, main } = value.weather;

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
                      <div className="mr-1">
                        {temp && !this.state.f ? (
                          <h2>{Math.round(temp * 100) / 100}</h2>
                        ) : null}
                        {temp && this.state.f ? (
                          <h2>{Math.round((temp * 9.5 + 32) * 100) / 100}</h2>
                        ) : null}
                      </div>
                      <select
                        className="custom-select col-md-3 mx-2"
                        onChange={this.onSetTemp}
                      >
                        <option>&#8451;</option>
                        <option>&#8457;</option>
                      </select>
                    </div>
                    <div className="mb-2">{new Date().toUTCString()}</div>
                  </div>
                  <table>
                    <tbody className="table table-info">
                      <tr>
                        <th scope="row">Wind</th>
                        <td>
                          {speed} m/s, {deg}&deg;
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
                        <td>{temp_min} &#8451;</td>
                      </tr>
                      <tr>
                        <th scope="row">Max Temp</th>
                        <td>{temp_max} &#8451;</td>
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
              <Weather />
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Info;
