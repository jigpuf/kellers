import React from 'react';
import Lectures from './html/lectures.js'
import Display from './html/display.js'
import Text from './html/text.js';
import HtmlSetup from './html/htmlSetup.js';
import Media from './html/media.js'
import Layouts from './html/layouts.js'
import Atributes from './html/attributes.js'
import Forms from './html/forms.js'
import Storage from './html/storage.js'

class Html extends React.Component {
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
        {name: 'Setup', slug: 'setup', component:<HtmlSetup />},
        {name: 'Layouts', slug: 'layouts', component:<Layouts />},
        {name: 'Text', slug: 'text', component:<Text />},
        {name: 'Display', slug: 'display', component: <Display />},
        {name: 'Media', slug: 'media', component:<Media />},
        {name: 'Atributes', slug: 'atributes', component:<Atributes />},
        {name: 'Forms', slug: 'forms', component:<Forms />},
        {name: 'Web Storage', slug: 'storage', component:<Storage />},
        {name: 'Lectures', slug: 'lectures', component:<Lectures />},
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
export default Html;
