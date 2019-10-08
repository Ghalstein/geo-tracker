import React from 'react';
import './App.css';

class App extends React.Component {

  state = {
    lattitude: null
  }

  render() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => console.log(position),
      (err) => console.log(err)
    );
    return ( 
      <div className = "App" >
        Lattitude: {this.state.lattitude}
      </div>
    );
  };
}

export default App;