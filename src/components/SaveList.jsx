import React, { Component } from "react";
import { Consumer } from "./Context";

class SaveList extends Component {
  state = {
    cityList: [],
    visible: "none"
  };

  showWeather = (dispatch, city, e) => {
    e.preventDefault();
    dispatch({ type: "SEARCH_CITY", payload: city });
  };

  saveCity = (name, e) => {
    e.preventDefault();
    if (this.state.cityList.length <= 4) {
      name
        ? this.setState({ cityList: this.state.cityList.concat(name) })
        : alert("Cant Save");
    } else {
      this.setState({ visible: "block" });
    }
  };

  removeCity = (i, city) => {
    this.setState({
      cityList: this.state.cityList.filter((index, x) => {
        return i !== x;
      })
    });
    this.setState({ visible: "none" });
  };

  render() {
    return (
      <Consumer>
        {value => {
          const { name, dispatch } = value;
          return (
            <div className="mt-2" style={{ width: "150px" }}>
              <button
                className="btn btn-sm bg-dark text-white mx-1"
                onClick={this.saveCity.bind(this, name)}
              >
                Save city name
              </button>
              <ul
                style={{
                  width: "120px",
                  textAlign: "center",
                  borderRadius: "4px",
                  borderBottom: "1px solid black"
                }}
                className="bg-light p-0"
              >
                {this.state.cityList.map((city, i) => {
                  return (
                    <li
                      key={i}
                      style={{
                        borderBottom: "1px solid black"
                      }}
                    >
                      <i
                        onClick={this.showWeather.bind(this, dispatch, city)}
                        className="fas fa-search-location text-success"
                        style={{ cursor: "pointer" }}
                      />{" "}
                      {city}{" "}
                      <i
                        className="fas fa-trash-alt text-danger"
                        style={{ cursor: "pointer" }}
                        onClick={this.removeCity.bind(this, i, city)}
                      />
                    </li>
                  );
                })}
                <span
                  style={{
                    display: this.state.visible,
                    color: "red"
                  }}
                >
                  Save list is full
                </span>
              </ul>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default SaveList;
