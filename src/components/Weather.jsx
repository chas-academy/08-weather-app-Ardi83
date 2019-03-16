import React, { Component } from "react";
import { Consumer } from "./Context";
import "../App.css";

class Weather extends Component {
  state = {
    name: "",
    coordss: { lat: "", lon: "" }
  };
  onChange = e => {
    this.setState({
      name:
        e.target.value
          .toLowerCase()
          .charAt(0)
          .toUpperCase() + e.target.value.slice(1)
    });
  };

  onSubmit = (dispatch, e) => {
    e.preventDefault();
    dispatch({ type: "SEARCH_CITY", payload: this.state.name });
    this.setState({ name: "" });
  };

  findLocation = (dispatch, e) => {
    e.preventDefault();
    let options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };
    const success = pos => {
      let crd = pos.coords;
      this.setState({
        coordss: {
          lat: crd.latitude,
          lon: crd.longitude
        }
      });
      dispatch({ type: "FIND_LOCATION", payload: this.state.coordss });
    };
    const error = err => {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    };
    navigator.geolocation.getCurrentPosition(success, error, options);
  };

  render() {
    const { name } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          let sym = [];
          let count = -1;
          let totalDegree = 0;
          let firstImage = require('../assets/01.png');
          let secondImage = require('../assets/02.png');
          let thirdImage = require('../assets/03.png');
          let fourthImage = require('../assets/04.png');
          const backColor = [firstImage, secondImage, thirdImage, fourthImage];
          return (
            <div className="weather">
              <div className="forcast__top">
                <div className="input-group my-3">
                  <input
                    className="form-control-sm forcast__top__input"
                    placeholder="Enter location name..."
                    type="text"
                    value={name}
                    onChange={this.onChange}
                  />
                  <button
                    type="button"
                    className="btn btn-dark btn-sm"
                    onClick={this.onSubmit.bind(this, dispatch)}
                  >
                    <i className="fas fa-arrow-right" />
                  </button>
                </div>
                <button
                  className="btn btn-sm btn-outline-dark btn-currentLocation"
                  onClick={this.findLocation.bind(this, dispatch)}
                >
                  Current location
                  <i className="fas fa-map-marked-alt ml-2" />
                </button>
                <div className="locationComment">
                  <span className="bg-light p-1" style={{borderRadius: '5px'}}>
                    <i className="fas fa-map-marker-alt"></i> Please Enable your Location on setting first
                  </span>
                </div>
              </div>
              <hr />
              <div className="forcast mb-4">
                {value.HourlyTemp.slice(0, 4).map(data => {
                  sym.push(
                    `https://openweathermap.org/img/w/${
                      data.weather[0].icon
                    }.png`
                    );
                    count++;
                    let backColorrr = backColor[count];
                    totalDegree += data.main.temp;
                    return (
                      <div 
                      key={data.dt} 
                      className="forcast__detail"
                      style={{backgroundImage: `url(${backColorrr})`}}
                      >
                      <p>{new Date(data.dt * 1000).toLocaleTimeString()}</p>
                      <div className="list-group">
                        <span>
                          <img alt="weather symbol" src={sym[count]} />
                        </span>
                        <span>{data.main.temp}&#8451;</span>
                        <span>{data.wind.speed} m/s</span>
                      </div>
                    </div>
                  );
                })}
              </div>
              {(totalDegree === 0)
              ?
              <span></span> 
              :
              <table style={{backgroundColor: 'lightblue'}}>
              <tbody>
                <tr>
                  <th className="p-2" >Av. Temp</th>
                  <td className="p-2">{Math.round((totalDegree/5) * 100) / 100} &#8451;</td>
                </tr>
              </tbody>
              </table>
            }
              <div className="smhiMap my-3" 
              style={{overflow: 'auto', height: '300px', width: '490px'}}>
                <img
                  src={value.map}
                  alt="smhi-sweden-radar"
                  className="card-image"
                  style={{backgroundColor: '#020d0285'}}
                />
              </div>
            
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Weather;
