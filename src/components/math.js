import React from 'react';
import Arithmetic from './math/arithmetic.js';
import Algebra from './math/algebra.js'
import Geometry from './math/geometry.js'
import Trigonometry from './math/trigonometry.js'
import Applied from './math/applied.js'
import Paradox from './math/paradox.js';
import ButtonMaker from './buttonMaker.js';

const Math = () =>{

  const items = [
    {name: 'Arithmetic', slug: 'arithmetic', component:<Arithmetic /> },
    {name: 'Algebra', slug: 'algebra', component:<Algebra />},
    {name: 'Geometry', slug: 'geometry', component:<Geometry /> },
    {name: 'Trigonometry', slug: 'trig', component:<Trigonometry /> },
    {name: 'Applied Math', slug: 'applied', component:<Applied /> },
    {name: 'Paradoxes', slug: 'paradoxes', component:<Paradox /> },
  ]

  return (
    <div>
      <ButtonMaker buttons={items}/>
    </div>
  )
  };

export default Math;
