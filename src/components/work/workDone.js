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
          <tr><th>Periond</th><th>Date Range</th><th>Work</th><th>Matrix</th></tr>
          <tr><td>1</td><td>Early 2020</td>
            <td>Worked out Solar Capacity for Flare stack controller<br />
            Built Cost Analysis for expansion of solar<br />
            Planned wiring for Methane Pad expansion<br />
            Ran Cable Tray for Mehane Pad<br />
            Helped wire boxes<br />
            Stayed after and fixed wiring mistakes<br />
            Helped land DC Distro on Tripod<br />
            Mapped out DC distro for Jaymik to make file showing DC control<br />
            Remounted DAQs in tripod hardening<br />
            Wired up boxes for shake test on Raptor and worked out electronics math for power load<br />
            </td>
            <td>T1.2.9<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /></td></tr>
          <tr><td>2</td><td>April 1-11</td>
            <td>Built Lighting schemattic to assist in Lox Tower AWS Light Project<br />
            Wired AWS Box on Raptor Stand<br />
            Managed communications with vendor over SenseAlert Repairs<br />
            Walked down and made plan for future blue valve boxes on Raptor<br />
            Fixed signals on Methane propellant pad AO Signals not reading right<br />
            Planned project for Lox Pad expansion<br />
            Built Cable tray and installed all wiring for Lox Pad</td>
            <td><br /><br />T1.1.1<br /><br /><br /><br /><br /></td></tr>
          <tr><td>3</td><td>April 12-18</td>
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
            <td>T1.1.2,S1.1.1<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />T1.4.2<br /></td></tr>
          <tr><td>4</td><td>April 19-25</td>
            <td>Sent Tucker training needs<br />
            Programed recieved Drager Gas Sensors<br />
            Built page so others would understand programing and operation<br />
            Installed wiring for instrumentation, RTD, Limit, Valve for Raptor Lox Tank<br />
            Got quotes and ordered through RFPO PLC micro800 series for AWS upgrades on CH4 Pad<br />
            Redesigned circuit and relay logic for AWS to reduce needed PLC parts saving $200<br />
            Fixed Non-reading RTD in North Bay(wiring)<br />
            Re-congigures Sensalert CH4 detectors for new guidlines on monitoring<br />
            Added Circuit Protection to individual lines on AWS lights CH4 Pad<br />
            </td>
            <td><br /><br /><br /><br /><br /><br /><br /><br />T1.2.2<br /></td></tr>
          <tr><td>5</td><td>April 26-May 2</td><td></td><td></td></tr>
        </table>
        <h3>DCS Matrix</h3>
        <table>
        <tr><th>Matrix Level</th><th>Category</th><th>Requirement</th><th>Site</th><th>Date</th></tr>
        <tr><td>T1.1.1</td><td>Computer Skills</td><td>MS Office</td><td></td><td>2</td></tr>
        <tr><td>T1.1.2</td><td>Computer Skills</td><td>Up to date Bridge</td><td>Helper &rarr; training &rarr; Required Classes</td><td>3</td></tr>
        <tr><td>T1.2.1</td><td>Knowledge</td><td>Identify components: Resisters, Capacitors, Diodes, inductors, PTC's, Fuses</td><td></td><td></td></tr>
        <tr><td>T1.2.2</td><td>Knowledge</td><td>Circuits, PTCs, Circuit Breakers</td><td>rarr; RLC Circuits</td><td>4</td></tr>
        <tr><td>T1.2.4</td><td>Knowledge</td><td>Use MWL for channel Assignment</td><td></td><td></td></tr>
        <tr><td>T1.2.5</td><td>Knowledge</td><td>Read and understand P&IDs, One-Lines, Electrical Documentation</td><td></td><td></td></tr>
        <tr><td>T1.2.6</td><td>Knowledge</td><td>Setup, and configure multimeter, injection, o-scope, function Generator</td><td></td><td></td></tr>
        <tr><td>T1.2.7</td><td>Knowledge</td><td>Pressure Transducers, Temp, Strain, accels, flow</td><td></td><td></td></tr>
        <tr><td>T1.2.8</td><td>Knowledge</td><td>Lock Out Tag Out</td><td></td><td></td></tr>
        <tr><td>T1.2.9</td><td>Knowledge</td><td>Ability to Solve Electrical problems, Circuit Analysis</td><td>Helper &rarr; Electronic &rarr; RLC Circuits</td><td>1</td></tr>
        <tr><td>T1.3.1</td><td>Practical</td><td>Utilize safety Equipment, procedures</td><td></td><td></td></tr>
        <tr><td>T1.3.2</td><td>Practical</td><td>Hand tools, Sockets, Grinder, Band Saw Holee Punch</td><td></td><td></td></tr>
        <tr><td>T1.3.3</td><td>Practical</td><td>Strippers, Crimpers, cutters, label maker</td><td></td><td></td></tr>
        <tr><td>T1.3.4</td><td>Practical</td><td>Shrink Tube, Heat Gun, solder splice, hot melt</td><td></td><td></td></tr>
        <tr><td>T1.3.5</td><td>Practical</td><td>Terminate instrumentation in the field</td><td></td><td></td></tr>
        <tr><td>T1.3.6</td><td>Practical</td><td>MS, D38, D-sub</td><td></td><td></td></tr>
        <tr><td>T1.3.7</td><td>Practical</td><td>J-box and header landing</td><td></td><td></td></tr>
        <tr><td>T1.4.1</td><td>Team</td><td>Individual Contributer</td><td>All</td><td>All</td></tr>
        <tr><td>T1.4.2</td><td>Team</td><td>Active in group Discussions</td><td></td><td>3</td></tr>
        <tr><td>T1.4.3</td><td>Team</td><td>Helps Team Members</td><td></td><td></td></tr>
        <tr><td>T1.4.4</td><td>Team</td><td>Does what is required</td><td>All</td><td>All</td></tr>
        <tr><td>T2.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>T2.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>T2.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>T2.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>T2.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>T2.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>T2.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>T2.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>T2.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>T2.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>T2.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>T2.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>T2.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>T2.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>T2.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>T2.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>T2.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>T2.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>T2.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>T2.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>T2.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>T2.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>T2.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>T2.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>T2.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>T2.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>T2.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>T2.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>T2.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>T2.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>T2.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>T2.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>T2.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>T2.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>T2.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>T2.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>T2.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>T2.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>T2.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>T2.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>T3.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>T3.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>T3.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>T3.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>T3.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>T3.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>T3.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>T3.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>T3.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>T3.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>T3.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>T3.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>T3.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>T3.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>T3.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>T3.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>T3.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>T3.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>T3.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>T3.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>T3.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>T3.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>T3.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>T3.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>T3.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>T3.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>T3.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>T3.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>T3.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>T3.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>T3.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>T3.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>T3.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>T3.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>T3.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>T3.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>T3.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>T3.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>T3.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>T4.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>T4.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>T4.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>T4.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>T4.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>T4.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>T4.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>T4.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>T4.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>T4.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>T4.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>T4.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>T4.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>T4.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>T4.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>T4.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>T4.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>T4.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>T4.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>T4.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>T4.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>T4.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>T4.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>T4.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>T4.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>T4.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>T4.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>T4.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>T4.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>T4.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>T4.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>T4.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>T5.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>T5.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>T5.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>T5.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>T5.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>T5.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>T5.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>T5.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>T5.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>T5.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>T5.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>T5.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>T5.</td><td></td><td></td><td></td><td></td></tr>
        <tr><td>T5.</td><td></td><td></td><td></td><td></td></tr>
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
        <tr><td>S1.2.1</td><td>Knowledge</td><td>Provide tech support no matter the system</td><td></td><td></td></tr>
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
