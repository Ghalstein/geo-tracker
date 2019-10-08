import React from 'react';
import './App.css';

function App() {
  window.navigator.geolocation.getCurrentPosition(
    (position) => console.log(position),
    (err) => console.log(err)
  );

  return ( <
    div className = "App" >
    </div>
  );
}

export default App;