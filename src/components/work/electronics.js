import React from 'react';

class Electronics extends React.Component {
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
      {name: 'RLC Circuits', slug: 'rlc' },
      {name: 'Semi-Conductors', slug: 'semi' },
      {name: 'Color Codes', slug: 'colors' },
      {name: 'Filters', slug: 'filters' },
      {name: 'Rectifiers', slug: 'rectifiers' },
      {name: 'Soldering', slug: 'soldering' },
      {name: 'Digital', slug: 'digital' },
      {name: 'Grounding/shielding', slug: 'ground' },
      {name: 'Signals', slug: 'signals' },
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

export default Electronics;
