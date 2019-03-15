import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Info from "./components/Info";
import About from "./components/pages/About";
import Week from "./components/Week";
import Hourly from "./components/Hourly";
import NotFound from './components/pages/NotFound';

import { Provider } from "./components/Context";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const time = new Date().getHours();
class App extends Component {
  state = {
    image: null
  }
componentDidMount(){
  if (time >= 0 && time < 5) {this.setState({image: "https://i.pinimg.com/originals/cd/8a/d1/cd8ad13876c3a7dfea454ff6d870013a.gif"})}
  if (time >= 5 && time < 8) {this.setState({image:'https://www.buildingcentre.co.uk/system/images/images/000/078/759/original/A14-James-Kerr_Packington-low-res.gif?1476116949'})}
  if (time >= 8 && time < 10) {this.setState({image: "http://myhappydance.files.wordpress.com/2012/06/sunny-day1.jpg"})}
  if (time >= 10 && time < 14) {this.setState({image: "https://www.braverlaw.net/wp-content/uploads/2016/04/sunny-day.jpg"})}
  if (time >= 14 && time < 19) {this.setState({image: "https://motionarray.imgix.net/preview-32497VWLgUILjcV_0005.jpg"})}
  if (time >= 19 && time < 20) {this.setState({image: "https://www.gannett-cdn.com/media/2017/06/22/Phoenix/Phoenix/636336921421960839-RS2-7663.jpg"})}
  if (time >= 20 && time < 22) {this.setState({image: "https://upload.wikimedia.org/wikipedia/commons/5/58/Sunset_2007-1.jpg"})}
  if (time >= 22 && time < 24) {this.setState({image: "https://www.naukrinama.com/stressbuster/wp-content/uploads/2018/09/full-moon-night-landscape-with-forest-lake_4ykygxqr__F0000.png"})}
}
  
  
  render() {
    return (
      <Provider>
        <Router>
          <div style={{backgroundImage: `url(${this.state.image})`, 
          backgroundSize: 'cover', backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat'}} className="App">
            <Header branding="Weather App" />
            <Switch>
              <Route exact path="/about" component={About} />
              <Route exact path="/" component={Info} />
              <Route exact path="/daily" component={Week} />
              <Route exact path="/hourly" component={Hourly} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
