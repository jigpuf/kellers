import React from 'react';
import Training from './leadership/training.js';
import Efficiency from './leadership/efficiency.js';
import Relation from './leadership/relation.js';

class Leadership extends React.Component {
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
      {name: 'Training', slug: 'training',component:<Training />},
      {name: 'Efficiency', slug: 'eficiency',component:<Efficiency /> },
      {name: 'Relationship curency', slug: 'relation',component:<Relation /> },
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
        The whole point of a leader is to produce a multiplying effect on the
        crew<br/>
          {renderItems}
        </ul>
        <hr />

        {renderTier2Component}
      </div>
    )
    }
  }
export default Leadership;
