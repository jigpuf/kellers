import React from 'react';
import Nimax from './control/nimax.js'
import ButtonMaker from '../../buttonMaker.js';


class Control extends React.Component {

    const items = [
      {name: 'NIMAX', slug: 'nimax', component:<Nimax />},
    ]
    return (
      <div>
        <ButtonMaker buttons={items}/>
      </div>
    )
    };

export default Control;
