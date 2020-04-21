import React from 'react';
import TimeOff from './work/timeOff.js'
import Codes from './work/codes.js'
import Controls from './work/controls.js'
import Software from './work/software.js'
import Avionics from './work/avionics.js'
import WorkDone from './work/workDone.js'




class Work extends React.Component {
  state = {
    tier1: undefined,
  }
  pickTier1  = (item) => {
    return () => {
      this.setState({tier1:item})
    }
  }
  render () {
    const tier1Items = [
      {name: 'TimeOff', slug: 'time', component:<TimeOff />},
      {name: 'Codes', slug: 'codes', component:<Codes />},
      {name: 'Controls', slug: 'controls', component:<Controls />},
      {name: 'Software', slug: 'computer', component:<Software />},
      {name: 'Avionics', slug: 'avionics', component:<Avionics />},
      {name: 'Work Done', slug: 'done', component:<WorkDone />},




    ]
    const renderTier1Items = tier1Items.map(item => {
      return (
        <button
          key={item.slug}
          onClick={this.pickTier1(item.slug)}
          className={this.state.tier1 === item.slug ? "tier1 active" : "tier1"}
        >{item.name}</button>
      )
    })
    const tier1 = tier1Items.filter(item => {
      return this.state.tier1 === item.slug;
    });
    const renderTier2Component = tier1[0] && tier1[0].component;
    return (
      <div>
        <ul>
          {renderTier1Items}
        </ul>
        <h3><a href='http://dcs-helper.herokuapp.com' target='_blank'
        >DCS Helper</a><br /></h3>
        <hr />
        {renderTier2Component}
      </div>
    )
    }
  }

export default Work;
