import React from 'react';
import Trust from './leadership/trust.js';
import Conflict from './leadership/conflict.js';
import Morale from './leadership/morale.js';
import Enpower from './leadership/enpower.js';

class Leadership extends React.Component {
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
      {name: 'Trust', slug: 'trust', component:<Trust />},
      {name: 'Conflict Resolution', slug: 'conflict', component:<Conflict />},
      {name: 'Morale', slug: 'morale', component:<Morale />},
      {name: 'Enpowerment', slug: 'enpowerment', component:<Enpower /> },
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
          <br />
          <a href='https://www.youtube.com/watch?v=WyIS8vhnPPE' target='_blank'
          >The Myth and Reality of Leaders and How to become and Recognize an effective leader Jordan Peterso</a><br />
          <a href='https://www.youtube.com/watch?v=t9PoN72kO7s' target='_blank'
          >Speach and vision are leader qualities, Jordan Peterson</a><br />
          <a href='https://www.youtube.com/watch?v=XWVwFVgA4b4&t=63s' target='_blank'
          >Jordan Peterson’s guide to leadership</a><br />
          <a href='https://www.youtube.com/watch?v=CFmZA9C6YzA' target='_blank'
          >Leadership - Jordan Peterson</a><br />
          <a href='https://www.youtube.com/watch?v=WgJ1n9DF1WE&t=48s' target='_blank'
          >Jordan Peterson - Developing Your Inner Psychopath</a><br />
          <a href='' target='_blank'
          ></a><br />
        </ul>
        <hr />

        {renderTier2Component}
      </div>
    )
    }
  }
export default Leadership;
