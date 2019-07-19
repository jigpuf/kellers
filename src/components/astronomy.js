import React from 'react'
import Sirius from './astronomy/sirius.js'
import Polaris from './astronomy/polaris.js'
import Eclipses from './astronomy/eclipses.js'
import Electric from './astronomy/electric.js'
import Lectures from './astronomy/lectures.js'
import Seasons from './astronomy/seasons.js'
import Constallations from './astronomy/constallations.js'


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
    const Items = [
      {name: 'Sirius', slug: 'sirius', component: <Sirius /> },
      {name: 'Constallations', slug: 'constallations', component:<Constallations /> },
      {name: 'Seasons', slug: 'seasons', component:<Seasons /> },
      {name: 'Polaris', slug: 'polaris', component:<Polaris />},
      {name: 'Eclipses', slug: 'eclipses', component:<Eclipses />},
      {name: 'Electric Universe', slug: 'electric', component:<Electric /> },
      {name: 'Astronomy Lectures', slug: 'lectures', component: <Lectures />},
    ]
    const renderItems = Items.map(item => {
      return (
        <button
          key={item.slug}
          onClick={this.pickTier1(item.slug)}
          className={this.state.tier1 === item.slug ? "tier1 active" : "tier1"}
        >{item.name}</button>
      )
    })
    const tier1 = Items.filter(item => {
      return this.state.tier1 === item.slug;
    });
    const renderTier2Component = tier1[0] && tier1[0].component;
    return (
      <div>
        <ul>
          {renderItems}
        </ul>
        <hr />
        {renderTier2Component}
      </div>
    );
  }
}

export default Astronomy;
