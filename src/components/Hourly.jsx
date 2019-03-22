import React, { Component } from "react";
import { Consumer } from "./Context";
import "../App.css";

class Hourly extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          let symbolArray = [];
          let count = -1;
          return (
            <div
              style={{ overflow: "auto", height: "800px", width: "595px" }}
              className="container dailyProgons my-0"
            >
              <table
                style={{ textAlign: "center", width: "563px" }}
                className="table bg-dark text-white mb-0"
              >
                <tbody>
                  <tr>
                    <td>{value.name} / Time</td>
                    <td>Temp , Min Temp , Max Temp</td>
                    <td>Wind</td>
                    <td>Desc.</td>
                  </tr>
                </tbody>
              </table>
              {value.HourlyTemp.map(day => {
                symbolArray.push(
                  `https://openweathermap.org/img/w/${day.weather[0].icon}.png`
                );
                count++;
                return (
                  <table
                    style={{ textAlign: "center", width: "563px" }}
                    className="table  bg-info mb-0"
                    key={day.dt}
                  >
                    <tbody>
                      <tr>
                        <td> {day.dt_txt}</td>
                        <td>
                          <img alt="weather-symbol" src={symbolArray[count]} />
                        </td>
                        <td>
                          {day.main.temp}{" "}
                          {value.unit === "metric" ? (
                            <span>&#8451;</span>
                          ) : (
                            <span>&#8457;</span>
                          )}
                        </td>
                        <td>
                          {day.main.temp_min}{" "}
                          {value.unit === "metric" ? (
                            <span>&#8451;</span>
                          ) : (
                            <span>&#8457;</span>
                          )}
                        </td>
                        <td>
                          {day.main.temp_max}{" "}
                          {value.unit === "metric" ? (
                            <span>&#8451;</span>
                          ) : (
                            <span>&#8457;</span>
                          )}
                        </td>
                        <td>
                          {day.wind.speed}{" "}
                          {value.unit === "metric" ? (
                            <span>m/s</span>
                          ) : (
                            <span>mil/h</span>
                          )}
                        </td>
                        <td>{day.weather[0].main}</td>
                        <td>{day.weather[0].description}</td>
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

export default Hourly;
