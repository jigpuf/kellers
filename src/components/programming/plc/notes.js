import React from 'react';

class Notes extends React.Component {
  render () {
    return (
      <div>
        <h3>PLC 1 Course</h3>
        <h4>Section 1</h4>
          <h5>Video1:Intro</h5>
            <p>
            Just an intro
            </p>
          <h5>Video2:Software and Course Notes</h5>
            <p>
            Deals with Download instructions and starting instructions
            </p>
          <h5>Video3:Contacting instructor</h5>
            <p>
            Contacting the instructor
            </p>
        <hr />
        <h4>Section 2:Programming Overview</h4>
          <h5>Video4:Section Objectives</h5>
            <p>Section Overview</p>
          <h5>Video5:PLC Automation</h5>
            <p>Talks about why we use PLC's</p>
          <h5><mark>Video6:RSLogix 500 Environment</mark></h5>
            <p>
            1)Menu Bar-Go online, download/upload programs, coms, Verify Project<br />
            2)Project navigation Pane- File Structure<br />
            3)Code Pane- where your program lives<br />
            4)Instructions pane- where you get the drop in tools for program<br />
            5)Search Bar- to find tags in program<br />
            </p>
          <h5>***Video7:Basic Functionality:</h5>
            <p>
            1)Under Program files we see the ladders.  Ladder 2 is the first
            ladder and it can't be erased<br />
            2)Ladder rungs start at 0 and go to end.<br />
            3)Jump to subroutine will jump to the different ladders in program
            files.  Once it gets to end, it starts back at rung 0 on Ladder 2<br />
            </p>
          <h5>Video8:Section Wrapup</h5>
            <p>
            1)Just a recap
            </p>
        <hr />
        <h4>Section 3:Inputs/Outputs</h4>
          <h5>Video9:Section Objectives</h5>
            <p>
            Just a list of objectives.
            </p>
          <h5>Video10:IO Overview</h5>
            <p>
            1)Input- signals comming into the PLC<br />
            2)Outputs- what the PLC sends Outputs<br />
            3)2 types of signals- descreet(Digital) and analog<br />
            </p>
          <h5>Video11:Digital IO</h5>
            <p>
            1)Discreet signals only have on or off signal(two states)<br />
            </p>
          <h5>Video12:Analog IO</h5>
            <p>
            1)Analog devices have many states.<br />
            2)Typical ranges 4-20mA, 0-5VDC, -10 to 10V<br />
            </p>
          <h5>Video13:IO Modules</h5>
            <p>
            1)Expensive PLC require you to decide types of IO modules to put on chasis<br />
            2)This allows scalability
            </p>
          <h5>Video14:Section Wrap-up</h5>
            <p>
            1)Just a recap
            </p>
        <hr />
        <h4>Section 4:Programming Fundamentals</h4>
          <h5>Video15:Section Objectives</h5>
          <p>Just a list of objectives.</p>
          <h5>Video16:Data Management</h5>
          <p>
          Addressing:<br />
          B=Boolean, digital and discreet all mean the same thing. 1 or 0<br />
          N=Integers. No decimals<br />
          F=Floats. Numbers with decimals<br />
          I=Input
          Addressing structure:<br />
          [TYPE][FILE (if applicable)]:[ROW or WORD or SLOT][/ or .][BIT or WORD or CHANNEL]<br />
          </p>
          <h5>***17:Breakdown of addressing</h5>
          <p>
          In other words, if the adress has a letter and a number at the
          beginning, it is the type of file and which of those types of files
          it is. For example, In B3:12/15, it is file 3 of the bit tables.
          </p>
          <ul>
            <li>I= Input</li>
            <li>O= Output</li>
            <li>T= Timer</li>
            <li>B= Boolean</li>
          </ul>


          <p></p>
          <h5>***18:Rungs and Branches</h5>
          <p>Rungs have numbers, branches come off of rungs.  Program works from
          top to bottom. You can have more than one condition on a rung but no
          more than 1 output per branch. Conditions on the left, actions on the
          right.  All conditions must be true for the action to be taken.  Maybe
          rungs act like ands on the same branch for conditions and acts like
          ors when there are branches for conditions.</p>
          <h5>19:</h5>
          <li>XIC=Examine if closed.  if closed, its true</li>
          <li></li>
          <li></li>
          <h5></h5>
          <p></p>
          <h5></h5>
          <p></p>
          <h5></h5>
          <p></p>
          <h5></h5>
          <p></p>
          <h5></h5>
          <p></p>
          <h5></h5>
          <p></p>
          <h5></h5>
          <p></p>
          <h5></h5>
          <p></p>
          <h5></h5>
          <p></p>
          <h5></h5>
          <p></p>

        <hr />
      </div>
    );
  }
}

export default Notes;
