import React from 'react'
import Web from './programming/web.js'
import Typing from './programming/typing.js'
import Methodology from './programming/methodology.js'
import Cpp from './programming/cpp.js'
import PLC from './programming/plc.js'
import Labview from './programming/labview.js'
import MakingVideo from './programming/makingVideo.js'
import Office from './programming/office.js'

class Programming extends React.Component {
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
      {name: 'Web Development', slug: 'web', component:<Web /> },
      {name: 'Typing', slug: 'typing', component:<Typing /> },
      {name: 'Methodology', slug: 'method', component:<Methodology /> },
      {name: 'c++', slug: 'c', component:<Cpp /> },
      {name: 'PLC', slug: 'plc', component:<PLC /> },
      {name: 'Labview', slug: 'labview', component:<Labview /> },
      {name: 'Video', slug: 'video', component:<MakingVideo />},
      {name: 'Office', slug: 'office', component:<Office />},
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

export default Programming;
