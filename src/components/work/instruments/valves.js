import React from 'react';
import V200 from './valves/v200.js';
import ND9 from './valves/nd9.js';
import Er5k from './valves/er5k.js';

class Valves extends React.Component {
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
      {name: 'V200', slug: 'v200', component:<V200 /> },
      {name: 'Metso ND9', slug: 'metso', component:<ND9 />},
      {name: 'Versa', slug: 'versa', },
      {name: 'Single Acting', slug: 'single', },
      {name: 'Double Acting', slug: 'double', },
      {name: 'ER5k', slug: 'er5k', component:<Er5k /> },
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


export default Valves;
