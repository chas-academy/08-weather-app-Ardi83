import React, { Component } from "react";
import { Consumer } from "./Context";
import "../App.css";

class Week extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          let symbolArray = [];
          let count = -1;
          let day1;
          return (
            <div
              className="container my-0 weekPrognos"
              style={{ width: "595px" }}
            >
              <table
                style={{ textAlign: "center", width: "610px" }}
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
                switch (new Date(day.dt * 1000).getUTCDay()) {
                  case 0:
                    day1 = "Sun";
                    break;
                  case 1:
                    day1 = "Mon";
                    break;
                  case 2:
                    day1 = "Tue";
                    break;
                  case 3:
                    day1 = "Wed";
                    break;
                  case 4:
                    day1 = "Thu";
                    break;
                  case 5:
                    day1 = "Fri";
                    break;
                  case 6:
                    day1 = "Sat";
                    break;
                  default:
                    new Date(day.dt * 1000).getUTCDay();
                }
                let kl = day.dt_txt.substring(11, 13);
                if (kl === "12") {
                  return (
                    <table
                      style={{ textAlign: "center", width: "610px" }}
                      className="table bg-info mb-0"
                      key={day.dt}
                    >
                      <tbody>
                        <tr>
                          <td>{day1}</td>
                          <td>
                            {new Date(day.dt * 1000).toLocaleDateString()}
                          </td>
                          <td>
                            <img
                              alt="weather-symbol"
                              src={symbolArray[count]}
                            />
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
                }
              })}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Week;
