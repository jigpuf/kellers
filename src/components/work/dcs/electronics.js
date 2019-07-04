import React from 'react';
import Test from './electronics/test.js'

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
      {name: 'RLC Circuits/Power(1)', slug: 'rlc' },
      {name: 'Wheatstone(2)', slug: 'wheatstone' },
      {name: 'Components(1)', slug: 'components' },
      {name: 'Circuit Protection(1)', slug: 'protection' },
      {name: 'Test Equipment(1)', slug: 'test', component:<Test />},
      {name: 'Digital/logic gates(2)', slug: 'digital' },
      {name: 'Grounding/shielding/isolation/transient(4)', slug: 'isolation' },
      {name: 'PCBs(3)', slug: 'pcb' },
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
