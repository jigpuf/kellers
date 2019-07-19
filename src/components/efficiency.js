import React from 'react'
import Experience from './efficiency/experience.js'
import Health from './efficiency/health.js'
import Knowledge from './efficiency/knowledge.js'
import Methodology from './efficiency/methodology.js'
import Property from './efficiency/property.js'
import Relation from './efficiency/relation.js'
import Simplicity from './efficiency/simplicity.js'
import Space from './efficiency/space.js'
import Spirituality from './efficiency/spirituality.js'
import Time from './efficiency/time.js'

class Efficiency extends React.Component {
  state = {
    tier1: undefined,
  }
  pickTier1 = (item) => {
    return () => {
      this.setState({tier1:item})
    }
  }

  render () {

    const Items = [

      {name: 'Experience', slug: 'experience', component:<Experience />},
      {name: 'Health', slug: 'health', component:<Health />},
      {name: 'Knowledge', slug: 'knowledge', component:<Knowledge />},
      {name: 'Methodology', slug: 'methodology', component:<Methodology />},
      {name: 'Property', slug: 'property', component:<Property />},
      {name: 'Relationships', slug: 'relationships', component:<Relation />},
      {name: 'Simplicity', slug: 'simplicity', component:<Simplicity />},
      {name: 'Space', slug: 'Space', component:<Space />},
      {name: 'Spirituality', slug: 'spirituality', component:<Spirituality />},
      {name: 'Time', slug: 'time', component:<Time />},
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
        <hr />
        {renderTier2Component}
      </ul>
      </div>

    )
  }
}

export default Efficiency;
