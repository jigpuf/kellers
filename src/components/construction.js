import React from 'react'
import Ac from './construction/ac.js'
import Carpentry from './construction/carpentry.js'
import Electrical from './construction/electrical.js'
import Flooring from './construction/flooring.js'
import Insulation from './construction/insulation.js'
import Pest from './construction/pest.js'
import Plumbing from './construction/plumbing.js'
import Masonry from './construction/masonry.js'
import Painting from './construction/painting.js'

class Construction extends React.Component {
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
      {name: 'Heat/Ac', slug: 'ac', component:<Ac /> },
      {name: 'Carpentry', slug: 'carpentry', component:<Carpentry /> },
      {name: 'Electrical', slug: 'electrical', component:<Electrical /> },
      {name: 'Flooring', slug: 'flooring', component:<Flooring /> },
      {name: 'Insulation', slug: 'insulation', component:<Insulation /> },
      {name: 'Pest Control', slug: 'pest', component:<Pest /> },
      {name: 'Plumbing', slug: 'plumbing', component:<Plumbing /> },
      {name: 'Masonry', slug: 'masonry', component:<Masonry />},
      {name: 'Painting', slug: 'paint', component:<Painting />},
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
    )
    }
  }
export default Construction;
