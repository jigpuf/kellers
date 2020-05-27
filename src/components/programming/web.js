import React from 'react';
import Html from './web/html.js'
import Css from './web/css.js'
import Js from './web/js.js'
import ReactJSX from './web/reactJSX.js'
import Mongo from './web/mongo.js'
import Node from './web/node.js'
import Webpage from './web/webpage.js'


class Web extends React.Component {
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
      {name: 'HTML', slug: 'html', component:<Html /> },
      {name: 'CSS', slug: 'css', component:<Css /> },
      {name: 'Javascript', slug: 'js', component:<Js /> },
      {name: 'React', slug: 'react', component:<ReactJSX /> },
      {name: 'MongoDB', slug: 'mongo', component:<Mongo /> },
      {name: 'Node.JS', slug: 'node', component:<Node /> },
      {name: 'New Webpage', slug: 'webpage', component:<Webpage /> },

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
        </ul>
        <hr />
        {renderTier2Component}
      </div>
    )
    }
  }


export default Web;
