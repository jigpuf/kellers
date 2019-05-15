import React from 'react';



class Videos extends React.Component {
    state = {
      tier1: undefined,
    }
    pickTier1  = (item) => {
      return () => {
        this.setState({tier1:item})
      }
    }

  render () {
    const tier1Items = [
      {name: 'Music', slug: 'music' },
      {name: 'Funny', slug: 'funny' },
      {name: 'Programming', slug: 'programming' },
      {name: 'Church', slug: 'church' },
      {name: 'Mechanical', slug: 'mechanical' },
      {name: 'Electrical', slug: 'electrical' },
      {name: 'Survival', slug: 'survival' },
      {name: 'Math', slug: 'math' },
      {name: 'Language', slug: 'language' },

    ]
    const renderTier1Items = tier1Items.map(item => {
      return (
        <button
          key={item.slug}
          onClick={this.pickTier1(item.slug)}
          className={this.state.tier1 === item.slug ? "tier1 active" : "tier1"}
        >{item.name}</button>
      )
    })
    const tier1 = tier1Items.filter(item => {
      return this.state.tier1 === item.slug;
    });
    const renderTier2Component = tier1[0] && tier1[0].component;
    return (
      <div>
        <ul>
          {renderTier1Items}
        </ul>
        <hr />
        {renderTier2Component}
      </div>
    )
    }
  }

export default Videos;
