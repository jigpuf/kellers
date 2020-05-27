import React from 'react';

class JsBasics extends React.Component {
  render () {
    return (
      <div>
        <h2>Javascript notes</h2>
          <h3>Adding to a webpage</h3>
            <ins><strong>Internal</strong></ins><br />
          	&lt;script&gt;<br />
              Javascript...<br />
            &lt;/script&gt;<br />
            <ins><strong>External</strong></ins><br />
            &lt;script src= "filePath"&gt;&lt;/script&gt;<br />
          <h3>Browser Console</h3>
            <p>In chrome &rarr; right click &rarr; inspect &rarr; console</p>
            You can put JS directly into page in JS file you can put:<br />
            console.log();<br />
            <p>In the parentheses, you put what you want to log in the console.
            This is a good way to test code.</p>
          <h3>Commenting Out</h3>
          <table>
            <tr><th>Type</th><th>Example</th></tr>
            <tr><td>One-line comments</td><td>&#47;&#47;ThingsToCommentOutHere</td></tr>
            <tr><td>Muti-line comments</td><td>&#47;&#42; ThingsToCommentOutHere&#42;&#47;</td></tr>
          </table>
      </div>
    );
  }
}

export default JsBasics;
