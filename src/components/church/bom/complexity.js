import React from 'react';

class Complexity extends React.Component {
  state= {
  tier2: undefined,
}
pickTier2 = (item) => {
  return () => {
    this.setState({tier2:item})
  }
}
  render () {
    const Items = [
        {name: 'Locations', slug: 'locations'},
        {name: 'Names', slug: 'names'},
        {name: 'Characters', slug: 'characters'},
        {name: 'Warfare', slug: 'warfare'},
        {name: 'Timelines', slug: 'timelines'},
        {name: 'Provenance', slug: 'provenance'},
        {name: 'Theology', slug: 'theology'},
        {name: '1st vs 3rd person', slug: 'perspective'},
        {name: 'Writing Styles', slug: 'styles'},
        {name: 'Religious traditions', slug: 'traditions'},
        {name: 'Law of Moses', slug: 'lom'},
        {name: 'Translation Process', slug: 'translation'},
        {name: 'Culture', slug: 'culture'},
        {name: 'Money System', slug: 'money'},
        {name: 'Government Systems', slug: 'government'},
        {name: 'OT Quotation', slug: 'quotes'},
      ]
      const renderItems = Items.map(item => {
        return (
          <button
            key={item.slug}
            onClick={this.pickTier2(item.slug)}
            className={this.state.tier2 === item.slug ? "tier2 active" : "tier2"}
            >{item.name}</button>
        )
      })
      const tier2 = Items.filter(item => {
        return this.state.tier2 === item.slug;
      });
      const renderTier3Component = tier2[0] && tier2[0].component;
      return (
        <div>
          <ul>
          {renderItems}
          <hr />
          {renderTier3Component}
          </ul>
        </div>
      );
    }
  }
export default Complexity;
