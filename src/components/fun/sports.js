import React from 'react';

class Sports extends React.Component {
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
      {name: 'Paintball', slug: 'paintball',},
      {name: 'Hiking', slug: 'hiking',},
      {name: 'Biking', slug: 'biking',},
      {name: 'Camping', slug: 'camping',},
      {name: 'Swimming', slug: 'swimming',},
      {name: 'Kayaking', slug: 'kayaking',},
      {name: 'Boating', slug: 'boating',},
      {name: 'Crochet', slug: 'crochet',},
      {name: 'Ultimate Frisbee', slug: 'frisbee',},
      {name: 'Parking Lot Socker', slug: 'plsoccer',},
      {name: 'Soccer', slug: 'soccer',},
      {name: 'Disc Golf', slug: 'disc',},
      {name: 'Work Out', slug: 'lift',},
      {name: 'Two Square', slug: 'square',},
      {name: 'Jogging', slug: 'jogging',},
      {name: 'Tennis', slug: 'tennis',},
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

export default Sports;
