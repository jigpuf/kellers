import React from 'react';

class BOM extends React.Component {
  state = {
    tier2: undefined,
  }
  pickTier2 = (item) => {
    return () => {
      this.setState({tier1:item})
    }
  }
  render () {
    const bomItems = [
          {name: '1 Nephi', slug: 'nephi1'},
          {name: '2 Nephi', slug: 'nephi2'},
          {name: 'Jacob', slug: 'jacob'},
          {name: 'Enos', slug: 'enos'},
          {name: 'Jarom', slug: 'jarom'},
          {name: 'Omni', slug: 'omni'},
          {name: 'Words of Mormon', slug: 'wom'},
          {name: 'Mosiah', slug: 'mosiah'},
          {name: 'Alma', slug: 'alma'},
          {name: 'Helaman', slug: 'helaman'},
          {name: '3 Nephi', slug: 'nephi3'},
          {name: '4 Nephi', slug: 'nephi4'},
          {name: 'Mormon', slug: 'mormon'},
          {name: 'Ether', slug: 'ether'},
          {name: 'Moroni', slug: 'moroni'},
          {name: 'Book of Mormon Whole', slug: 'bom'},
          {name: 'Lectures', slug: 'lectures'},
        ]
        const renderBomItems = bomItems.map(item => {
          return (
            <button
              key={item.slug}
              onClick={this.pickTier2(item.slug)}
              className={this.state.tier1 === item.slug ? "tier2 active" : "tier2"}
              >{item.name}</button>
          )
        })
        const tier2 = bomItems.filter(item => {
          return this.state.tier2 === item.slug;
        });
        const renderTier2Component = tier2[0] && tier2[0].component;
    return (
      <div>
        <ul>
        {renderBomItems}
        <hr />
        {renderTier2Component}
        </ul>
      </div>
    );
  }
}

export default BOM;
