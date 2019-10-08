import React from 'react';
import './App.css';

class App extends React.Component {

  state = {
    latitude: null
  }

  render() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({lattitude: position.coords.latitude}),
      (err) => console.log(err)
    );
    return ( 
      <div className = "App" >
        Latitude: {this.state.latitude}
      </div>
    );
  };
}

export default App;