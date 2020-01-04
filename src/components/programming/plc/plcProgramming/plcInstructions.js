import React from 'react';

class PlcInstructions extends React.Component {
  render () {
    return (
      <div>
        <h2>PLC Instructions</h2>
          <h3>Instructions</h3>
        <table>
          <tr><th>Instruction</th><th>Symbol</th><th></th></tr>
          <tr><td>Examine if open</td><td>XIO</td><td>Condition</td></tr>
          <tr><td>Examine if closed</td><td>XIC</td><td>Condition</td></tr>
          <tr><td>Output Energize</td><td>OTE</td><td>None</td></tr>
          <tr><td>Output Latch</td><td>OTL</td><td>Latched</td></tr>
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
            <img src='data:image/png;base64,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'></img>
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
        <h3>Best Practices</h3>
          <li>OTE,OTL, OTU Bits should be energized from only 1 location in a
          program.  Give multiple conditions on the same rung if you want to
          energize/de-energize the bit multiple ways</li>
          <li>ONS,OSR, OSF Every One shot in the program should have its own
          address, do not share bits between different instructions</li>
          <li>Segregate I/O by setting I/o equal to bits</li>
      </div>
    );
  }
}

export default PlcInstructions;
