import React from "react";
import "./App.css";
import SeasonDisplay from "./components/SeasonDisplay";
import Loader from "./components/Loader";

class App extends React.Component {
  state = {
    latitude: null,
    errorMessage: ""
  };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          latitude: position.coords.latitude
        });
      },
      err => {
        this.setState({
          errorMessage: err.message
        });
      }
    );
  }

  render() {
    // function for asking user for geo location

    return (
      <div className="App">
        {this.state.latitude ? (
          <SeasonDisplay latitude={this.state.latitude} />
        ) : this.state.errorMessage ? (
          <h1> Error: {this.state.errorMessage}</h1>
        ) : (
          <Loader />
        )}
      </div>
    );
  }
}

export default App;
