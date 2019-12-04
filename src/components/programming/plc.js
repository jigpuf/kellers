import React from 'react';
import Lectures from './plc/lectures.js'
import PlcProgramming from './plc/plcProgramming.js'
import Notes from './plc/notes.js'
import Programs from './plc/programs.js'
import PlcHardware from './plc/plcHardware.js'
import PlcCommunications from './plc/plcCommunications.js'

class PLC extends React.Component {
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
      {name: 'Lectures', slug: 'lectures', component:<Lectures />},
      {name: 'Notes', slug: 'notes', component:<Notes />},
      {name: 'Programming', slug: 'programming', component:<PlcProgramming />},
      {name: 'Software', slug: 'software', component:<Programs /> },
      {name: 'Hardware', slug: 'hardware', component:<PlcHardware /> },
      {name: 'Communications', slug: 'communications', component:<PlcCommunications />},

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

export default PLC;
