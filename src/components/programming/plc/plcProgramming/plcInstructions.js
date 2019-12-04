import React from 'react';

class PlcInstructions extends React.Component {
  render () {
    return (
      <div>
        <h2>PLC Instructions</h2>
          <h3>Instructions</h3>
        <table>
          <tr><th>Instruction</th><th>Symbol</th><th>Type</th></tr>
          <tr><td>Examine if open</td><td>XIO</td><td>Condition</td></tr>
          <tr><td>Examine if closed</td><td>XIC</td><td>Condition</td></tr>
          <tr><td>Output Energize</td><td>OTE</td><td>Action</td></tr>
          <tr><td>Output Latch</td><td>OTL</td><td></td></tr>
          <tr><td>Output Unlatch</td><td>OTU</td><td></td></tr>
          <tr><td>One Shot</td><td>ONS</td><td>Condition</td></tr>
          <tr><td>One Shot Rising</td><td>OSR</td><td>Action</td></tr>
          <tr><td>One Shot Falling</td><td>OSF</td><td>Action</td></tr>
          <tr><td>Timer On Delay</td><td>TON</td><td>Action/condition</td></tr>
          <tr><td>Timer Off Delay</td><td>TOF</td><td>Action/condition</td></tr>
          <tr><td>Retentive Timer</td><td>RTO</td><td>Action/condition</td></tr>
          <tr><td>Counter Up</td><td>CTU</td><td>Action/condition</td></tr>
          <tr><td>Counter Down</td><td>CTD</td><td>Action/condition</td></tr>
          <tr><td>Reset</td><td>RES</td><td>Action</td></tr>
          <tr><td>Greater Than</td><td>GRT</td><td>Condition</td></tr>
          <tr><td>Less Than</td><td>LES</td><td>Condition</td></tr>
          <tr><td>Greater or equal to</td><td>GEQ</td><td>Condition</td></tr>
          <tr><td>Less or Equal</td><td>LEQ</td><td>Condition</td></tr>
          <tr><td>Equal</td><td>EQU</td><td>Condition</td></tr>
          <tr><td>Not Equal</td><td>NEQ</td><td>Condition</td></tr>
          <tr><td>Limit</td><td>LIM</td><td>Condition</td></tr>
          <tr><td>Addition</td><td>ADD</td><td>Action</td></tr>
          <tr><td>Subtraction</td><td>SUB</td><td>Action</td></tr>
          <tr><td>Multiply</td><td>MUL</td><td>Action</td></tr>
          <tr><td>Divide</td><td>DIV</td><td>Action</td></tr>
          <tr><td>Compute</td><td>CPT</td><td>Action</td></tr>
          <tr><td>Scale With Parameters</td><td>SCP</td><td>Action</td></tr>
          <tr><td>Move</td><td>MOV</td><td>Action</td></tr>
          <tr><td>Jump</td><td>JMP</td><td>Action</td></tr>
          <tr><td>Label</td><td>LBL</td><td>Condition</td></tr>
          <tr><td>Jump to Subroutine</td><td>JSR</td><td>Action</td></tr>
          <tr><td>Proportion Integral derivative</td><td>PID</td><td>Action</td></tr>
          <tr><td></td><td></td><td></td></tr>
          <tr><td></td><td></td><td></td></tr>
          <tr><td></td><td></td><td></td></tr>
          <tr><td></td><td></td><td></td></tr>
          <tr><td></td><td></td><td></td></tr>
          <tr><td></td><td></td><td></td></tr>
          <tr><td></td><td></td><td></td></tr>
        </table>
          <h3>Data Types</h3>
        <table>
          <tr><th>Data Type</th><th>Use</th><th>Table Name</th></tr>
          <tr><td>Boolean</td><td></td><td></td></tr>
          <tr><td>Float</td><td></td><td></td></tr>
        </table>
        <h3>Description</h3>
          <li>XIO- If Bit is False, Condition is true</li>
          <li>XIC- If Bit is True, Condition is True</li>
          <li>OTE- Make bit true</li>
          <li>OTL- Make bit true until unlatched</li>
          <li>OTU- Make bit false until latched</li>
          <li>ONS- Makes condition true for 1 scan on a false to true condition</li>
          <li>OSR- Make bit true for one cycle on a false to true condition</li>
          <li>OSF- Make bit true for one cycle on a true to false condition</li>
          <li>TON- Energized when condition is true. Set time base, Set time
          count(preset).When energized, EN Bit is energized. When acumulated
          time is equal to preset, DN bit comes true. Acumulator, EN and DN will
          remain true until the timer condition remains true.  The TT Bit only
          remains energized while Timer is energized, EN is True, but DN is
          False.</li>
          <li>TOF- Only active when condition is false.  Otherwise works the
          same as TON</li>
          <li>RTO- Works like TON but accumulator doesn't reset with false
          condition. Requires a reset command</li>
          <li>CTU- When True, Accumulator Counts up on false to true conditions.
          When true, the CU is enabled for 1 cycle.  When Accum = preset, DN is
          enabled.  Requires reset command to start over.</li>
          <li>CTD- Same as CTU but counts down to 0</li>
          <li>RES- Reset timers or counters</li>
          <li>GRT- If a is greater than b, condition is true</li>
          <li>LES- If a is less than b, condition is true</li>
          <li>GEQ- If a is equal or greater than b, condition is true</li>
          <li>LEQ- If a is equal or Lesser than b, condition is true</li>
          <li>EQU- </li>
          <li>NEQ- </li>
          <li>LIM- If Greater or Equal to Low Limit and Less or Equal than High
          limit, condition is true.  Also can be used in reverse if lower limit
          has higher than High Limit. everything outside of limit area
          inclusive.</li>
          <li>ADD- A + B. Can't use 2 constants.  Need at least one memmory block</li>
          <li>SUB- A - B. Can't use 2 constants.  Need at least one memmory block</li>
          <li>MUL- A * B. Can't use 2 constants.  Need at least one memmory block</li>
          <li>DIV- A / B. Can't use 2 constants.  Need at least one memmory block</li>
          <li>CPT- Complex Math</li>
          <li>SCP- Input  represents a value on the input scale and translates
          it to the corresponding value in the scaled value.  Ex. 2 on a 0-5
          scale will be equal to 20 on a 0-100 scale.  Sets output location to
          new scaled value </li>
          <li>MOV- Really just copies one value to a new spot of memory.
          Leaves value in original location too.  Can be used to recast value
          from one data type to another like integer to float. Can be used to
          change values in timers and counters</li>
          <li>JMP- moves program scan to Label on whatever Ladder. 02:0 will go
          to ladder 2 label 02:0.  Only good in same ladder</li>
          <li>LBL- A place to jump to.  Rung will not scan if this instruction
          is on it.  Has to be jumped to</li>
          <li>JSR- jumps to a different ladder.  You can get rid of all
          parameters for simple use. Name Routine name is ladder name</li>
          <li>PID- Uses PD data files.Tries to adjust control variable to make
          the process variable equal the setpoint.</li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        <h3>Best Practices</h3>
          <li>OTE,OTL, OTU Bits should be energized from only 1 location in a
          program.  Give multiple conditions on the same rung if you want to
          energize/de-energize the bit multiple ways</li>
          <li>ONS,OSR, OSF Every One shot in the program should have its own
          address, do not share bits between different instructions</li>
          <li>Segregate I/O by setting I/o equal to bits</li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
      </div>
    );
  }
}

export default PlcInstructions;
