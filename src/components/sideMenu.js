import React from 'react';


class SideMenu extends React.Component {
  render () {
    const sideMenuItems = [
      { name: 'Menu', slug: 'menu' },
      { name: 'Health', slug: 'health' },
      { name: 'Games', slug: 'games' },
      { name: 'Videos', slug: 'videos' },
      { name: 'Stories', slug: 'stories' },
      { name: 'Church', slug: 'church' },
      { name: 'Links', slug: 'links' },
      { name: 'Media Lists', slug: 'mediaLists' },
      { name: 'Math', slug: 'math' },
      { name: 'Tools', slug: 'tools' },
      { name: 'Astronomy', slug: 'astronomy' },
      { name: 'Quotes', slug: 'quotes' },
      { name: 'Instrumentation', slug: 'instrumentation' },
      { name: 'Money', slug: 'money' },
      { name: 'Spanish', slug: 'spanish' },
      { name: 'Guitar', slug: 'guitar' },

    ];
//Build  array.  slug is an attribute of each item. Name is what shows.
    const renderSideMenuItems = sideMenuItems.map(item => {
      return (
        <li key={item.slug}>
          <button
            className={this.props.activeTab === item.slug ? 'active' : ''} //ternary
            onClick={this.props.openTab(item.slug)}
          >{item.name}
          </button>
        </li>
      )
    })
/*
create a const by going through the array.  Each item fills a list of buttons
The li key is taken from the item.slug.Map function is part of arrays.  Where it
says (item=>) item is a name made up for this purpose.  ternary class name says
className is equal to 'active' or '' depending on if the state is = to item slug.
The onClick attribute created changes the state to the item name.Button name is
chosen by item.name,
*/
    return (
      <aside className="sideMenu">
        <ul>
          {renderSideMenuItems}
        </ul>
      </aside>
    );
  }
}

export default SideMenu;
