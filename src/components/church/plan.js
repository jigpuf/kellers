import React from 'react';
import Element from './plan/element.js'
import Atonement from './plan/atonement.js'

class Plan extends React.Component {
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
      {name: 'Elemental Nature', slug: 'element', component:<Element />},
      {name: 'Intelligence', slug: 'intelligence',},
      {name: 'Pre-mortal', slug: 'premortal',},
      {name: 'Creation', slug: 'creation',},
      {name: 'Fall', slug: 'fall',},
      {name: 'Atonement', slug: 'atonement', component:<Atonement />},
      {name: 'Resurrection', slug: 'resurrection',},
      {name: 'Judgement', slug: 'judgement',},
      {name: 'Kingdoms', slug: 'kingdoms',},
      {name: 'Theosis', slug: 'theosis',},
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
      </div>
    )
    }
  }
export default Plan;
