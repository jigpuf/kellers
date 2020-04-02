import React from 'react';

class Position extends React.Component {
  render () {
    return (
      <div>
        <h2>Position</h2>
          <ol>
            <li>Static</li>
              This is standard
            <li>Relative</li>
              Offset from static position
            <li>Absolute</li>
              Offset from top left corner
            <li>Z-index</li>
              Sets order images are shown Bottom to top starting with 1
            <li>Fixed</li>
              Sets in one place and ignores window movement
            <li>Float</li>
              Decide what side to float something to.  Everything else will line
              up next to it.
          </ol>
          <h3>Relative</h3>
            position: relative;<br />
            top: 20px<br />
            left: 50px;<br />
          <h3>Absolute</h3>
            position: absolute;<br />
            top: 20px;<br />
            left: 60px;<br />
          <h3>Z-index</h3>
            z-index: 1;
          <h3>Fixed</h3>
            position: fixed;<br />
            top: 20px;<br />
            left: 60px;<br />
          <h3>Float</h3>
            float: left;<br />
            width: 30%;<br />
            margin-right: 30px;<br />
            <p>Typically if you float 1 direction, it looks better putting a
            margin to the opposite direction to keep things wrapping around it
            at a better distance.  If you have a block element wrapping around
            something, it may carry its style into the thing that is floating.
            By using the clear: both; command on the block element, it willdrop
            outside of the thing being floated</p>

      </div>
    );
  }
}

export default Position;
