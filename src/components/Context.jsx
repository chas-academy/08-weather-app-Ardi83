import React, { Component } from "react";

import axios from "axios";

const reducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_CITY":
      return {
        ...state,
        city: action.payload
      };
    case "FIND_LOCATION":
      return {
        ...state,
        coords: action.payload
      };
    default:
      return state;
  }
};

const Context = React.createContext();
// Url
const url = "https://api.openweathermap.org/data/2.5/";
export class Provider extends Component {
  state = {
    // reducer payload
    city: "",
    coords: {},
    // state imported from api
    coord: {},
    main: {},
    sys: {},
    wind: {},
    name: "",
    iconSrc: "",
    weather: {},
    HourlyTemp: [],
    map: "",

    dispatch: action => {
      this.setState(state => reducer(state, action));
    }
  };

  callSate(response, res) {
    this.setState({
      HourlyTemp: response.data.list,
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

  async componentDidUpdate(prevProps, prevState) {
    // If city's name change
    if (prevState.city !== this.state.city) {
      const res = await axios.get(
        `${url}weather?q=${this.state.city}&units=metric&APPID=${
          process.env.REACT_APP_API_KEY
        }`
      );
      const response = await axios.get(
        `${url}forecast?q=${this.state.city}&units=metric&APPID=${
          process.env.REACT_APP_API_KEY
        }`
      );
      this.callSate(response, res);
    }
    // If current coordinator is change (clicked)
    if (prevState.coords !== this.state.coords) {
      const res = await axios.get(
        `${url}weather?lat=${this.state.coords.lat}&lon=${
          this.state.coords.lon
        }&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
      );
      const response = await axios.get(
        `${url}forecast?lat=${this.state.coords.lat}&lon=${
          this.state.coords.lon
        }&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
      );
      this.callSate(response, res);
    }
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
