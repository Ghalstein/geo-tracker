import React from 'react';
import './App.css';

class App extends React.Component {

  window.navigator.geolocation.getCurrentPosition(
    (position) => console.log(position),
    (err) => console.log(err)
  );

  render() {
    return ( 
      <div className = "App" >
        Lattitude: 
      </div>
    );
  };
}

export default App;