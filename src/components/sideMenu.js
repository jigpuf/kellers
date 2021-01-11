import React from 'react';


const SideMenu = (props) => {
    const sideMenuItems = [
      { name: 'Work', slug: 'work' },
      { name: 'Leadership', slug: 'leadership' },
      { name: 'Apps', slug: 'apps' },
      { name: 'Astronomy', slug: 'astronomy' },
      { name: 'Business', slug: 'business' },
      { name: 'Church', slug: 'church' },
      { name: 'Construction', slug: 'construction' },
      { name: 'Efficiency', slug: 'efficiency'},
      { name: 'Food', slug: 'food' },
      { name: 'Fun', slug: 'fun' },
      { name: 'Guitar', slug: 'guitar' },
      { name: 'Health', slug: 'health' },
      { name: 'Math', slug: 'math' },
      { name: 'Mechanics', slug: 'mechanics' },
      { name: 'Media', slug: 'mediaLists' },
      { name: 'Programming', slug: 'programming' },
      { name: 'Quotes', slug: 'quotes' },
      { name: 'Spanish', slug: 'spanish' },
      { name: 'Stories', slug: 'stories' },
      { name: 'Survival', slug: 'survival' },
      { name: 'Links', slug: 'links' },
    ];

    const renderSideMenuItems = sideMenuItems.map(item => {
      return (
        <li key={item.slug}>
          <button
            className={props.activeTab === item.slug ? 'active' : ''} //ternary
            onClick={props.openTab(item.slug)}
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

export default SideMenu;
