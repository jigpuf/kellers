import React from 'react';

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
        {name: 'Headings', slug: 'headings'},
        {name: 'Paragraphs', slug: 'paragraphs'},
        {name: 'Formatting', slug: 'formatting'},
        {name: 'Quotations', slug: 'quotations'},
        {name: 'Components', slug: 'components'},
        {name: 'Links', slug: 'links'},
        {name: 'Images', slug: 'images'},
        {name: 'Tables', slug: 'tables'},
        {name: 'Lists', slug: 'lists'},
        {name: 'Blocks', slug: 'blocks'},
        {name: 'Classes', slug: 'classes'},
        {name: 'Id', slug: 'id'},
        {name: 'Iframes', slug: 'iframes'},
        {name: 'File Paths', slug: 'files'},
        {name: 'Head', slug: 'head'},
        {name: 'Layouts', slug: 'layouts'},
        {name: 'Responsive', slug: 'responsive'},
        {name: 'Computercode', slug: ''},
        {name: 'Symbols', slug: 'symbols'},
        {name: 'Charset', slug: 'charset'},
        {name: 'Forms', slug: 'forms'},
        {name: 'Symantics', slug: 'symantics'},
        {name: 'Canvas', slug: 'canvas'},
        {name: 'Svg', slug: 'svg'},
        {name: 'Media', slug: ''},
        {name: 'Video', slug: ''},
        {name: 'Audio', slug: ''},
        {name: 'Plugins', slug: ''},
        {name: 'Youtube', slug: ''},
        {name: 'Drag/Drop', slug: ''},
        {name: 'Web Storage', slug: ''},
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
