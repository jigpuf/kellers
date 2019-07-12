import React from 'react'
import Typing from './programming/typing.js'
import Html from './programming/html.js'
import Css from './programming/css.js'

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
      {name: 'Methodology', slug: 'method' },
      {name: 'c++', slug: 'c' },
      {name: 'HTML', slug: 'html', component:<Html /> },
      {name: 'CSS', slug: 'css', component:<Css /> },
      {name: 'Javascript', slug: 'js' },
      {name: 'JSX', slug: 'jsx' },
      {name: 'MongoDB', slug: 'mongo' },
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
