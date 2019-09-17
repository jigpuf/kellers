import React from 'react'
import Plan from './subjects/plan.js'
import Prophecy from './subjects/prophecy.js'
import Evolution from './subjects/evolution.js'
import Temple from './subjects/temple.js'
import Relationship from './subjects/relationship.js'
import Are from './subjects/are.js'
import Money from './subjects/money.js'
import Promised from './subjects/promised.js'
import MormonChristian from './subjects/mormonChristian.js'
import Power from './subjects/power.js'
import Symbolism from './subjects/symbolism.js'
import Comandments from './subjects/comandments.js'

class Subject extends React.Component {
  state= {
  tier2: undefined,
}
pickTier2 = (item) => {
  return () => {
    this.setState({tier2:item})
  }
}
  render () {
    const Items = [
      {name: 'Plan of Salvation', slug: 'plan', component:<Plan />},
      {name: 'Prophecy', slug: 'prophecy', component:<Prophecy />},
      {name: 'Priesthood', slug: 'priesthood'},
      {name: 'Temple', slug: 'temple', component:<Temple />},
      {name: 'Sermons', slug: 'sermons'},
      {name: 'Visions', slug: 'visions'},
      {name: 'Cosmology', slug: 'cosmology'},
      {name: 'Angels', slug: 'angels'},
      {name: 'Relationships', slug: 'relationships', component:<Relationship />},
      {name: 'Evolution', slug: 'evolution', component:<Evolution />},
      {name: 'What things are', slug: 'are', component:<Are />},
      {name: 'Money', slug: 'money', component: <Money />},
      {name: 'Promised Land covenant', slug: 'promised', component:<Promised />},
      {name: 'Mormons Christian?', slug: 'mormonChristian', component:<MormonChristian />},
      {name: 'Power', slug: 'power', component:<Power />},
      {name: 'Symbolism', slug: 'symbolism', component:<Symbolism />},
      {name: 'Comandments', slug: 'comandments', component:<Comandments />},
    ]
      const renderItems = Items.map(item => {
        return (
          <button
            key={item.slug}
            onClick={this.pickTier2(item.slug)}
            className={this.state.tier2 === item.slug ? "tier2 active" : "tier2"}
            >{item.name}</button>
        )
      })
      const tier2 = Items.filter(item => {
        return this.state.tier2 === item.slug;
      });
      const renderTier3Component = tier2[0] && tier2[0].component;
      return (
        <div>
          <ul>
          {renderItems}
          <hr />
          {renderTier3Component}
          </ul>
        </div>
      );
    }
  }

export default Subject;


/*
*/
