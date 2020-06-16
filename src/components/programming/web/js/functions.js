import React from 'react';
import Declaration from './functions/declaration.js'
import Arguments from './functions/arguments.js'
import Arrow from './functions/arrow.js'
import FM from './functions/fm.js'
import Callbacks from './functions/callbacks.js'
import ForEach from './functions/forEach.js'
import Useful from './functions/useful.js'

class Functions extends React.Component {
  state = {
    tier1: undefined,
  }
  pickTier1 = (item) => {
    return () => {
      this.setState({tier1:item})
    }
  }

  render () {

    const Items = [
      {name: 'Declaration/Expression', slug: 'declare', component:<Declaration />},
      {name: 'Arguments/parameters', slug: 'arguments', component:<Arguments />},
      {name: 'Arrow Functions', slug: 'arrow', component:<Arrow />},
      {name: 'Functions/Methods', slug: 'methods', component:<FM />},
      {name: 'Callbacks', slug: 'callback', component:<Callbacks />},
      {name: 'For Each', slug: 'forEach', component:<ForEach />},
      {name: 'Useful Functions', slug: 'useful', component:<Useful />},
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
        <hr />
        {renderTier2Component}
      </ul>
      </div>

    )
  }
}

export default Functions;
