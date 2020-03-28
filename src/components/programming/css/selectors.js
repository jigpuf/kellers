import React from 'react';

class Selectors extends React.Component {
  render () {
    return (
      <div>
        <h2>Selectors</h2>
          <ol>
            <li>Select by Id</li>
            <li>Select By class</li>
            <li>Select by tag</li>
            <li>Specificity</li>
            <li>Descendant Selector </li>
            <li>Grouping Selector </li>
            <li>Pseudo Classes</li>
          </ol>
        <h3>Select by Id</h3>
          &#35;scripture &#123;<br />
          &#125;<br />
          <hr />
        <h3>Select by Class</h3>
          .scripture &#123;<br />
          &#125;<br />
        <hr />
        <h3>Select by Tag</h3>
          h2 &#123;<br />
          &#125;<br />
          <hr />
        <h3>Specificity</h3>
          <ol>
            <li>id</li>
            <li>class</li>
            <li>tag</li>
          </ol>
          The lower number here will take precedence.  If two selectors have
          equally specific rules, the last one in page wins.
          <hr />
        <h3>Descendant Selector</h3>
          .true p .scripture &#123;<br />
          &#125;<br />
          The space says the scripture class found in a paragraph in a true class<br />
          <hr />
        <h3>Grouping Selectors</h3>
          h1, h2 &#123;<br />
          &#125;<br />
          <hr />
        <h3>Pseudo classes</h3>
          based on event states<br />
          a:hover &#123;<br />
          &#125;<br />

      </div>
    );
  }
}

export default Selectors;
