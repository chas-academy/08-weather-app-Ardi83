import React, { Component } from "react";

const Context = React.createContext();

export class Provider extends Component {
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
    geoCoords: { x: 51.51, y: -0.13 },

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
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
