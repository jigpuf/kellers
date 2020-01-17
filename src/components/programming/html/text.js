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
        <h3>Escape Characters</h3>
        <div className='twoColumn'>
        <table>
          <tr><th>Name</th><th>Entity</th><th>Decimal</th></tr>
          <tr><td>&lt;</td><td>&amp;lt;</td><td>&amp;#60;</td></tr>
          <tr><td>&gt;</td><td>&amp;gt;</td><td>&amp;#62;</td></tr>
          <tr><td>&Omega;</td><td>&amp;Omega;</td><td>&amp;#937;</td></tr>
          <tr><td>backtic `</td><td></td><td>&amp;#768;</td></tr>
          <tr><td>&#33;</td><td></td><td>&amp;#33;</td></tr>
          <tr><td>&#36;</td><td></td><td>	&amp;#36;</td></tr>
          <tr><td>&amp;</td><td>&amp;amp;</td><td>&amp;#38;</td></tr>
          <tr><td>&#40;</td><td></td><td>&amp;#40;</td></tr>
          <tr><td>&#41;</td><td></td><td>&amp;#41;</td></tr>
          <tr><td>&#123;</td><td></td><td>&amp;#123;</td></tr>
          <tr><td>&#124;</td><td></td><td>&amp;#124;</td></tr>
          <tr><td>&#35;</td><td></td><td>&amp;#35;</td></tr>
          <tr><td>&#37;</td><td></td><td>&amp;#37;</td></tr>
          <tr><td>&#42;</td><td></td><td>&amp;#42;</td></tr>
          <tr><td>&#43;</td><td></td><td>&amp;#43;</td></tr>
          <tr><td>&#44;</td><td></td><td>&amp;#44;</td></tr>
          <tr><td>&#47;</td><td></td><td>&amp;#47;</td></tr>
          <tr><td>&#58;</td><td></td><td>&amp;#58;</td></tr>
          <tr><td>&#59;</td><td></td><td>&amp;#59;</td></tr>
          <tr><td>&#61;</td><td></td><td>&amp;#61;</td></tr>
          <tr><td>&#225;</td><td>&amp;aacute;</td><td>&amp;#225;</td></tr>
          <tr><td>&#233;</td><td>&amp;eacute;</td><td>&amp;#233;</td></tr>
          <tr><td>&#237;</td><td>&amp;iacute;</td><td>&amp;#237;</td></tr>
          <tr><td>&#243;</td><td>&amp;oacute;</td><td>&amp;#243;</td></tr>
          <tr><td>&#250;</td><td>&amp;uacute;</td><td>&amp;#250;</td></tr>
          <tr><td>&#241;</td><td>&amp;ntilde;</td><td>&amp;#241;</td></tr>
          <tr><td>&#252;</td><td>&amp;uuml;</td><td>&amp;#252;</td></tr>
          <tr><td>&#181;</td><td>&amp;micro;</td><td>&amp;#181;</td></tr>
          <tr><td>&#8594;</td><td>&amp;rarr;</td><td>&amp;#8594;</td></tr>
          <tr><td>Blank Space</td><td>&amp;nbsp;</td><td>&amp;#160;</td></tr>
        </table>
        </div>
        <h3>Commenting in html</h3>
        &lt;&#33;-- all my comments here  --&gt;
      </div>
    );
  }
}

export default Text;
