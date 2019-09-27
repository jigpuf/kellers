import React from 'react';
import Intro from './books/intro.js'
import Nephi1 from './books/nephi1.js';
import Nephi2 from './books/nephi2.js';
import Jacob from './books/jacob.js';
import Enos from './books/enos.js';
import Jarom from './books/jarom.js';
import Omni from './books/omni.js';
import Wom from './books/wom.js';
import Mosiah from './books/mosiah.js';
import Alma from './books/alma.js';
import Helaman from './books/helaman.js';
import Nephi3 from './books/nephi3.js';
import Nephi4 from './books/nephi4.js';
import Mormon from './books/mormon.js';
import Ether from './books/ether.js';
import Moroni from './books/moroni.js';


class Books extends React.Component {
  state= {
  tier2: undefined,
}
pickTier2 = (item) => {
  return () => {
    this.setState({tier2:item})
  }
}
  render () {
    const Items = [
          {name: 'Intro/Prologue', slug: 'intro', component: <Intro />},
          {name: '1 Nephi', slug: 'nephi1', component: <Nephi1 />},
          {name: '2 Nephi', slug: 'nephi2', component: <Nephi2 />},
          {name: 'Jacob', slug: 'jacob', component: <Jacob />},
          {name: 'Enos', slug: 'enos', component: <Enos />},
          {name: 'Jarom', slug: 'jarom', component: <Jarom />},
          {name: 'Omni', slug: 'omni', component: <Omni />},
          {name: 'Words of Mormon', slug: 'wom', component: <Wom />},
          {name: 'Mosiah', slug: 'mosiah', component: <Mosiah />},
          {name: 'Alma', slug: 'alma', component: <Alma />},
          {name: 'Helaman', slug: 'helaman', component: <Helaman />},
          {name: '3 Nephi', slug: 'nephi3', component: <Nephi3 />},
          {name: '4 Nephi', slug: 'nephi4', component: <Nephi4 />},
          {name: 'Mormon', slug: 'mormon', component: <Mormon />},
          {name: 'Ether', slug: 'ether', component: <Ether />},
          {name: 'Moroni', slug: 'moroni', component: <Moroni />},
        ]
        const renderItems = Items.map(item => {
          return (
            <button
              key={item.slug}
              onClick={this.pickTier2(item.slug)}
              className={this.state.tier2 === item.slug ? "tier2 active" : "tier2"}
              >{item.name}</button>
          )
        })
        const tier2 = Items.filter(item => {
          return this.state.tier2 === item.slug;
        });
        const renderTier3Component = tier2[0] && tier2[0].component;
    return (
      <div>
        <ul>
        {renderItems}
        <hr />
        {renderTier3Component}
        </ul>
      </div>
    );
  }
}

export default Books;
