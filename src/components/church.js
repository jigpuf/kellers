import React from 'react';

class Church extends React.Component {
  state = {
    tier1: undefined,
    tier2: undefined,
  }
  pickTier1 = (item) => {
    return () => {
      this.setState({tier1:item})
    }
  }
  pickTier2 = (item) => {
    return() => {
      this.setState({tier2:item})
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
    ]
    const churchItems = [
      {name: 'BOM', slug: 'bom', tier2: bomItems},
      {name: 'D&C', slug: 'dc'},
      {name: 'POGP', slug: 'pogp'},
      {name: 'OT', slug: 'ot'},
      {name: 'NT', slug: 'nt'},
      {name: 'Symbolism', slug: 'symbolism'},
      {name: 'Texts', slug: 'texts'},
      {name: 'Prophecy', slug: 'prophecy'},
      {name: 'Subjects', slug: 'subjects'},
    ]
    const renderChurchItems = churchItems.map(item => {
      return (
        <button
          key={item.slug}
          onClick={this.pickTier1(item.slug)}
          className={this.state.tier1 === item.slug ? "tier1 active" : "tier1"}
          >{item.name}</button>
      )
    })
    const activeTier1Item = this.state.tier1 && churchItems.filter(item => {
      return this.state.tier1 === item.slug;
    })
    const tier2 = activeTier1Item && (activeTier1Item[0].tier2 || []);
    const renderTier2 = tier2 && tier2.map(item => {
      return (
        <button
          key={item.slug}
          onClick={this.pickTier2(item.slug)}
          className={this.state.tier2 === item.slug ? "tier2 active" : "tier2"}
          >{item.name}</button>
      )
    })
    return (
      <ul>
        {renderChurchItems}
        <hr />
        {renderTier2}
      </ul>
    )
  }
}

export default Church;
