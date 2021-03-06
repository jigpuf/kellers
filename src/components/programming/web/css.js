import React from 'react';
import Lectures from './css/lectures.js'
import Notes from './css/notes.js'
import Layout from './css/layout.js'
import Color from './css/color.js'
import Size from './css/size.js'
import Box from './css/box.js'
import FlexBox from './css/flexBox.js'
import Selectors from './css/selectors.js'
import Position from './css/position.js'
import Text from './css/text.js'


class Css extends React.Component {
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
      {name: 'Layout', slug: 'layout', component:<Layout />},
      {name: 'Color', slug: 'color', component:<Color />},
      {name: 'Size Units', slug: 'size', component:<Size />},
      {name: 'Selectors', slug: 'selectors', component:<Selectors />},
      {name: 'Position', slug: 'position', component:<Position />},
      {name: 'Text Properties', slug: 'text', component:<Text />},
      {name: 'Box Model', slug: 'box', component:<Box />},
      {name: 'FlexBox', slug: 'flexBox', component:<FlexBox />},

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
export default Css;
