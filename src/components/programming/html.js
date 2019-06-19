import React from 'react';
import Text from './html/text.js';

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
        {name: 'Text', slug: 'text', component:<Text />},
        {name: 'Links', slug: 'links'},
        {name: 'Images', slug: 'images'},
        {name: 'Video', slug: 'video'},
        {name: 'Audio', slug: 'audio'},
        {name: 'Components', slug: 'components'},
        {name: 'Tables', slug: 'tables'},
        {name: 'Blocks', slug: 'blocks'},
        {name: 'Class', slug: 'class'},
        {name: 'Id', slug: 'id'},
        {name: 'File Paths', slug: 'files'},
        {name: 'Head', slug: 'head'},
        {name: 'Layouts', slug: 'layouts'},
        {name: 'Responsive', slug: 'responsive'},
        {name: 'Charset', slug: 'charset'},
        {name: 'Forms', slug: 'forms'},
        {name: 'Symantics', slug: 'symantics'},
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
