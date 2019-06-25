import React from 'react';
import Information from './training/information.js';
import Practice from './training/practice.js';
import Testing from './training/testing.js';

class Training extends React.Component {
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
      {name: 'Information', slug: 'information',component:<Information /> },
      {name: 'Practice', slug: 'practice',component:<Practice /> },
      {name: 'Testing', slug: 'testing',component:<Testing /> },
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
          Training creates techs that are more autonomous, time efficient, and valuable<br/>
          {renderItems}
        </ul>
        <hr />

        {renderTier2Component}
      </div>
    )
    }
  }
export default Training;
