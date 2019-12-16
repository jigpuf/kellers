import React from 'react';
import Limit from './positionFeedback/limit.js';
import Hvp from './positionFeedback/hvp.js';

class PositionFeedback extends React.Component {
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
      {name: 'Limits', slug: 'limits', component:<Limit />},
      {name: 'Hydraulic Valve Position', slug: 'hvp', component:<Hvp />},
      {name: 'LVDT', slug: 'lvdt'},
      {name: 'Level Transmitters', slug: 'level'},
      {name: 'Potentiometer', slug: 'pot'},
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


export default PositionFeedback;
