import React from 'react'
import Valves from './instruments/valves.js'
import Heaters from './instruments/heaters.js'
import PositionFeedback from './instruments/positionFeedback.js'
import Motion from './instruments/motion.js'
import Strain from './instruments/strain.js'
import Igniter from './instruments/igniter.js'
import Hazards from './instruments/hazards.js'
import Gas from './instruments/gas.js'
import Flame from './instruments/flame.js'
import ClearPath from './instruments/clearPath.js'
import Prox from './instruments/prox.js'
import Flows from './instruments/flows.js'
import Mics from './instruments/mics.js'
import Pressure from './instruments/pressure.js'
import Temperature from './instruments/temperature.js'
import Avionics from './instruments/avionics.js'
import Aws from './instruments/aws.js'
import Coms from './instruments/coms.js'
import Video from './instruments/video.js'
import Tugger from './instruments/tugger.js'


class Instruments extends React.Component {
  state = {
    tier1: undefined,
  }
  pickTier1  = (item) => {
    return () => {
      this.setState({tier1:item})
    }
  }
  render () {
    const Items = [
      {name: 'Pressure', slug: 'pressure', component:<Pressure /> },
      {name: 'Positioners/feedback', slug: 'position', component:<Valves />},
      {name: 'Heaters', slug: 'heaters', component:<Heaters /> },
      {name: 'Position Feedback', slug: 'positionFeedback', component:<PositionFeedback /> },
      {name: 'Motion', slug: 'motion', component:<Motion /> },
      {name: 'Strain', slug: 'strain', component:<Strain /> },
      {name: 'Igniters', slug: 'igniter', component:<Igniter /> },
      {name: 'Hazards', slug: 'hazards', component:<Hazards />},
      {name: 'Gas Sensors', slug: 'gas', component:<Gas />},
      {name: 'Flame Detectors', slug: 'flame', component:<Flame /> },
      {name: 'Clear Path', slug: 'clearPath', component:<ClearPath /> },
      {name: 'Proximity', slug: 'prox', component:<Prox /> },
      {name: 'Flow', slug: 'flow', component:<Flows /> },
      {name: 'Microphones', slug: 'microphones', component:<Mics /> },
      {name: 'Temperature', slug: 'tempFeedback', component:<Temperature /> },
      {name: 'Avionics Box', slug:'avionics', component:<Avionics />},
      {name: 'AWS Box', slug:'aws', component:<Aws />},
      {name: 'Coms', slug:'coms', component:<Coms />},
      {name: 'Video', slug:'video', component:<Video />},
      {name: 'Tugger', slug:'tugger', component:<Tugger />},
      {name: 'Dumb Instruments', slug:'dumb'},
      {name: 'Smart Instruments', slug:'smart'},
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
        </ul>
        Information:Model, Part Number, Manufacturer Website, Videos, Manuals<br />
        Physical Setup:Control Hardware, Circuit Diagram, Installation, Pinout, Connectors<br />
        Setup:Software, Parameters, Calibration, Software Assets<br />
        System Setup:Calculation, adding to software<br />
        Troubleshooting:Simulate Instrument, Simulate Channel<br />
        Tools: For instalation, troubleshooting<br />
        <hr />
        {renderTier2Component}
      </div>
    )
    }
  }

export default Instruments;
