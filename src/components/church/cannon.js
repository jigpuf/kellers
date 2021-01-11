import React from 'react';
import Bom from './cannon/bom.js'
import Dc from './cannon/dc.js'
import Pogp from './cannon/pogp.js'
import Ot from './cannon/ot.js'
import Nt from './cannon/nt.js'
import ScriptureQuotes from './cannon/scriptureQuotes.js'
import Redux from './cannon/redux.js'

class Cannon extends React.Component {
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
      {name: 'BOM', slug: 'bom', component:<Bom />},
      {name: 'D&C', slug: 'dc', component:<Dc />},
      {name: 'POGP', slug: 'pogp', component:<Pogp />},
      {name: 'OT', slug: 'ot', component:<Ot />},
      {name: 'NT', slug: 'nt', component:<Nt />},
      {name: 'Favorite Scriptures', slug: 'scriptures', component:<ScriptureQuotes />},
      {name: 'Redux Scripture', slug: 'bible', component:<Redux />},
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
          <a href="church/scriptures.pdf" onclick="window.open('MyPDF.pdf', '_blank', 'fullscreen=yes'); return false;" >Scriptures</a>
        <hr />
        {renderTier2Component}

      </div>
    )
    }
  }

export default Cannon;
