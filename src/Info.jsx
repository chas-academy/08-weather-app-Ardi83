import React, { Component } from "react";
import "./App.css";

class Weather extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    name: "Uppsala",
    glyph: <i className="fab fa-3x fa-cloudversify" />,
    date: new Date().toUTCString(),
    temprature: -1,
    cifa: null,
    wind: 12,
    humidity: 76,
    sunrise: "07:35",
    sunset: "18:49",
    rain: 0.25,
    pressure: 958,
    cloudiness: "Scattered clouds",
    geoCoords: { x: 51.51, y: -0.13 }
  };

  render() {
    const {
      name,
      glyph,
      date,
      temprature,
      cifa,
      wind,
      rain,
      pressure,
      cloudiness,
      humidity,
      sunrise,
      sunset,
      geoCoords
    } = this.state;
    return (
      <div className="nfo ml-5">
        <h4>City : {name}</h4>
        <div style={{ display: "flex", textDecoration: "none" }}>
          <div className="mr-1">{glyph}</div>
          <div className="mr-1">
            {cifa ? (
              <h2>{temprature}&#8451;</h2>
            ) : (
              <h2>{(temprature * 9) / 5 + 32}&#8457;</h2>
            )}
          </div>
          <select className="custom-select col-md-2" id="cifa">
            <option defaultValue>&#8451;/&#8457;</option>
            <option value="celi">&#8451;</option>
            <option value="far">&#8457;</option>
          </select>
        </div>
        <div className="mb-2">{date}</div>
        <table>
          <tbody className="table table-info">
            <tr>
              <th scope="row">Wind</th>
              <td>{wind} m/s</td>
            </tr>
            <tr>
              <th scope="row">Humidity</th>
              <td>{humidity} %</td>
            </tr>
            <tr>
              <th scope="row">Sunrise</th>
              <td>{sunrise}</td>
            </tr>
            <tr>
              <th scope="row">Sunset</th>
              <td>{sunset}</td>
            </tr>
            <tr>
              <th scope="row">Cloudiness</th>
              <td>{cloudiness}</td>
            </tr>
            <tr>
              <th scope="row">Pressure</th>
              <td>{pressure}</td>
            </tr>
            <tr>
              <th scope="row">Rain</th>
              <td>{rain}</td>
            </tr>
            <tr>
              <th scope="row">Geo Coords</th>
              <td>
                [{geoCoords.x}, {geoCoords.y}]
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Weather;
