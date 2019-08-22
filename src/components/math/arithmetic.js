import React from 'react';

class Arithmetic extends React.Component {
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
      {name: 'Number Systems', slug: 'systems',},
      {name: 'Math Properties', slug: 'properties',},
      {name: 'Addition', slug: 'add',},
      {name: 'Subtraction', slug: 'subtract',},
      {name: 'Divition', slug: 'divide',},
      {name: 'Multiplication', slug: 'mult',},
      {name: 'Radicals', slug: 'radical',},
      {name: 'Exponents', slug: 'exponent',},
      {name: 'Order of Operations', slug: 'ooo',},
      {name: 'Numbers', slug: 'numbers',},
      {name: 'Factoring', slug: 'factor',},
      {name: 'Scientific/Engineering Notation', slug: 'scientific',},
      {name: 'Percentages and proportions', slug: 'percent',},
      {name: 'Statistics', slug: 'stat',},
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

export default Arithmetic;
