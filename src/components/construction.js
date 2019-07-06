import React from 'react'
import Carpentry from './construction/carpentry.js'
import Flooring from './construction/flooring.js'

class Woodworking extends React.Component {
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
      {name: 'Plumbing', slug: 'plumbing' },
      {name: 'Carpentry', slug: 'carpentry', component:<Carpentry /> },
      {name: 'Electrical', slug: 'electrical' },
      {name: 'Flooring', slug: 'flooring', component:<Flooring /> },
      {name: 'Insulation', slug: 'insulation' },
      {name: 'Networking', slug: 'networking' },
      {name: 'Pest Control', slug: 'pest' },
      {name: 'Heat/Ac', slug: 'ac' },
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
export default Woodworking;
