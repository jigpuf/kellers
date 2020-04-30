import React from 'react';

class WorkDone extends React.Component {
  render () {
    return (
      <div>
        <h2>Work Done</h2>
        <h3>Ongoing Things</h3>
        <ol>
          <li>Train 1 person/wk in new skill</li>
          <li>1 section/week / matrix</li>
          <li>Add talk in meetings</li>
          <li>Improve a system</li>
          <li>Update on projects</li>
        </ol>
        <h3>2020:</h3>
        <table>
          <tr><th>Period</th><th>Date Range</th><th>Work</th><th>Matrix</th></tr>
          <tr id='1'><td>1</td><td>Early 2020</td>
            <td>
              <ol>
              <li>Worked out Solar Capacity for Flare stack controller</li>
              <li>Built Cost Analysis for expansion of solar</li>
              <li>Planned wiring for Methane Pad expansion</li>
              <li>Ran Cable Tray for Mehane Pad</li>
              <li>Helped wire boxes</li>
              <li>Stayed after and fixed wiring mistakes</li>
              <li>Helped land DC Distro on Tripod</li>
              <li>Mapped out DC distro for Jaymik to make file showing DC control</li>
              <li>Remounted DAQs in tripod hardening</li>
              <li>Wired up boxes for shake test on Raptor and worked out electronics math for power load</li>
              </ol>
            </td>
            <td>
              <ol>
              <li><a href='#t1-2-9'>T1.2.9</a></li>
              <li>T5.3.1</li>
              <li><a href='#'></a></li>
              <li><a href='#'></a></li>
              <li>T1.3.7</li>
              <li><a href='#'></a></li>
              <li><a href='#'></a></li>
              <li><a href='#'></a></li>
              <li><a href='#'></a></li>
              <li><a href='#'></a></li>
              </ol>
            </td>
          </tr>
          <tr id='2'><td>2</td><td>April 1-11</td>
            <td>
              <ol>
                <li>Built Lighting schemattic to assist in Lox Tower AWS Light Project</li>
                <li>Wired AWS Box on Raptor Stand</li>
                <li>Managed communications with vendor over SenseAlert Repairs</li>
                <li>Walked down and made plan for future blue valve boxes on Raptor</li>
                <li>Fixed signals on Methane propellant pad AO Signals not reading right</li>
                <li>Planned project for Lox Pad expansion</li>
                <li>Built Cable tray and installed all wiring for Lox Pad</li>
              </ol>
            </td>
            <td>
              <ol>
                <li>T5.3.2</li>
                <li>T1.3.7</li>
                <li><a href='#t1-1-1'>T1.1.1</a></li>
                <li></li>
                <li></li>
                <li></li>
                <li>T1.3.5,T1.3.6,T1.3.7</li>
              </ol>    
            </td>
          </tr>
          <tr id='3'><td>3</td><td>April 12-18</td>
            <td>Caught up on training<br />
            Priced, Ordered Draeger gas sensors<br />
            Built page explaining drager programming<br />
            Planning and pricing of PLC equipment for AWS on propellant pad<br />
            Circuit board inspection of Old PLC Equipment<br />
            Wired Headers and boxes, built, checked out, routed cables, at LSCS(MS and DSub)<br />
            Installed valve drawer and cleaned up cabling at LSCS<br />
            Fixed Pressure Tranducers and RTD's in Raptor Methane Area<br />
            Found problem with wiring based on Calc/Config and scaling files<br />
            Planned for PLC Rewiring of Raptor Methane propellant Pad<br />
            Got Part Numbers together for Valve Drawer on LSCS<br />
            Asked for less caviots in 60v rul for boxes, All DC AC under 60V<br />
            </td>
            <td>T1.1.2,S1.1.1<br /><br /><br />T5.3.1,T5.3.3<br /><br />T1.3.7<br /><br />T1.3.5,T1.3.6<br /><br />T5.3.3,T5.3.4<br /><br />T1.4.2<br /></td>
          </tr>
          <tr id='4'><td>4</td><td>April 19-25</td>
            <td>Sent Tucker training needs<br />
            Programed recieved Drager Gas Sensors<br />
            Built page so others would understand programing and operation<br />
            Installed wiring for instrumentation, RTD, Limit, Valve for Raptor Lox Tank<br />
            Got quotes and ordered through RFPO PLC micro800 series for AWS upgrades on CH4 Pad<br />
            Redesigned circuit and relay logic for AWS to reduce needed PLC parts saving $200<br />
            Fixed Non-reading RTD in North Bay(wiring)<br />
            Re-congigures Sensalert CH4 detectors for new guidlines on monitoring<br />
            Added Circuit Protection to individual lines on AWS lights CH4 Pad<br />
            Built TC Breakout Cable for WSCS<br />
            Added ducer cable for rig in North Bay Raptor<br />
            </td>
            <td><br /><br /><br />T1.3.5,T1.3.7<br /><br />T5.3.1,T5.3.3,T5.3.4<br /><br /><br />T1.2.2<br /><br />T1.3.5,T1.3.6,T1.3.7<br /><br /></td>
          </tr>
          <tr id='5'><td>5</td><td>April 26-May 2</td>
            <td>Built 10 cables for WSCS<br />
            Developed way to build cables outside of box for ergonomics, speed and quality<br />
            </td>
            <td><br /><br /></td>
          </tr>
        </table>



        <h3>DCS Matrix</h3>
        <table>
        <tr><th>Matrix Level</th><th>Category</th>
          <th>Requirement</th>
          <th>Site</th>
          <th>Date</th>
        </tr>
        <tr id='t1-1-1'><td>T1.1.1</td><td>Computer</td>
          <td>MS Office</td>
          <td></td>
          <td><a href='#2'>2</a></td>
        </tr>
        <tr id='t1-1-2'><td>T1.1.2</td><td>Computer</td>
          <td>Up to date Bridge</td><td>Helper &rarr; training &rarr; Required Classes</td><td><a href='#3'>3</a></td></tr>
        <tr id='t1-2-1'><td>T1.2.1</td><td>Knowledge</td><td>Identify components: Resisters, Capacitors, Diodes, inductors, PTC's, Fuses</td><td></td><td></td></tr>
        <tr id='t1-2-2'><td>T1.2.2</td><td>Knowledge</td><td>Circuits, PTCs, Circuit Breakers</td><td>rarr; RLC Circuits</td><td><a href='#4'>4</a></td></tr>
        <tr id='t1-2-4'><td>T1.2.4</td><td>Knowledge</td><td>Use MWL for channel Assignment</td><td></td><td></td></tr>
        <tr id='t1-2-5'><td>T1.2.5</td><td>Knowledge</td><td>Read and understand P&IDs, One-Lines, Electrical Documentation</td><td></td><td></td></tr>
        <tr id='t1-2-6'><td>T1.2.6</td><td>Knowledge</td><td>Setup, and configure multimeter, injection, o-scope, function Generator</td><td></td><td></td></tr>
        <tr id='t1-2-7'><td>T1.2.7</td><td>Knowledge</td><td>Pressure Transducers, Temp, Strain, accels, flow</td><td></td><td></td></tr>
        <tr id='t1-2-8'><td>T1.2.8</td><td>Knowledge</td><td>Lock Out Tag Out</td><td></td><td></td></tr>
        <tr id ='t1-2-9'><td>T1.2.9</td><td>Knowledge</td><td>Ability to Solve Electrical problems, Circuit Analysis</td><td>Helper &rarr; Electronic &rarr; RLC Circuits</td><td><a href='#1'>1</a></td></tr>
        <tr id=''><td>T1.3.1</td><td>Practical</td><td>Utilize safety Equipment, procedures</td><td></td><td></td></tr>
        <tr id=''><td>T1.3.2</td><td>Practical</td><td>Hand tools, Sockets, Grinder, Band Saw Holee Punch</td><td></td><td></td></tr>
        <tr id=''><td>T1.3.3</td><td>Practical</td><td>Strippers, Crimpers, cutters, label maker</td><td>All</td><td>All</td></tr>
        <tr id=''><td>T1.3.4</td><td>Practical</td><td>Shrink Tube, Heat Gun, solder splice, hot melt</td><td>All</td><td>All</td></tr>
        <tr id=''><td>T1.3.5</td><td>Practical</td><td>Terminate instrumentation in the field</td><td></td><td><a href='#2'>2</a>,<a href='#3'>3</a>,<a href='#4'>4</a></td></tr>
        <tr id=''><td>T1.3.6</td><td>Practical</td><td>MS, D38, D-sub</td><td></td><td>2-4</td></tr>
        <tr id=''><td>T1.3.7</td><td>Practical</td><td>J-box and header landing</td><td></td><td><a href='#1'>1</a>,<a href='#2'>2</a>,<a href='#3'>3</a>,<a href='#4'>4</a></td></tr>
        <tr id=''><td>T1.4.1</td><td>Team</td><td>Individual Contributer</td><td>All</td><td>All</td></tr>
        <tr id=''><td>T1.4.2</td><td>Team</td><td>Active in group Discussions</td><td></td><td>3</td></tr>
        <tr id=''><td>T1.4.3</td><td>Team</td><td>Helps Team Members</td><td></td><td></td></tr>
        <tr id=''><td>T1.4.4</td><td>Team</td><td>Does what is required</td><td>All</td><td>All</td></tr>
        <tr id=''><td>T2.1.1</td><td>Computer</td><td></td><td></td><td></td></tr>
        <tr id=''><td>T2.1.2</td><td>Computer</td><td></td><td></td><td></td></tr>
        <tr id=''><td>T2.1.3</td><td>Computer</td><td></td><td></td><td></td></tr>
        <tr id=''><td>T2.1.4</td><td>Computer</td><td></td><td></td><td></td></tr>
        <tr id=''><td>T2.1.5</td><td>Computer</td><td></td><td></td><td></td></tr>
        <tr id=''><td>T2.1.6</td><td>Computer</td><td></td><td></td><td></td></tr>
        <tr id=''><td>T2.2.1</td><td>Knowedge</td><td></td><td></td><td></td></tr>
        <tr id=''><td>T2.2.2</td><td>Knowedge</td><td></td><td></td><td></td></tr>
        <tr id=''><td>T2.2.3</td><td>Knowedge</td><td></td><td></td><td></td></tr>
        <tr id=''><td>T2.2.4</td><td>Knowedge</td><td></td><td></td><td></td></tr>
        <tr id=''><td>T2.2.5</td><td>Knowedge</td><td></td><td></td><td></td></tr>
        <tr id=''><td>T2.2.6</td><td>Knowedge</td><td></td><td></td><td></td></tr>
        <tr id=''><td>T2.2.7</td><td>Knowedge</td><td></td><td></td><td></td></tr>
        <tr id=''><td>T2.2.8</td><td>Knowedge</td><td></td><td></td><td></td></tr>
        <tr id=''><td>T2.2.9</td><td>Knowedge</td><td></td><td></td><td></td></tr>
        <tr id=''><td>T2.2.10</td><td>Knowedge</td><td></td><td></td><td></td></tr>
        <tr id=''><td>T2.3.1</td><td>Practical</td><td></td><td></td><td></td></tr>
        <tr id=''><td>T2.3.2</td><td>Practical</td><td></td><td></td><td></td></tr>
        <tr id=''><td>T2.3.3</td><td>Practical</td><td></td><td></td><td></td></tr>
        <tr id=''><td>T2.3.4</td><td>Practical</td><td></td><td></td><td></td></tr>
        <tr id=''><td>T2.3.5</td><td>Practical</td><td></td><td></td><td></td></tr>
        <tr id=''><td>T2.3.6</td><td>Practical</td><td></td><td></td><td></td></tr>
        <tr id=''><td>T2.3.7</td><td>Practical</td><td></td><td></td><td></td></tr>
        <tr id=''><td>T2.3.8</td><td>Practical</td><td></td><td></td><td></td></tr>
        <tr id=''><td>T2.3.9</td><td>Practical</td><td></td><td></td><td></td></tr>
        <tr id=''><td>T2.3.10</td><td>Practical</td><td></td><td></td><td></td></tr>
        <tr id=''><td>T2.3.11</td><td>Practical</td><td></td><td></td><td></td></tr>
        <tr id=''><td>T2.4.1</td><td>Team</td><td></td><td></td><td></td></tr>
        <tr id=''><td>T2.4.2</td><td>Team</td><td></td><td></td><td></td></tr>
        <tr id=''><td>T2.4.3</td><td>Team</td><td></td><td></td><td></td></tr>
        <tr id=''><td>T2.4.4</td><td>Team</td><td></td><td></td><td></td></tr>
        <tr id=''><td>T2.4.5</td><td>Team</td><td></td><td></td><td></td></tr>
        <tr id=''><td>T2.5.1</td><td>Training</td><td></td><td></td><td></td></tr>
        <tr id=''><td>T2.5.2</td><td>Training</td><td></td><td></td><td></td></tr>
        <tr id=''><td>T2.5.3</td><td>Training</td><td></td><td></td><td></td></tr>
        <tr id=''><td>T2.5.4</td><td>Training</td><td></td><td></td><td></td></tr>
        <tr id=''><td>T2.5.5</td><td>Training</td><td></td><td></td><td></td></tr>
        <tr id=''><td>T2.5.6</td><td>Training</td><td></td><td></td><td></td></tr>
        <tr id=''><td>T2.5.7</td><td>Training</td><td></td><td></td><td></td></tr>
        <tr id=''><td>T2.5.8</td><td>Training</td><td></td><td></td><td></td></tr>
        <tr id=''><td>T3.1.</td><td></td><td></td><td></td><td></td></tr>
        <tr id=''><td>T3.1.</td><td></td><td></td><td></td><td></td></tr>
        <tr id=''><td>T3.1.</td><td></td><td></td><td></td><td></td></tr>
        <tr id=''><td>T3.1.</td><td></td><td></td><td></td><td></td></tr>
        <tr id=''><td>T3.1.</td><td></td><td></td><td></td><td></td></tr>
        <tr id=''><td>T3.1.</td><td></td><td></td><td></td><td></td></tr>
        <tr id=''><td>T3.1.</td><td></td><td></td><td></td><td></td></tr>
        <tr id=''><td>T3.1.</td><td></td><td></td><td></td><td></td></tr>
        <tr id=''><td>T3.2.</td><td></td><td></td><td></td><td></td></tr>
        <tr id=''><td>T3.2.</td><td></td><td></td><td></td><td></td></tr>
        <tr id=''><td>T3.2.</td><td></td><td></td><td></td><td></td></tr>
        <tr id=''><td>T3.2.</td><td></td><td></td><td></td><td></td></tr>
        <tr id=''><td>T3.2.</td><td></td><td></td><td></td><td></td></tr>
        <tr id=''><td>T3.2.</td><td></td><td></td><td></td><td></td></tr>
        <tr id=''><td>T3.2.</td><td></td><td></td><td></td><td></td></tr>
        <tr id=''><td>T3.2.</td><td></td><td></td><td></td><td></td></tr>
        <tr id=''><td>T3.3.</td><td></td><td></td><td></td><td></td></tr>
        <tr id=''><td>T3.3.</td><td></td><td></td><td></td><td></td></tr>
        <tr id=''><td>T3.3.</td><td></td><td></td><td></td><td></td></tr>
        <tr id=''><td>T3.3.</td><td></td><td></td><td></td><td></td></tr>
        <tr id=''><td>T3.3.</td><td></td><td></td><td></td><td></td></tr>
        <tr id=''><td>T3.3.</td><td></td><td></td><td></td><td></td></tr>
        <tr id=''><td>T3.3.</td><td></td><td></td><td></td><td></td></tr>
        <tr id=''><td>T3.3.</td><td></td><td></td><td></td><td></td></tr>
        <tr id=''><td>T3.3.</td><td></td><td></td><td></td><td></td></tr>
        <tr id=''><td>T3.3.</td><td></td><td></td><td></td><td></td></tr>
        <tr id=''><td>T3.3.</td><td></td><td></td><td></td><td></td></tr>
        <tr id=''><td>T3.3.</td><td></td><td></td><td></td><td></td></tr>
        <tr id=''><td>T3.4.</td><td></td><td></td><td></td><td></td></tr>
        <tr id=''><td>T3.4.</td><td></td><td></td><td></td><td></td></tr>
        <tr id=''><td>T3.4.</td><td></td><td></td><td></td><td></td></tr>
        <tr id=''><td>T3.4.</td><td></td><td></td><td></td><td></td></tr>
        <tr id=''><td>T3.4.</td><td></td><td></td><td></td><td></td></tr>
        <tr id=''><td>T3.4.</td><td></td><td></td><td></td><td></td></tr>
        <tr id=''><td>T3.5.</td><td></td><td></td><td></td><td></td></tr>
        <tr id=''><td>T3.5.</td><td></td><td></td><td></td><td></td></tr>
        <tr id=''><td>T3.5.</td><td></td><td></td><td></td><td></td></tr>
        <tr id=''><td>T3.5.</td><td></td><td></td><td></td><td></td></tr>
        <tr id=''><td>T3.5.</td><td></td><td></td><td></td><td></td></tr>
        <tr id=''><td>T4.1.</td><td></td><td></td><td></td><td></td></tr>
        <tr id=''><td>T4.1.</td><td></td><td></td><td></td><td></td></tr>
        <tr id=''><td>T4.1.</td><td></td><td></td><td></td><td></td></tr>
        <tr id=''><td>T4.1.</td><td></td><td></td><td></td><td></td></tr>
        <tr id=''><td>T4.2.</td><td></td><td></td><td></td><td></td></tr>
        <tr id=''><td>T4.2.</td><td></td><td></td><td></td><td></td></tr>
        <tr id=''><td>T4.2.</td><td></td><td></td><td></td><td></td></tr>
        <tr id=''><td>T4.2.</td><td></td><td></td><td></td><td></td></tr>
        <tr id=''><td>T4.3.</td><td></td><td></td><td></td><td></td></tr>
        <tr id=''><td>T4.3.</td><td></td><td></td><td></td><td></td></tr>
        <tr id=''><td>T4.3.</td><td></td><td></td><td></td><td></td></tr>
        <tr id=''><td>T4.3.</td><td></td><td></td><td></td><td></td></tr>
        <tr id=''><td>T4.3.</td><td></td><td></td><td></td><td></td></tr>
        <tr id=''><td>T4.3.</td><td></td><td></td><td></td><td></td></tr>
        <tr id=''><td>T4.3.</td><td></td><td></td><td></td><td></td></tr>
        <tr id=''><td>T4.3.</td><td></td><td></td><td></td><td></td></tr>
        <tr id=''><td>T4.3.</td><td></td><td></td><td></td><td></td></tr>
        <tr id=''><td>T4.3.</td><td></td><td></td><td></td><td></td></tr>
        <tr id=''><td>T4.3.</td><td></td><td></td><td></td><td></td></tr>
        <tr id=''><td>T4.3.</td><td></td><td></td><td></td><td></td></tr>
        <tr id=''><td>T4.3.</td><td></td><td></td><td></td><td></td></tr>
        <tr id=''><td>T4.3.</td><td></td><td></td><td></td><td></td></tr>
        <tr id=''><td>T4.3.</td><td></td><td></td><td></td><td></td></tr>
        <tr id=''><td>T4.4.</td><td></td><td></td><td></td><td></td></tr>
        <tr id=''><td>T4.4.</td><td></td><td></td><td></td><td></td></tr>
        <tr id=''><td>T4.4.</td><td></td><td></td><td></td><td></td></tr>
        <tr id=''><td>T4.4.</td><td></td><td></td><td></td><td></td></tr>
        <tr id=''><td>T4.4.</td><td></td><td></td><td></td><td></td></tr>
        <tr id=''><td>T4.4.</td><td></td><td></td><td></td><td></td></tr>
        <tr id=''><td>T4.4.</td><td></td><td></td><td></td><td></td></tr>
        <tr id=''><td>T4.4.</td><td></td><td></td><td></td><td></td></tr>
        <tr id=''><td>T4.5.1</td><td></td><td></td><td></td><td></td></tr>
        <tr id=''><td>T5.1.1</td><td>Computer</td><td>Write job work flow documents</td><td></td><td></td></tr>
        <tr id=''><td>T5.1.2</td><td>Computer</td><td>Make approved MWL and deploy on new Systems</td><td></td><td></td></tr>
        <tr id=''><td>T5.2.1</td><td>Knowledge</td><td>Technical Expert</td><td>All</td><td>All</td></tr>
        <tr id=''><td>T5.2.2</td><td>Knowledge</td><td>Demonstrate test requirements for complex electronics, knowledge of regulatory requirements</td><td></td><td></td></tr>
        <tr id=''><td>T5.2.3</td><td>Knowledge</td><td>Demonstrates knowledge of signal conditioning circuitry and DAQ cards</td><td></td><td></td></tr>
        <tr id=''><td>T5.2.4</td><td>Knowledge</td><td>Knowledge of all field instruments</td><td></td><td></td></tr>
        <tr id=''><td>T5.3.1</td><td>Practical</td><td>Gives engineering team recomendations for hardware based on ease/research/cost</td><td></td><td>1,3,4</td></tr>
        <tr id=''><td>T5.3.2</td><td>Practical</td><td>Demonstrates ability to generate advanced electrical circuits and documents schematics, onelines, flow charts, etc.</td><td></td><td>2</td></tr>
        <tr id=''><td>T5.3.3</td><td>Practical</td><td>Design Implement and commision PLC</td><td></td><td>3,4</td></tr>
        <tr id=''><td>T5.3.4</td><td>Practical</td><td>Demonstrate ability to take initial test requirements and design, build, prepare a full DAQ</td><td></td><td>3,4</td></tr>
        <tr id=''><td>T5.4.1</td><td>Team</td><td>Consumate Leader and professional</td><td></td><td></td></tr>
        <tr id=''><td>T5.4.2</td><td>Team</td><td>Fosters team cohesiveness and builds possitive relationships</td><td></td><td></td></tr>
        <tr id=''><td>T5.5.1</td><td>Training</td>Qualified authorized oversight<td></td><td></td><td></td></tr>
        <tr id=''><td>T5.5.2</td><td>Training</td>Highly functional mechanical expertise<td></td><td></td><td></td></tr>
        </table>




        <h3>DCS Specialist Matrix</h3>
        <table>
        <tr><th>Matrix Level</th><th>Category</th><th>Requirement</th><th>Site</th><th>Date</th></tr>
        <tr><td>S1.1.1</td><td>Computer Skills</td><td>Caught up on Bridge</td><td>Helper &rarr; training &rarr; Required Classes</td><td>3</td></tr>
        <tr><td>S1.1.2</td><td>Computer Skills</td><td>Office</td><td></td><td></td></tr>
        <tr><td>S1.1.3</td><td>Computer Skills</td><td>Generate and close Work Orders</td><td></td><td></td></tr>
        <tr><td>S1.1.4</td><td>Computer Skills</td><td>Use architect to design harnesses</td><td></td><td></td></tr>
        <tr><td>S1.1.5</td><td>Computer Skills</td><td>Navigate and update work flow processes</td><td></td><td></td></tr>
        <tr><td>S1.1.6</td><td>Computer Skills</td><td>Determine part availability, RFPO, Punchout</td><td></td><td></td></tr>
        <tr><td>S1.1.7</td><td>Computer Skills</td><td>Command line for troubleshooting</td><td></td><td></td></tr>
        <tr><td>S1.1.8</td><td>Computer Skills</td><td>Update and Commit MWL, Scaling using SVN</td><td></td><td></td></tr>
        <tr><td>S1.1.9</td><td>Computer Skills</td><td>Configure and checkouts DAQs using rockwell and NI Max</td><td></td><td></td></tr>
        <tr><td>S1.1.10</td><td>Computer Skills</td><td>GUI opperation and setup plots</td><td></td><td></td></tr>
        <tr><td>S1.2.1</td><td>Knowledge</td><td>Provide tech support no matter the system</td><td>All</td><td>All</td></tr>
        <tr><td>S1.2.2</td><td>Knowledge</td><td>Instrumentation and calibration</td><td></td><td></td></tr>
        <tr><td>S1.2.3</td><td>Knowledge</td><td>NFPA-70E How to work around energized circuits</td><td></td><td></td></tr>
        <tr><td>S1.3.1</td><td>Practical</td><td>Written and communication skills</td><td></td><td></td></tr>
        <tr><td>S1.3.2</td><td>Practical</td><td>Design Improve, document grounding/shielding</td><td></td><td></td></tr>
        <tr><td>S1.3.3</td><td>Practical</td><td>Modify, Improve, Document Electrical Power Systems</td><td></td><td></td></tr>
        <tr><td>S1.3.4</td><td>Practical</td><td>Modify, Improve, Document DAQs</td><td></td><td></td></tr>
        <tr><td>S1.3.5</td><td>Practical</td><td>Modify, Improve, Document PLCs</td><td></td><td></td></tr>
        <tr><td>S1.3.6</td><td>Practical</td><td>Self Sufficient in project coordination</td><td></td><td></td></tr>
        <tr><td>S1.3.7</td><td>Practical</td><td>Teach DCS Technicians</td><td></td><td></td></tr>
        <tr><td>S1.3.8</td><td>Practical</td><td>Excelent troubleshooting techniques</td><td></td><td></td></tr>
        <tr><td>S1.3.9</td><td>Practical</td><td>At Least 70% of DCS skill Matrix</td><td></td><td></td></tr>
        <tr><td>S1.3.10</td><td>Practical</td><td>At least 70% of elec tech Matrix</td><td></td><td></td></tr>
        <tr><td>S1.4.1</td><td>Team</td><td>Possitive attitude</td><td></td><td></td></tr>
        <tr><td>S1.4.2</td><td>Team</td><td>Listens, shares, supports others</td><td></td><td></td></tr>
        <tr><td>S2.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>S2.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>S2.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>S2.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>S2.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>S2.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>S2.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>S2.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>S2.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>S2.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>S2.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>S2.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>S2.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>S2.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>S2.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>S2.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>S2.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>S2.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>S2.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>S2.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>S2.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>S2.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>S2.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>S2.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>S3.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>S3.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>S3.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>S3.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>S3.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>S3.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>S3.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>S3.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>S3.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>S3.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>S3.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>S3.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>S3.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>S3.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>S3.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>S3.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>S3.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>S3.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>S3.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>S3.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>S3.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>S3.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>S3.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>S3.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>S3.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>S3.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>S3.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>S3.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>S3.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>S3.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>S3.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>S3.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>S3.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>S3.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>S3.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>S4.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>S4.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>S4.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>S4.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>S4.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>S4.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>S4.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>S4.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>S4.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>S4.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>S4.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>S4.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>S4.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>S4.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>S4.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>S4.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>S4.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>S4.</td><td></td><td></td><td></td><td></td></tr>
        </table>
      </div>
    );
  }
}

export default WorkDone;
