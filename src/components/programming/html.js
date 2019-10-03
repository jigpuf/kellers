import React from 'react';
import Lectures from './html/lectures.js'
import Display from './html/display.js'
import Text from './html/text.js';
import Media from './html/media.js'
import Layouts from './html/layouts.js'
import Identifiers from './html/identifiers'

class Html extends React.Component {
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
        {name: 'Text', slug: 'text', component:<Text />},
        {name: 'Display', slug: 'display', component: <Display />},
        {name: 'Media', slug: 'media', component:<Media />},
        {name: 'Layouts', slug: 'layouts', component:<Layouts />},
        {name: 'Atributes', slug: 'atributes'},
        {name: 'Identifiers', slug: 'identifiers', component:<Identifiers />},
        {name: 'Forms', slug: 'forms'},
        {name: 'Plugins', slug: 'plugins'},
        {name: 'Drag/Drop', slug: 'drag'},
        {name: 'Web Storage', slug: 'storage'},
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
export default Html;
