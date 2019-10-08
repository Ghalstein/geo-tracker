import React from "react";
import "./App.css";

class App extends React.Component {
  state = {
    latitude: null,
    errorMessage: ''
  };

  render() {
    // function for asking user for geo location
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          latitude: position.coords.latitude
        });
      },
      err => {
        this.setState({errorMessage: err.message});
      }
    );

    return (
      <div className="App">
        {this.state.latitude ?
          <h1>Latitude: {this.state.latitude}</h1> 
        :
          <h1> Error: {this.state.errorMessage}</h1>
        }
      </div>
    );
  }
}

export default App;
