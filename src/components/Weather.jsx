import React, { Component } from "react";
import { Consumer } from "./Context";
import "../App.css";

class Weather extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          let sym = [];
          let count = -1;
          return (
            <div className="weather mx-5">
              <div className="forcast__top">
                <div className="input-group my-3">
                  <input
                    className="form-control-sm forcast__top__input"
                    placeholder="Enter location name..."
                    type="text"
                  />
                  <button type="button" className="btn btn-dark btn-sm">
                    <i className="fas fa-arrow-right" />
                  </button>
                </div>
              </div>
              <hr />
              <img
                src={value.map}
                alt="Card image cap"
                className="card-image"
              />
              <hr />
              <div className="forcast mb-4">
                {value.HourlyTemp.slice(0, 5).map(data => {
                  sym.push(
                    `https://openweathermap.org/img/w/${
                      data.weather[0].icon
                    }.png`
                  );
                  count++;
                  return (
                    <div key={data.dt} className="forcast__detail p-3">
                      <p>{new Date(data.dt * 1000).toLocaleTimeString()}</p>
                      <div className="list-group">
                        <span>
                          <img src={sym[count]} />
                        </span>
                        <span>{data.main.temp}&#8451;</span>
                        <span>{data.wind.speed} m/s</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Weather;
