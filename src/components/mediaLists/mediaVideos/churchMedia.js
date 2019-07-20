import React from 'react';
import Presidents from './churchMedia/presidents.js'
import Apostles from './churchMedia/apostles.js'
import HughNibley from './churchMedia/hughNibley.js'

class Church extends React.Component {
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
      {name: 'Presidents', slug: 'presidents', component:<Presidents />},
      {name: 'Apostles', slug: 'apostles', component:<Apostles />},
      {name: 'BYU', slug: 'byu' },
      {name: 'Hyrum Andrus', slug: 'hyrumAndrus' },
      {name: 'Hugh Nibley', slug: 'hughNibley', component:<HughNibley /> },
      {name: 'Fair Mormon', slug: 'fairMormon' },
      {name: 'Interpreter', slug: 'Interpreter' },
      {name: 'Heartland', slug: 'heartland' },
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
export default Church;
