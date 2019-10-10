import React from 'react';

class Display extends React.Component {
  render () {
    return (
      <div>
        <h2>Tables</h2>
          <p>
            &lt;table&gt;<br />
                 &lt;tr&gt;&lt;th&gt;Number&lt;/th&gt;&lt;th&gt;Name&lt;/th&gt;&lt;/tr&gt;<br />
                 &lt;tr&gt;&lt;td&gt;1&lt;/td&gt;&lt;td&gt;Porpois Oriface&lt;/td&gt;&lt;/tr&gt;<br />
            &lt;/table&gt;<br />
          </p>
          Renders:<br />
          <table>
            <tr><th>Number</th><th>Name</th></tr>
            <tr><td>1</td><td>Porpois Oriface</td></tr>
          </table>
          <hr />
        <h2>Lists</h2>
          <div class='twoColumn'>
          Ordered List:
          <p>
            &lt;ol&gt;<br />
                 &lt;li&gt;2Pac&lt;/li&gt;<br />
                 &lt;li&gt;Eminem&lt;/li&gt;<br />
            &lt;/ol&gt;<br />
          </p>
          Renders:<br />
          <ol>
            <li>2Pac</li>
            <li>Eminem</li>
          </ol>
          Unordered List:
          <p>
            &lt;ul&gt;<br />
                 &lt;li&gt;2Pac&lt;/li&gt;<br />
                 &lt;li&gt;Eminem&lt;/li&gt;<br />
            &lt;/ul&gt;<br />
          </p>
          Renders:<br />
          <ul>
            <li>2Pac</li>
            <li>Eminem</li>
          </ul>
        </div>
        <hr />
        <h2>Paragraphs</h2>
        <h2>Div</h2>
        <h2>Break</h2>
        <h2>Hard Rule</h2>


      </div>
    );
  }
}

export default Display;
