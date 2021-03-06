import React from 'react';
import Apostles from '../mediaLists/mediaVideos/churchMedia/apostles.js';
import Educators from '../mediaLists/mediaVideos/churchMedia/educators.js';
import Presidents from '../mediaLists/mediaVideos/churchMedia/presidents.js'

class Talks extends React.Component {
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
      {name:'Presidents', slug:'presidents', component:<Presidents />},
      {name:'General Authorities', slug:'general', component:<Apostles />},
      {name:'Educators', slug:'educators', component:<Educators />},
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

export default Talks;
