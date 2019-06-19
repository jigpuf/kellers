import React from 'react';

class Lectures extends React.Component {
  render () {
    return (
      <div>
        <h3>James Kaler Astronomy Course</h3>
        <div className='twoColumn'>
          <a href='astronomy/01_universe.mp3'>1-Universe</a><br />
          <a href='astronomy/02_earth.mp3'>2-Earth</a><br />
          <a href='astronomy/03_sun.mp3'>03-Sun</a><br />
          <a href='astronomy/04_constellations.mp3'>04-Constellations</a><br />
          <a href='astronomy/05_moon.mp3'>05-Moon</a><br />
          <a href='astronomy/06_planets.mp3'>06-Planets</a><br />
          <a href='astronomy/07_gravity.mp3'>07-Gravity</a><br />
          <a href='astronomy/08_outer.mp3'>08-Outer</a><br />
          <a href='astronomy/09_ourPlanet.mp3'>09-Our Planet</a><br />
          <a href='astronomy/10_ironPlanets.mp3'>10-Iron Planets</a><br />
          <a href='astronomy/11_monsterPlanets.mp3'>11-Monster Planets</a><br />
          <a href='astronomy/12_distantPlanets.mp3'>12-Distant Planets</a><br />
          <a href='astronomy/13_meteors.mp3'>13-Meteors</a><br />
          <a href='astronomy/14_creation.mp3'>14-Creation</a><br />
        </div>
        <hr/>
        <a href='https://www.youtube.com/watch?v=IJhgZBn-LHg'
        >Earth's movement</a><br />
        <a href='https://www.youtube.com/watch?v=mxhxL1LzKww&t=1135s'
        >How much of the earth can you see at Once?</a><br />
      </div>
    );
  }
}

export default Lectures;