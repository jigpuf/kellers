import React from 'react';

class Text extends React.Component {
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
      {name: 'Heading', slug: 'heading'},
      {name: 'Paragraph', slug: 'paragraph'},
      {name: 'List', slug: 'list'},
      {name: 'Table', slug: 'table'},
      {name: 'Break', slug: 'break'},
      {name: 'Italic', slug: 'italic'},
      {name: 'Bold', slug: 'bold'},
      {name: 'Emphasize', slug: 'emphasize'},
      {name: 'Mark', slug: 'mark'},
      {name: 'Small', slug: 'small'},
      {name: 'Deleted', slug: 'deleted'},
      {name: 'Inserted', slug: 'inserted'},
      {name: 'Subscript', slug: 'subscript'},
      {name: 'Superscript', slug: 'superscript'},
      {name: 'Strong', slug: 'strong'},
      {name: 'Quote', slug: 'quote'},
      {name: 'BlockQuote', slug: 'blockquote'},
      {name: 'Abreviation', slug: 'abreviation'},
      {name: 'Address', slug: 'address'},
      {name: 'Cite', slug: 'cite'},
      {name: 'Bi-directional Overide', slug: 'bdo'},
      {name: 'Symbols', slug: 'symbols'},
      {name: 'Caption', slug: 'caption'},
      {name: 'DD', slug: 'dd'},
      {name: 'Legend', slug: 'legend'},
      {name: 'Pre', slug: 'pre'},
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

export default Text;
