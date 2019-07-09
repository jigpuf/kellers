import React from 'react';
import Office from './computer/office.js'
import Warpdrive from './computer/warpdrive.js'
import Visio from './computer/visio.js'
import Control from './computer/control.js'
import Data from './computer/data.js'
import Instruments from './computer/instruments.js'
import Command from './computer/command.js'
import Video from './computer/video.js'
import Smods from './computer/smods.js'
import Architect from './computer/architect.js'
import Confluence from './computer/confluence.js'
import Jira from './computer/jira.js'
import Sharex from './computer/sharex.js'


class Software extends React.Component {
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
      {name: 'Office', slug: 'office', component:<Office />},
      {name: 'Warpdrive', slug: 'warpdrive', component:<Warpdrive />},
      {name: 'Visio', slug: 'visio', component:<Visio />},
      {name: 'Control', slug: 'control', component:<Control />},
      {name: 'Data', slug: 'data', component:<Data />},
      {name: 'Instruments', slug: 'instruments', component:<Instruments />},
      {name: 'Command Line', slug: 'command', component:<Command />},
      {name: 'Video', slug: 'video', component:<Video />},
      {name: 'Smods', slug: 'smods', component:<Smods />},
      {name: 'Architect', slug: 'architect', component:<Architect />},
      {name: 'Confluence', slug:'confluence', component:<Confluence />},
      {name: 'Jira', slug:'jira', component:<Jira />},
      {name: 'Sharex', slug:'sharex', component:<Sharex />},

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
export default Software;
