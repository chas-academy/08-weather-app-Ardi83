import React, { Component } from "react";

import axios from "axios";

const Context = React.createContext();
// Current wwather
const url = "https://api.openweathermap.org/data/2.5/";
let city = "uppsala";

export class Provider extends Component {
  constructor(props) {
    super(props);

    let options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };
    function success(pos) {
      let crd = pos.coords;
      console.log("Your current position is:");
      console.log(`Latitude : ${crd.latitude}`);
      console.log(`Longitude: ${crd.longitude}`);
      console.log(`More or less ${crd.accuracy} meters.`);
    }
    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }
    navigator.geolocation.getCurrentPosition(success, error, options);

    this.state = {
      coord: {},
      main: {},
      sys: {},
      wind: {},
      name: "",
      iconSrc: "",
      weather: {},
      // dt,
      // id,
      HourlyTemp: [],
      cifa: true,
      map:
        "https://image.maps.api.here.com/mia/1.6/mapview/?nodot=1&f=0&nocrop=1&nocp=1&w=481&h=481&ml=eng&c=59.9603996277%2C17.7770004272&z=8&app_id=c8OyIJLoy95INu6VmOYD&token=-2vyCQIFMO9cLgHOUEFOQA"
    };
  }

  async componentDidMount() {
    const res = await axios.get(
      `${url}weather?q=${city}&units=metric&APPID=${
        process.env.REACT_APP_API_KEY
      }`
    );
    const response = await axios.get(
      `${url}forecast?q=${city}&units=metric&APPID=${
        process.env.REACT_APP_API_KEY
      }`
    );
    this.setState({
      HourlyTemp: response.data.list
    });

    console.log(this.state.HourlyTemp);
    this.setState({
      name: res.data.name,
      coord: res.data.coord,
      main: res.data.main,
      sys: res.data.sys,
      wind: res.data.wind,
      weather: res.data.weather[0],
      iconSrc: `https://openweathermap.org/img/w/${
        res.data.weather[0].icon
      }.png`
    });
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
