import React from 'react';

class Attributes extends React.Component {
  render () {
    return (
      <div>
        <h2>Attributes</h2>
        <a href='https://www.w3schools.com/tags/ref_attributes.asp' target='_blank'
        >Ref sheet</a><br />
          <table>
            <tr>
              <th>Tag</th>
              <th>Specific Attribute</th>
              <th> Event Attributes</th>
            </tr>
            <tr>
              <td>html</td>
              <td>lang</td><td>
              </td></tr>
            <tr>
              <td>head</td>
              <td></td><td>
              </td></tr>
            <tr>
              <td>link</td>
              <td>rel, type, href, media</td>
              <td></td>
            </tr>
            <tr>
              <td>script</td>
              <td>type,src</td>
              <td></td>
            </tr>
            <tr>
              <td>meta</td>
              <td>charset</td>
              <td></td>
            </tr>
            <tr>
              <td>style</td>
              <td>type</td>
              <td></td>
            </tr>
            <tr>
              <td>title</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>body, nav, aside, footer, article, div, span, p</td>
              <td>background-color, margin, border, padding, font-family, float,
              width, color, background-image, background-repeat,
              background-position, clear, position, display, verticle-align</td>
              <td></td>
            </tr>
            <tr>
              <td>h1 to h6, em, strong, bold, sub, sup, small, mark, del,
              ins, q, cite, bdo, blockquote, pre</td>
              <td>color, font-family, font-style, font-weight, line-height,
              font-size, text-align, letter-spacing, text-decoration</td>
              <td></td>
            </tr>
            <tr>
              <td>a</td>
              <td>href, download, target, type, text-decoration, title</td>
              <td> onclick, onhover, link, hover, color, background </td>
            </tr>
            <tr>
              <td>img</td>
              <td>src, width, height, alt, z-index</td>
              <td></td>
            </tr>
            <tr>
              <td>audio controls</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>video</td>
              <td>controls, poster, autoplay, width, height, src, source</td>
              <td></td>
            </tr>
            <tr>
              <td>table</td>
              <td>caption-side, border-collapse,margin, padding, border</td>
              <td></td>
            </tr>
            <tr>
              <td>tr, th, td,</td>
              <td>background-color, rowspan</td>
              <td></td>
            </tr>
            <tr>
              <td>ol, ul, li</td>
              <td>list-style, list-style-type, list-style-image</td>
              <td></td>
            </tr>
            <tr>
              <td>br</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>hr</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>iframe</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>input</td>
              <td>type, name, value, min, max, step, placeholder, required, checked</td>
              <td></td>
            </tr>
            <tr>
              <td>form</td>
              <td>action, method,</td>
              <td></td>
            </tr>
            <tr>
              <td>button</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>textarea</td>
              <td>name, rows, cols</td>
              <td></td>
            </tr>
            <tr>
              <td>Select</td>
              <td>multiple</td>
              <td></td>
            </tr>
          </table>
          <h3>Global Attributes</h3>
            <ul>
              <li>id=""</li>
              <li>class=""</li>
              <li>background-color, margin, border-width, border-style,
              border-color, padding, font-family,float, width, color, height</li>
            </ul>
      </div>
    );
  }
}

export default Attributes;
