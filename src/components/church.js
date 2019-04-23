import React from 'react';
import Pogp from './church/pogp.js';

class Church extends React.Component {
  state = {
    tier1: undefined,
  }
  pickTier1 = (item) => {
    return () => {
      this.setState({tier1:item})
    }
  }

  render () {
/*    const bomItems = [
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
    const dcItems = [
      {name: 'Escatology', slug: 'escatology'},
      {name: 'Government', slug: 'government'},
      {name: 'Scripture Commentary', slug: 'scripCom'},
      {name: 'Church Government', slug: 'churchGov'},
    ]
    const pogpItems = [
      {name: 'Moses', slug: 'moses'},
      {name: 'Abraham', slug: 'abraham'},
      {name: 'JST-Mathew', slug: 'jstm'},
      {name: 'JS-History', slug: 'jsth'},
      {name: 'JST Stuff', slug: 'jst'},
      {name: 'Fascimiles', slug: 'fascimiles'},
      {name: 'POGP Lectures', slug: 'pogp', component:<Pogp />},
    ]
    const otItems = [
      {name: 'Story', slug: 'story'},
      {name: 'Temple', slug: 'Temple'},
      {name: 'Wisdom', slug: 'wisdom'},
      {name: 'Symbolism', slug: 'symbolism'},
    ]
    const symbolismItems = [
      {name: 'Shapes & Numbers', slug: 'shapes'},
      {name: 'Colors', slug: 'colors'},
      {name: 'Astronomy', slug: 'astronomy'},
      {name: 'Items', slug: 'items'},
    ]
    const textsItems = [
      {name: 'Pseudopigraphy', slug: 'pseudo'},
      {name: 'Church History', slug: 'churchHistory'},
      {name: 'Journals', slug: 'journals'},
      {name: 'Doctrinal Writings', slug: 'docWrite'},
      {name: 'Church Fathers', slug: 'churchFathers'},
    ]
    const prophecyItems = [
      {name: 'Scriptural', slug: 'scriptural'},
      {name: 'General Authority', slug: 'genAuthority'},
      {name: 'Second Hand', slug: 'secondHand'},
      {name: 'Outide of Church', slug: 'outside'},
    ]
    const subjectsItems = [
      {name: 'Priesthood', slug: 'priesthood'},
      {name: 'Faith', slug: 'faith'},
      {name: 'Repentance', slug: 'repentance'},
      {name: 'Ordinances', slug: 'ordinances'},
      {name: 'Temple', slug: 'temple'},
      {name: 'Sermons', slug: 'sermons'},
      {name: 'Pre-mortal Existance', slug: 'pre-mortal'},
      {name: 'Escotology', slug: 'escotology'},
      {name: 'Atonement', slug: 'atonement'},
      {name: 'Creation and Fall', slug: 'creation'},
      {name: 'Visions', slug: 'visions'},
    ]*/
    const churchItems = [
      {name: 'BOM', slug: 'bom'},
      {name: 'D&C', slug: 'dc'},
      {name: 'POGP', slug: 'pogp', component:<Pogp />},
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
    const tier1 = churchItems.filter(item => {
      return this.state.tier1 === item.slug;
    });
        const renderTier2Component = tier1[0] && tier1[0].component;
    return (
      <div>
      <ul>
        {renderChurchItems}
        <hr />
        {renderTier2Component}
      </ul>
      </div>

    )
  }
}

export default Church;
