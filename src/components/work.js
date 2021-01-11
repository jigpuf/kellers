import React from 'react';
import Software from './work/software.js'
import SuperProject from './work/superProject.js'
import ButtonMaker from './buttonMaker.js';


const Work = () =>{

    const items = [
      {name: 'Software', slug: 'computer', component:<Software />},
      {name: 'Super Project', slug :'super', component:<SuperProject />,},
    ]

    return (
      <div>
        <ButtonMaker buttons={items}/>
      </div>
    )
    };
export default Work;
