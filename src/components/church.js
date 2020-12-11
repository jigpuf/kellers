import React from 'react'
import Cannon from './church/cannon.js'
import History from './church/history.js'
import Texts from './church/texts.js'
import Talks from './church/talks.js'
import Geneology from './church/geneology.js'
import Subject from './church/subject.js'
import Questions from './church/questions.js'
import ButtonMaker from './buttonMaker.js'

const Church = () => {
    const items = [
      {name: 'Cannon', slug: 'cannon', component:<Cannon />},
      {name: 'Church History', slug: 'church', component:<History/>},
      {name: 'Other Texts', slug: 'texts', component:<Texts />},
      {name: 'Favorite Talks', slug: 'talks', component:<Talks />},
      {name: 'Geneology', slug: 'geneology', component:<Geneology />},
      {name: 'Subjects', slug: 'subjects', component:<Subject />},
      {name: 'Questions', slug: 'questions', component:<Questions />},

    ]

    return (
      <div>
        <ButtonMaker buttons={items}/>
      </div>
    )
    }

export default Church;
