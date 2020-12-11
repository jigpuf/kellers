import React from 'react';
import TimeOff from './work/timeOff.js'
import Codes from './work/codes.js'
import Software from './work/software.js'
import Avionics from './work/avionics.js'
import WorkDone from './work/workDone.js'
import SuperProject from './work/superProject.js'
import ButtonMaker from './buttonMaker.js';


const Work = () =>{

    const items = [
      {name: 'TimeOff', slug: 'time', component:<TimeOff />},
      {name: 'Codes', slug: 'codes', component:<Codes />},
      {name: 'Software', slug: 'computer', component:<Software />},
      {name: 'Avionics', slug: 'avionics', component:<Avionics />},
      {name: 'Work Done', slug: 'done', component:<WorkDone />},
      {name: 'Super Project', slug :'super', component:<SuperProject />,},
    ]

    return (
      <div>
        <ButtonMaker buttons={items}/>
      </div>
    )
    };
export default Work;
