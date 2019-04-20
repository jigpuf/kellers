import React from 'react';
import Pogp from './church/pogp.js';

class Church extends React.Component {
  state = {
    tier1: undefined,
    tier2: undefined,
  }
  pickTier1 = (item) => {
    return () => {
      this.setState({tier1:item})
    }
  }
  pickTier2 = (item) => {
    return() => {
      this.setState({tier2:item})
    }
  }
  pickTier3 = (item) => {
    return () => {
      this.setState({tier3:item})
    }
  }

  render () {
    const bomItems = [
      {name: '1 Nephi', slug: 'nephi1'},
      {name: '2 Nephi', slug: 'nephi2'},
      {name: 'Jacob', slug: 'jacob'},
      {name: 'Enos', slug: 'enos'},
      {name: 'Jarom', slug: 'jarom'},
      {name: 'Omni', slug: 'omni'},
      {name: 'Words of Mormon', slug: 'wom'},
      {name: 'Mosiah', slug: 'mosiah'},
      {name: 'Alma', slug: 'alma'},
      {name: 'Helaman', slug: 'helaman'},
      {name: '3 Nephi', slug: 'nephi3'},
      {name: '4 Nephi', slug: 'nephi4'},
      {name: 'Mormon', slug: 'mormon'},
      {name: 'Ether', slug: 'ether'},
      {name: 'Moroni', slug: 'moroni'},
    ]
    const dcItems = [
      {name: 'Escatology', slug: 'escatology'},
      {name: 'Government', slug: 'government'},
      {name: 'Scripture Commentary', slug: 'scripCom'},
      {name: 'Church Government', slug: 'churchGov'},
    ]
    const pogpItems = [
      {name: 'Moses', slug: 'moses'},
      {name: 'Abraham', slug: 'abraham'},
      {name: 'JST-Mathew', slug: 'jstm'},
      {name: 'JS-History', slug: 'jsth'},
      {name: 'JST Stuff', slug: 'jst'},
      {name: 'Fascimiles', slug: 'fascimiles'},
      {name: 'POGP Lectures', slug: 'pogp', component:<Pogp />}
    ]
    const otItems = [
      {name: 'Story', slug: 'story'},
      {name: 'Temple', slug: 'Temple'},
      {name: 'Wisdom', slug: 'wisdom'},
      {name: 'Symbolism', slug: 'symbolism'},
    ]
    const symbolismItems = [
      {name: 'Shapes & Numbers', slug: 'shapes'},
      {name: 'Colors', slug: 'colors'},
      {name: 'Astronomy', slug: 'astronomy'},
      {name: 'Items', slug: 'items'},
    ]
    const textsItems = [
      {name: 'Pseudopigraphy', slug: 'pseudo'},
      {name: 'Church History', slug: 'churchHistory'},
      {name: 'Journals', slug: 'journals'},
      {name: 'Doctrinal Writings', slug: 'docWrite'},
      {name: 'Church Fathers', slug: 'churchFathers'},
    ]
    const prophecyItems = [
      {name: 'Scriptural', slug: 'scriptural'},
      {name: 'General Authority', slug: 'genAuthority'},
      {name: 'Second Hand', slug: 'secondHand'},
      {name: 'Outide of Church', slug: 'outside'},
    ]
    const subjectsItems = [
      {name: 'Priesthood', slug: 'priesthood'},
      {name: 'Faith', slug: 'faith'},
      {name: 'Repentance', slug: 'repentance'},
      {name: 'Ordinances', slug: 'ordinances'},
      {name: 'Temple', slug: 'temple'},
      {name: 'Sermons', slug: 'sermons'},
      {name: 'Pre-mortal Existance', slug: 'pre-mortal'},
      {name: 'Escotology', slug: 'escotology'},
      {name: 'Atonement', slug: 'atonement'},
      {name: 'Creation and Fall', slug: 'creation'},
      {name: 'Visions', slug: 'visions'},
    ]
    const churchItems = [
      {name: 'BOM', slug: 'bom', tier2: bomItems},
      {name: 'D&C', slug: 'dc', tier2: dcItems},
      {name: 'POGP', slug: 'pogp', tier2: pogpItems},
      {name: 'OT', slug: 'ot',tier2: otItems},
      {name: 'NT', slug: 'nt'},
      {name: 'Symbolism', slug: 'symbolism', tier2: symbolismItems},
      {name: 'Texts', slug: 'texts', tier2: textsItems},
      {name: 'Prophecy', slug: 'prophecy', tier2: prophecyItems},
      {name: 'Subjects', slug: 'subjects', tier2: subjectsItems},
    ]
    const renderChurchItems = churchItems.map(item => {
      return (
        <button
          key={item.slug}
          onClick={this.pickTier1(item.slug)}
          className={this.state.tier1 === item.slug ? "tier1 active" : "tier1"}
          >{item.name}</button>
      )
    })
    const activeTier1Item = this.state.tier1 && churchItems.filter(item => {
      return this.state.tier1 === item.slug;
    })
    const tier2 = activeTier1Item && (activeTier1Item[0].tier2 || []);
    const renderTier2 = tier2 && tier2.map(item => {
      return (
        <button
          key={item.slug}
          onClick={this.pickTier2(item.slug)}
          className={this.state.tier2 === item.slug ? "tier2 active" : "tier2"}
          >{item.name}</button>
      )
    })
    return (
      <div>
      <ul>
        {renderChurchItems}
        <hr />
        {renderTier2}
      </ul>
      <div>
        <h2>Pearl of Great Price</h2>
        <h3>POGP Lectures Hugh Nibley</h3>
        <ol>
        <a href="https://www.youtube.com/watch?v=ehBxXyk-Ots&list=PLOrN0FV73AsIeKPG48pi390UWWdOVyIgi"
        >1: Restoring What was Lost</a><br />
        <a href="https://www.youtube.com/watch?v=nCHjtbzma3Y&list=PLOrN0FV73AsIeKPG48pi390UWWdOVyIgi&index=2"
        >2: Allegory and Rhetoric</a><br />
        <a href="https://www.youtube.com/watch?v=6gtqvGxjA8s&list=PLOrN0FV73AsIeKPG48pi390UWWdOVyIgi&index=3"
        >3: Literalism</a><br />
        <a href="https://www.youtube.com/watch?v=SHwTUuSutuc&list=PLOrN0FV73AsIeKPG48pi390UWWdOVyIgi&index=4"
        >4: Pre-existance</a><br />
        <a href="https://www.youtube.com/watch?v=m9pDUf40Mn4&list=PLOrN0FV73AsIeKPG48pi390UWWdOVyIgi&index=5"
        >5: Cosmology</a><br />
        <a href="https://www.youtube.com/watch?v=GWjQ1nbA2hU&list=PLOrN0FV73AsIeKPG48pi390UWWdOVyIgi&index=6"
        >6: The Creation</a><br />
        <a href="https://www.youtube.com/watch?v=hC4Ll1wZfhw&list=PLOrN0FV73AsIeKPG48pi390UWWdOVyIgi&index=7"
        >7: The Council</a><br />
        <a href="https://www.youtube.com/watch?v=DHRlrDmdSb8&list=PLOrN0FV73AsIeKPG48pi390UWWdOVyIgi&index=8"
        >8: Shabako Stone</a><br />
        <a href="https://www.youtube.com/watch?v=jjGpNh-o0MA&list=PLOrN0FV73AsIeKPG48pi390UWWdOVyIgi&index=9"
        >9: Shabako Stone 2</a><br />
        <a href="https://www.youtube.com/watch?v=kq1JnCguSOo&list=PLOrN0FV73AsIeKPG48pi390UWWdOVyIgi&index=10"
        >10: Babylon Creation Myth</a><br />
        <a href="https://www.youtube.com/watch?v=lKa1rpMNimo&list=PLOrN0FV73AsIeKPG48pi390UWWdOVyIgi&index=11"
        >11: The Human Condition</a><br />
        <a href="https://www.youtube.com/watch?v=1zh657BvmwI&list=PLOrN0FV73AsIeKPG48pi390UWWdOVyIgi&index=12"
        >12: The Plurality of Worlds</a><br />
        <a href="https://www.youtube.com/watch?v=Tp2_SDzaGYk&list=PLOrN0FV73AsIeKPG48pi390UWWdOVyIgi&index=13"
        >13: POGP on Plurality of Worlds</a><br />
        <a href="https://www.youtube.com/watch?v=uxclcCUrbho&list=PLOrN0FV73AsIeKPG48pi390UWWdOVyIgi&index=14"
        >14: Treasures in Heaven</a><br />
        <a href="https://www.youtube.com/watch?v=-6LNjzxeJyo&list=PLOrN0FV73AsIeKPG48pi390UWWdOVyIgi&index=15"
        >15: The Geological Problem</a><br />
        <a href="https://www.youtube.com/watch?v=yknT4-u9DTc&list=PLOrN0FV73AsIeKPG48pi390UWWdOVyIgi&index=16"
        >16: The Mountain of the Lord's House</a><br />
        <a href="https://www.youtube.com/watch?v=hOYk_7Vk80E&list=PLOrN0FV73AsIeKPG48pi390UWWdOVyIgi&index=17"
        >17: The Heavenly Prologue</a><br />
        <a href="https://www.youtube.com/watch?v=INhvmHxkBPY&list=PLOrN0FV73AsIeKPG48pi390UWWdOVyIgi&index=18"
        >18: The Combat</a><br />
        <a href="https://www.youtube.com/watch?v=3XpdC4nJ-o0&list=PLOrN0FV73AsIeKPG48pi390UWWdOVyIgi&index=19"
        >19: Adam and Eve</a><br />
        <a href="https://www.youtube.com/watch?v=WCVAOqbf3p4&list=PLOrN0FV73AsIeKPG48pi390UWWdOVyIgi&index=20"
        >20: The Heritage of Cain</a><br />
        <a href="https://www.youtube.com/watch?v=CkB6fPxsXSc&list=PLOrN0FV73AsIeKPG48pi390UWWdOVyIgi&index=21"
        >21: Eve/Book of Enoch</a><br />
        <a href="https://www.youtube.com/watch?v=aWqjq9Fpt18&list=PLOrN0FV73AsIeKPG48pi390UWWdOVyIgi&index=22"
        >22: Enoch</a><br />
        <a href="https://www.youtube.com/watch?v=6WgQdl164NM&list=PLOrN0FV73AsIeKPG48pi390UWWdOVyIgi&index=23"
        >23: Abraham</a><br />

        </ol>
        <h3>POGP RoundTable BYU</h3>
        <ol>
        <a href="https://www.youtube.com/watch?v=7K5vRvjp934&list=PLc5yYrpPFm2vtYmqQ6kjpdJQ_4DGEgr7N&index=2&t=0s"
        >1: Introduction</a><br />
        <a href="https://www.youtube.com/watch?v=oNMC_18AYU8&list=PLc5yYrpPFm2vtYmqQ6kjpdJQ_4DGEgr7N&index=2"
        >2: The Fascimiles</a><br />
        <a href="https://www.youtube.com/watch?v=x8kxuLttglk&list=PLc5yYrpPFm2vtYmqQ6kjpdJQ_4DGEgr7N&index=3"
        >3: Pe-Mortal Life</a><br />
        <a href="https://www.youtube.com/watch?v=9qt8eNcBlig&list=PLc5yYrpPFm2vtYmqQ6kjpdJQ_4DGEgr7N&index=4"
        >4: Atonement and Rebirth</a><br />
        <a href="https://www.youtube.com/watch?v=_JK5gcn8az4&list=PLc5yYrpPFm2vtYmqQ6kjpdJQ_4DGEgr7N&index=5"
        >5: Obedience and Sacrifice</a><br />
        <a href="https://www.youtube.com/watch?v=vtJX1vUQFLM&list=PLc5yYrpPFm2vtYmqQ6kjpdJQ_4DGEgr7N&index=6"
        >6: The Ministry of Enoch</a><br />
        <a href="https://www.youtube.com/watch?v=GMMkykkkiAY&list=PLc5yYrpPFm2vtYmqQ6kjpdJQ_4DGEgr7N&index=7"
        >7: The Abrahamic Covenant</a><br />
        <a href="https://www.youtube.com/watch?v=qwmLQNXR0Aw&list=PLc5yYrpPFm2vtYmqQ6kjpdJQ_4DGEgr7N&index=8"
        >8: The First Vision</a><br />
        <a href="https://www.youtube.com/watch?v=bBiaX2nHZjw&list=PLc5yYrpPFm2vtYmqQ6kjpdJQ_4DGEgr7N&index=9"
        >9: The Calling of Prophets</a><br />
        <a href="https://www.youtube.com/watch?v=d8wZiOcz-rw&list=PLc5yYrpPFm2vtYmqQ6kjpdJQ_4DGEgr7N&index=10"
        >10: Signs of the Times</a><br />
        <a href="https://www.youtube.com/watch?v=QFanGfPiGJs&list=PLc5yYrpPFm2vtYmqQ6kjpdJQ_4DGEgr7N&index=11"
        >11: The articles of Faith</a><br />
        </ol>
        <h3>POGP Lectures Hyrum Andrus</h3>
        <ol>
        <a href="https://www.youtube.com/watch?v=kq3M_CY2NHo&list=PLlC7AHN3uipNRSifCzY_R60nqX_p5VZ6n"
        >1: Idea of the Temple</a><br />
        <a href="https://www.youtube.com/watch?v=iHDx7Lm13vA&list=PLlC7AHN3uipNRSifCzY_R60nqX_p5VZ6n&index=2"
        >2: Knowing God through the Pearl of Great Price</a><br />
        <a href="https://www.youtube.com/watch?v=2Gru2-ZF_Fc&list=PLlC7AHN3uipNRSifCzY_R60nqX_p5VZ6n&index=3"
        >3: Christ's Appearances to His Prophets</a><br />
        <a href="https://www.youtube.com/watch?v=rZlEFtmWG3A&list=PLlC7AHN3uipNRSifCzY_R60nqX_p5VZ6n&index=4"
        >4: The Creations of God</a><br />
        <a href="https://www.youtube.com/watch?v=7MgQNmZmOuU&list=PLlC7AHN3uipNRSifCzY_R60nqX_p5VZ6n&index=5"
        >5: The Fall of Adam</a><br />
        <a href="https://www.youtube.com/watch?v=SCMUDx-E9Ro&list=PLlC7AHN3uipNRSifCzY_R60nqX_p5VZ6n&index=6"
        >6: Christ's Atonement</a><br />
        <a href="https://www.youtube.com/watch?v=1gfv-CqIAas&list=PLlC7AHN3uipNRSifCzY_R60nqX_p5VZ6n&index=7"
        >7: The new birth</a><br />
        <a href="https://www.youtube.com/watch?v=mhDBIZcj3HU&list=PLlC7AHN3uipNRSifCzY_R60nqX_p5VZ6n&index=8"
        >8: Pre-Earh Life</a><br />
        <a href="https://www.youtube.com/watch?v=M5UdNcPF1so&list=PLlC7AHN3uipNRSifCzY_R60nqX_p5VZ6n&index=9"
        >9: The Zion of Enoch</a><br />
        <a href="https://www.youtube.com/watch?v=_d34qhUWb9M&list=PLlC7AHN3uipNRSifCzY_R60nqX_p5VZ6n&index=10"
        >10: Zion through the Ages</a><br />
        <a href="https://www.youtube.com/watch?v=QIEOStaItLo&list=PLlC7AHN3uipNRSifCzY_R60nqX_p5VZ6n&index=11"
        >11: Second Comming of Christ</a><br />
        </ol>
        <h3>Abraham</h3>
        <a href="https://www.youtube.com/watch?v=XVAEC1wJFqY"
        >Joseph Smith and ancient Egypt-John Gee</a><br />
        <a href="https://www.youtube.com/watch?v=Xuiqna_SzY4"
        >Puzzles from Joseph Smith Papyri-John Gee</a><br />
        <a href="https://www.youtube.com/watch?v=4ye3SqOkWXo"
        >Book of Abraham, I Presume-John Gee</a><br />
        <a href="https://www.youtube.com/watch?v=ZL-wgUAeunk"
        >The Book of Abraham and unnoticed Assumptions-Kerry Muelstien</a><br />
        <a href="https://www.youtube.com/watch?v=_jGadnfI8zU"
        >Most remarkable Book: The book of Abraham</a><br />
        <a href="https://www.youtube.com/watch?v=c2rGi6gltqw"
        >Book of Abraham in historical Context-John Gee</a><br />
        <a href="https://www.youtube.com/watch?v=F19d5ClZMWo"
        >Book of Abraham-Bruce Porter</a><br />
        <a href="https://www.youtube.com/watch?v=L2ha3tbfB-M"
        >Apocaplypse of Abraham reading</a><br />
        <a href="https://s3.us-east-2.amazonaws.com/jnlartaudio/halverson-v29-2018-pp227-246-AUDIO.mp3"
        >Isaiah 56, Abraham and the Temple-Taylor Halverson</a><br />
        <a href="https://s3.us-east-2.amazonaws.com/jnlartaudio/smoot-v28-2018-pp299-308-AUDIO.mp3"
        >Pressing Forward with the Book of Abraham-Stephen O. Smoot</a><br />
        <a href="https://s3.us-east-2.amazonaws.com/jnlartaudio/johnson-v25-2017-pp1-59-AUDIO.mp3"
        >Book of Abraham-Mark J. Johnson</a><br />
        <a href="https://s3.us-east-2.amazonaws.com/jnlartaudio/muhlestein-v22-2016-pp17-40-AUDIO.mp3"
        >Assessing the Papyri-Kerry Muelstein</a><br />
        <a href="https://s3.us-east-2.amazonaws.com/jnlartaudio/johnson-v3-2013-pg223-230-AUDIO.mp3"
        >One Day to A Cubit-Hollis Johnson</a><br />
        <a href=""
        ></a><br />
        <a href=""
        ></a><br />
        <a href=""
        ></a><br />
        <h3>Moses</h3>
        <a href="https://www.youtube.com/watch?v=3tw-lTqFTmg"
        >Apocalypse of Abraham as evidence of Moses</a><br />
        <a href="https://s3.us-east-2.amazonaws.com/jnlartaudio/halverson-v31-2019-pp245-258-AUDIO.mp3"
        >Was Adam a MonoTheist?-Taylor Halvarson</a><br />
        <a href="https://s3.us-east-2.amazonaws.com/jnlartaudio/bradshaw-v24-2017-pp123-316-AUDIO.mp3"
        >By the Blood Ye are Sanctified-Jeff Bradshaw, Michael Bowen</a><br />
        <a href="https://s3.us-east-2.amazonaws.com/jnlartaudio/zinner-v12-2014-pp281-323-AUDIO.mp3"
        >Zion and Jerusalem:Lady Wisdom and Tree of Life</a><br />
        <a href="https://s3.us-east-2.amazonaws.com/jnlartaudio/bradshaw-v4-2013-pg1-27-AUDIO.mp3"
        >Ancient affinities of the book of Enoch-Jeff Bradshaw,David Larson</a><br />
        <a href="https://s3.us-east-2.amazonaws.com/jnlartaudio/bradshaw-v4-2013-pg29-74-AUDIO.mp3"
        >Ancient affinities of the book of Enoch 2-Jeff Bradshaw,David Larson</a><br />
        <a href="https://s3.us-east-2.amazonaws.com/jnlartaudio/Bradshaw-v2-2012-pg41-71.mp3"
        >Forgotten Voices of Weeping in Moses-Jeff Bradshaw, Jacob Winneker</a><br />
        <a href="https://www.youtube.com/watch?v=VD22WeWF2ws"
        >Beauty and Truth in Moses 1-Jeff Bradshaw</a><br />
      </div>
      </div>
    )
  }
}

export default Church;
