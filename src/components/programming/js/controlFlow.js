import React from 'react';
import Operators from './controlFlow/operators.js'
import Loops from './controlFlow/loops.js'
import If from './controlFlow/if.js'
import Ternary from './controlFlow/ternary.js'
import BreakStatement from './controlFlow/breakStatement.js'
import SwitchStatement from './controlFlow/switchStatement.js'
import Scope from './controlFlow/scope.js'

class ControlFlow extends React.Component {
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
      {name: 'Logical Operators', slug: 'operators', component:<Operators />},
      {name: 'Loops', slug: 'loops', component:<Loops />},
      {name: 'If/Else', slug: 'if', component:<If />},
      {name: 'Ternary Operators', slug: 'ternary', component:<Ternary />},
      {name: 'Break', slug: 'break', component:<BreakStatement />},
      {name: 'Switch', slug: 'switch', component:<SwitchStatement />},
      {name: 'Scope', slug: 'scope', component:<Scope />},

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
export default ControlFlow;
