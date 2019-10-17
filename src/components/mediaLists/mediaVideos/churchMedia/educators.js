import React from 'react';
import HyrumAndrus from './educators/hyrumAndrus.js'
import HughNibley from './educators/hughNibley.js'
import Interpreter from './educators/interpreter.js'
import CleonSkousen from './educators/cleonSkousen.js'
import Individual from './educators/individual.js'

class Educators extends React.Component {
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
      {name: 'Hyrum Andrus', slug: 'hyrumAndrus', component:<HyrumAndrus /> },
      {name: 'Hugh Nibley', slug: 'hughNibley', component:<HughNibley /> },
      {name: 'Fair Mormon', slug: 'fairMormon' },
      {name: 'Interpreter', slug: 'Interpreter', component:<Interpreter /> },
      {name: 'Heartland', slug: 'heartland' },
      {name: 'Cleon Skousen', slug: 'cleon', component:<CleonSkousen />},
      {name: 'Individuals', slug: 'individuals', component:<Individual />}
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

export default Educators;
