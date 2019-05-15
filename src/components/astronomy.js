import React from 'react';

class Astronomy extends React.Component {
  state = {
    tier1: undefined,
  }
  pickTier1  = (item) => {
    return () => {
      this.setState({tier1:item})
    }
  }
  render () {
    const tier1Items = [
      {name: 'Solstices and Equinoxes', slug: 'solstices' },
      {name: 'Sirius', slug: 'sirius' },
      {name: 'Constallations', slug: 'constalations' },
      {name: 'Seasons', slug: 'seasons' },
      {name: 'Polaris', slug: 'polaris'},
      {name: 'Eclipses', slug: 'eclipses'},
      {name: 'Electric Universe', slug: 'electric' },
    ]
    const renderTier1Items = tier1Items.map(item => {
      return (
        <button
          key={item.slug}
          onClick={this.pickTier1(item.slug)}
          className={this.state.tier1 === item.slug ? "tier1 active" : "tier1"}
        >{item.name}</button>
      )
    })
    const tier1 = tier1Items.filter(item => {
      return this.state.tier1 === item.slug;
    });
    const renderTier2Component = tier1[0] && tier1[0].component;
    return (
      <div>
        <ul>
          {renderTier1Items}
        </ul>
        <hr />
        {renderTier2Component}
        <a href='https://www.youtube.com/watch?v=IJhgZBn-LHg'
        >Earth's movement</a><br />
        <a href='https://www.youtube.com/watch?v=qc7MfcKF1-s'
        >eclipses</a><br />
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
      </div>
    );
  }
}

export default Astronomy;
