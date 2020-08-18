import React from 'react';
import Lectures from './react/lectures.js'
import Notes from './react/notes.js'
import Mine from './react/mine.js'
import Dif from './react/dif.js'
import Setup from './react/setup.js'

class Jsx extends React.Component {
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
      {name: 'Setup', slug:'setup', component:<Setup />},
      {name: 'Lectures', slug: 'lectures', component:<Lectures />},
      {name: 'Notes', slug: 'notes', component:<Notes />},
      {name: 'MyBook of React', slug:'mine', component:<Mine />},
      {name: 'Different from JS', slug:'dif', component:<Dif />},    
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
      If you lose your file tree in Atom VIEW &rarr; TOGGLE FILE TREE
      <hr />
      </div>

    )
  }
}

export default Jsx;
