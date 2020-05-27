import React from 'react';
import Lectures from './js/lectures.js'
import Basics from './js/jsBasics.js'
import DataTypes from './js/dataTypes.js'
import Variables from './js/variables.js'
import ControlFlow from './js/controlFlow.js'
import Functions from './js/functions.js'
import ObjectLiterals from './js/objectLiterals.js'


class Js extends React.Component {
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
      {name: 'Javascript Basics', slug: 'basics', component:<Basics />},
      {name: 'Data Types', slug: 'dataTypes', component:<DataTypes />},
      {name: 'Variables', slug: 'variables', component:<Variables />},
      {name: 'Control Flow', slug: 'controlFlow', component:<ControlFlow />},
      {name: 'Functions/Methods', slug: 'functions', component:<Functions />},
      {name: 'Object Literals', slug: 'objectLiterals', component:<ObjectLiterals />},

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

export default Js;
