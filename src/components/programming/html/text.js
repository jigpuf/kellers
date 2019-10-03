import React from 'react';


class Text extends React.Component {
  render () {
    return (
      <div>
      <h2>Text</h2>
        <h3>Text Types</h3>
        <table>
          <tr><th>Name</th><th>Syntax</th><th>Display</th><th>Type</th></tr>
          <tr><td>Header 1</td><td>&lt;h1&gt;Heading Text&lt;/h1&gt;</td><td><h1>Heading 1</h1></td><td>Block</td></tr>
          <tr><td>Header 2</td><td>&lt;h2&gt;Heading Text&lt;/h2&gt;</td><td><h2>Heading 2</h2></td><td>Block</td></tr>
          <tr><td>Header 3</td><td>&lt;h3&gt;Heading Text&lt;/h3&gt;</td><td><h3>Heading 3</h3></td><td>Block</td></tr>
          <tr><td>Header 4</td><td>&lt;h4&gt;Heading Text&lt;/h4&gt;</td><td><h4>Heading 4</h4></td><td>Block</td></tr>
          <tr><td>Header 5</td><td>&lt;h5&gt;Heading Text&lt;/h5&gt;</td><td><h5>Heading 5</h5></td><td>Block</td></tr>
          <tr><td>Header 6</td><td>&lt;h6&gt;Heading Text&lt;/h6&gt;</td><td><h6>Heading 6</h6></td><td>Block</td></tr>
          <tr><td>Italic</td><td>&lt;em&gt;Italic Text&lt;/em&gt;</td><td><em>Italic Text</em></td><td>In-Line</td></tr>
          <tr><td>Strong</td><td>&lt;strong&gt;Strong Text&lt;/strong&gt;</td><td><strong>Strong Text</strong></td><td>In-Line</td></tr>
          <tr><td>Bold</td><td>&lt;bold&gt;Bold Text&lt;/bold&gt;</td><td><bold>Bold Text</bold></td><td>In-Line</td></tr>
          <tr><td>Subscript</td><td>&lt;sub&gt;Subscript Text&lt;/sub&gt;</td><td><sub>Subscript Text</sub></td><td>In-Line</td></tr>
          <tr><td>Superscript</td><td>&lt;sup&gt;Superscript Text&lt;/sup&gt;</td><td><sup>Superscript Text</sup></td><td>In-Line</td></tr>
          <tr><td>Small</td><td>&lt;small&gt;Small Text&lt;/small&gt;</td><td><small>Small Text</small></td><td>In-Line</td></tr>
          <tr><td>Mark</td><td>&lt;mark&gt; Marked Text&lt;/mark&gt;</td><td><mark>Marked Text</mark></td><td>In-Line</td></tr>
          <tr><td>Delete</td><td>&lt;del&gt;Deleted Text&lt;/del&gt;</td><td><del>Deleted Text</del></td><td>In-Line</td></tr>
          <tr><td>Inserted</td><td>&lt;ins&gt;Inserted Text&lt;/ins&gt;</td><td><ins>Inserted Text</ins></td><td>In-Line</td></tr>
          <tr><td>Quote</td><td>&lt;q&gt;Quote Text&lt;/q&gt;</td><td><q>Quote text</q></td><td>In-Line</td></tr>
          <tr><td>Block Quote</td><td>&lt;blockquote&gt;Block Quote Text&lt;/blockquote&gt;</td><td><blockquote>Block Quote Text</blockquote></td><td>Block</td></tr>
          <tr><td>Cite</td><td>&lt;cite&gt;Cited Text&lt;/cite&gt;</td><td><cite>Cited Text</cite></td><td>In-Line</td></tr>
          <tr><td>Bi-directional override</td><td>&lt;bdo dir="rtl"&gt;Bi-Directional Overridden Text&lt;/bdo&gt;</td><td><bdo dir="rtl">Bi-Directional Overridden Text</bdo></td><td>In-Line</td></tr>
          <tr><td>Preformatted</td><td>&lt;pre&gt;<pre>Pre    Formatted Text</pre>&lt;/pre&gt;</td><td><pre>Pre    Formatted Text</pre></td><td>In-Line</td></tr>
        </table>
        <h3>Symbols</h3>

      </div>
    );
  }
}

export default Text;
