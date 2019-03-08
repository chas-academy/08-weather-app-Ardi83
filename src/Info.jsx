import React, { Component } from "react";
import { Consumer } from "./Context";
import "./App.css";

class Weather extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          return (
            <div className="nfo ml-5">
              <h4>City : {value.name}</h4> */}
              <div style={{ display: "flex", textDecoration: "none" }}>
                <div className="mr-1">{value.glyph}</div>
                <div className="mr-1">
                  {value.cifa ? (
                    <h2>{value.temprature}&#8451;</h2>
                  ) : (
                    <h2>{(value.temprature * 9) / 5 + 32}&#8457;</h2>
                  )}
                </div>
                <select className="custom-select col-md-2" id="cifa">
                  <option defaultValue>&#8451;/&#8457;</option>
                  <option value="celi">&#8451;</option>
                  <option value="far">&#8457;</option>
                </select>
              </div>
              <div className="mb-2">{value.date}</div>
              <table>
                <tbody className="table table-info">
                  <tr>
                    <th scope="row">Wind</th>
                    <td>{value.wind} m/s</td>
                  </tr>
                  <tr>
                    <th scope="row">Humidity</th>
                    <td>{value.humidity} %</td>
                  </tr>
                  <tr>
                    <th scope="row">Sunrise</th>
                    <td>{value.sunrise}</td>
                  </tr>
                  <tr>
                    <th scope="row">Sunset</th>
                    <td>{value.sunset}</td>
                  </tr>
                  <tr>
                    <th scope="row">Cloudiness</th>
                    <td>{value.cloudiness}</td>
                  </tr>
                  <tr>
                    <th scope="row">Pressure</th>
                    <td>{value.pressure}</td>
                  </tr>
                  <tr>
                    <th scope="row">Rain</th>
                    <td>{value.rain}</td>
                  </tr>
                  <tr>
                    <th scope="row">Geo Coords</th>
                    <td>
                      [{value.geoCoords.x}, {value.geoCoords.y}]
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Weather;
