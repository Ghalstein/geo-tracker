import React from "react";
import "./App.css";

class App extends React.Component {
  state = {
    latitude: null
  };

  render() {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          latitude: position.coords.latitude
        });
      },
      err => console.log(err)
    );
    return (
      <div className="App">
        <h1>Latitude: {this.state.latitude}</h1>
      </div>
    );
  }
}

export default App;
