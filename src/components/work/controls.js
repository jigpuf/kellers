import React from 'react';
import Ni from './controls/ni.js'
import Plc from './controls/plc.js'
import Pid from './controls/pid.js'
import Channels from './controls/channels.js'
import FileSync from './controls/sync.js'

class Controls extends React.Component {
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
      {name: 'National Instruments', slug: 'ni', component:<Ni />},
      {name: 'Allen Bradley', slug: 'plc', component:<Plc />},
      {name: 'Watlow Controller', slug: 'watlow',},
      {name: 'Siemens', slug: 'siemens',},
      {name: 'PID Theory', slug:'pid', component:<Pid />},
      {name: 'Channel Types', slug:'channels', component:<Channels />},
      {name: 'File_Sync', slug:'sync', component:<FileSync />},
      {name: 'Stat Lines', slug: 'stat'},
      {name: 'AWS', slug: 'aws'},

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

export default Controls;
