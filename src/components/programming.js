import React from 'react'
import Typing from './programming/typing.js'
import Methodology from './programming/methodology.js'
import Cpp from './programming/cpp.js'
import Html from './programming/html.js'
import Css from './programming/css.js'
import Js from './programming/js.js'
import Jsx from './programming/jsx.js'
import Mongo from './programming/mongo.js'
import PLC from './programming/plc.js'
import Node from './programming/node.js'
import Labview from './programming/labview.js'

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
      {name: 'Typing', slug: 'typing', component:<Typing /> },
      {name: 'Methodology', slug: 'method', component:<Methodology /> },
      {name: 'c++', slug: 'c', component:<Cpp /> },
      {name: 'HTML', slug: 'html', component:<Html /> },
      {name: 'CSS', slug: 'css', component:<Css /> },
      {name: 'Javascript', slug: 'js', component:<Js /> },
      {name: 'JSX', slug: 'jsx', component:<Jsx /> },
      {name: 'MongoDB', slug: 'mongo', component:<Mongo /> },
      {name: 'PLC', slug: 'plc', component:<PLC /> },
      {name: 'Node.JS', slug: 'node', component:<Node /> },
      {name: 'Labview', slug: 'labview', component:<Labview /> },
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
