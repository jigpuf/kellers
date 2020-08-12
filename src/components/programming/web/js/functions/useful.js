import React from 'react';

class Useful extends React.Component {
  render () {
    return (
      <div>
        <h2>Useful Functions</h2>
        <h3>DOM</h3>
          let varName = document.getElementById('');<br />
          varName.innerHTML = '';<br />
          window.onLoad = functionName;<br />
          let li = document.createElement('li');<br />
          eg.<br />
          let varName = document.getElementById('idName');<br />
          varName.apperndChild(li);<br />
        <h3>Math</h3>
          Math.random();<br />
          Math.PI;<br />
          Math.floor();<br />
        <h3>Event Handling</h3>
        <h3>Time</h3>
          Date().getTime();
      </div>
    );
  }
}

export default Useful;
