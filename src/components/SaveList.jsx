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
      if (this.state.cityList.indexOf(name) === -1) {
        name
          ? this.setState({ cityList: this.state.cityList.concat(name) })
          : alert("Cant Save");
      } else {
        alert(`${name} is added before!`);
      }
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
                className="btn btn-sm bg-dark text-white mx-1 mb-1"
                onClick={this.saveCity.bind(this, name)}
              >
                Save city name
              </button>
              <ul
                style={{
                  width: "150px",
                  textAlign: "center",
                  borderRadius: "4px",
                  borderBottom: "1px solid black"
                }}
                className="bg-light px-0"
              >
                {this.state.cityList.map((city, i) => {
                  return (
                    <ul
                      key={i}
                      className=""
                      style={{
                        borderBottom: "1px solid black",
                        padding: "5px 0",
                        display: "flex",
                        justifyContent: "space-between"
                      }}
                    >
                      <li style={{ padding: "0 5px" }}>
                        <i
                          onClick={this.showWeather.bind(this, dispatch, city)}
                          className="fas fa-search-location text-success"
                          style={{
                            cursor: "pointer"
                          }}
                        />{" "}
                      </li>
                      <li>{city} </li>
                      <li style={{ padding: "0 5px" }}>
                        <i
                          className="fas fa-trash-alt text-danger"
                          style={{
                            cursor: "pointer"
                          }}
                          onClick={this.removeCity.bind(this, i, city)}
                        />
                      </li>
                    </ul>
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
