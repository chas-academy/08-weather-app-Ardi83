import React, { Component } from "react";
import "./App.css";

class Weather extends Component {
  state = {
    map:
      "https://image.maps.api.here.com/mia/1.6/mapview/?nodot=1&f=0&nocrop=1&nocp=1&w=481&h=481&ml=eng&c=59.9603996277%2C17.7770004272&z=8&app_id=c8OyIJLoy95INu6VmOYD&token=-2vyCQIFMO9cLgHOUEFOQA",
    week: [
      { date: "09-march", temp: 12 },
      { date: "09-march", temp: 12 },
      { date: "09-march", temp: 12 },
      { date: "09-march", temp: 12 },
      { date: "09-march", temp: 12 }
    ],
    day: [
      { time: 9, temp: 2, wind: 12 },
      { time: 10, temp: 1, wind: 13 },
      { time: 11, temp: -1, wind: 12 },
      { time: 12, temp: 0, wind: 14 },
      { time: 13, temp: 4, wind: 12 },
      { time: 14, temp: 3, wind: 17 },
      { time: 15, temp: 2, wind: 22 },
      { time: 16, temp: 1, wind: 19 }
    ]
  };

  render() {
    const {} = this.state;
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
        <img src={this.state.map} alt="Card image cap" className="card-image" />
        <hr />
        <div className="forcast mb-4">
          {this.state.day.map((data, i) => {
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

        {this.state.week.map((day, i) => {
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
  }
}

export default Weather;
