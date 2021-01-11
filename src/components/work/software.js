import React from 'react';
import NiMax from './software/nimax.js'
import Architect from './software/architect.js'
import Remote from './software/remote.js'
import ProgramLinks from './software/programLinks.js'
import SoftwareRequest from './software/softwareRequest.js'
import BridgeAnswers from './software/bridgeAnswers.js'
import Portal from './software/portal.js'
import ButtonMaker from '../buttonMaker.js';



const Software = () => {
    const items = [
      {name: 'NIMax', slug: 'nimax', component:<NiMax />},
      {name: 'Architect', slug: 'architect', component:<Architect />},
      {name:'Remote In', slug:'remote', component:<Remote />},
      {name:'program links', slug:'programLinks', component:<ProgramLinks />},
      {name:'Software Requests', slug:'request', component:<SoftwareRequest />},
      {name:'Bridge Answers', slug:'bridge', component:<BridgeAnswers />},
      {name:'Part Portal', slug:'portal', component:<Portal />},
    ]
    return (
      <div>
        <ButtonMaker buttons={items}/>
      </div>
    )
    };
  export default Software;
