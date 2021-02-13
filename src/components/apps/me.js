import React, {useState} from 'react';

const AboutMe =() => {
  const [location,setLocation]= useState({longitude:100, latitude:100, altitude:100});


  const changeLocation = () =>(
    window.navigator.geolocation.getCurrentPosition(
      position =>{
        setLocation({
          longitude:position.coords.longitude,
          latitude:position.coords.latitude,
          altitude:position.coords.altitude
        });
      }
    )
  );
    return (
      <div>
      <h2>About Me</h2>
      <button onClick={changeLocation()}>findMe</button>
      Latitude:{location.latitude}<br/>
      Longitude:{location.longitude}<br/>
      Altitude:{location.altitude}<br/>
      Time:<br/>
      Date:<br/>
      </div>
    );
  }

export default AboutMe;
