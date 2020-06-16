import React from 'react';
import DataTypesBasics from './dataTypes/dataTypesBasics.js';
import Strings from './dataTypes/strings.js';
import Numbers from './dataTypes/jsNumbers.js';
import Arrays from './dataTypes/arrays.js';
import Boolean from './dataTypes/boolean.js';
import TypeConversion from './dataTypes/typeConversion.js';

class DataTypes extends React.Component {
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
      {name: 'Data Types Basics', slug: 'basics', component:<DataTypesBasics />},
      {name: 'Strings', slug: 'strings', component:<Strings />},
      {name: 'Numbers', slug: 'numbers', component:<Numbers />},
      {name: 'Arrays', slug: 'arrays', component:<Arrays />},
      {name: 'Boolean', slug: 'boolean', component:<Boolean />},
      {name: 'Type Conversion', slug: 'type', component:<TypeConversion />},

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


export default DataTypes;
