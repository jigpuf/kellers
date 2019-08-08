import React from 'react';
import Hardened from './defense/hardened.js'

class Defense extends React.Component {
  state = {
    tier2: undefined,
  }
  pickTier2 = (item) => {
    return() => {
      this.setState({tier2:item})
    }
  }
  render () {
    const Items = [
      {name:'Hand Combat', slug:'hand',},
      {name:'Firearms', slug:'firearms',},
      {name:'Traps', slug:'traps',},
      {name:'Hardened Home', slug:'hardened', component:<Hardened />},
      {name:'Tactics', slug:'tactics',},
      {name:'Camo', slug:'camo',},
      {name:'Perimeters', slug:'perimeters',},
    ]
    const renderItems = Items.map(item => {
      return (
            <button
              key={item.slug}
              onClick={this.pickTier2(item.slug)}
              className={this.state.tier2 === item.slug ? "tier2 active" : "tier2"}
            >{item.name}</button>
          )
        });
        const tier2 = Items.filter(item => {
          return this.state.tier2 === item.slug;
        });
        const renderTier3Component = tier2[0] && tier2[0].component;
        return (
          <div>
            <ul>
              {renderItems}
            </ul>
            <hr />
            {renderTier3Component}
          </div>
        );
      }
    }



export default Defense;

//<li><a href='https://www.youtube.com/watch?v=aGrcmEEEevw'
//>How to dodge punches</a></li>
