import Bom from './church/bom.js';
import Dc from './church/dc.js';
import Nt from './church/nt.js';
import Ot from './church/ot.js';
import Pogp from './church/pogp.js';
import Prophecy from './church/prophecy.js';
import Subject from './church/subject.js';
import Symbolism from './church/symbolism.js';
import Texts from './church/texts.js';
import React from 'react';

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

    const Items = [
      {name: 'BOM', slug: 'bom', component:<Bom />},
      {name: 'D&C', slug: 'dc', component:<Dc />},
      {name: 'POGP', slug: 'pogp', component:<Pogp />},
      {name: 'OT', slug: 'ot', component:<Ot />},
      {name: 'NT', slug: 'nt', component:<Nt />},
      {name: 'Symbolism', slug: 'symbolism', component:<Symbolism />},
      {name: 'Texts', slug: 'texts', component:<Texts />},
      {name: 'Prophecy', slug: 'prophecy', component:<Prophecy />},
      {name: 'Subjects', slug: 'subjects', component:<Subject />},
      {name: 'Favorite Talks', slug: 'talks'},
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

export default Church;
