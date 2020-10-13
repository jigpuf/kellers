import React from 'react';

const Portal = ()=> {
    return (
      <div>
        <h2>Portal</h2>
         <h3>Purpose of training</h3>
          <ol>
            <li>Know fields in Part Portal owned by engineering</li>
              <ul>
                <li>Design Related Quality Clauses and Commodity Codes</li>
                <li>Trace Profile Selection</li>
                <li>First Article Inspection(FAI)</li>
                <li>Dimensiona validation required</li>
                <li>Delegate PO approval</li>
              </ul>
            <li>Effects of each setting</li>
            <li>Search/Update parts you own</li>
          </ol>
        <h3>Course Topics</h3>
          <ol>
            <li><a href='#quality'>Quality Clauses and Commodity Codes</a></li>
            <li>Trace profile Selection</li>
            <li>Delegation of PO approval flag</li>
            <li>First Article inspection</li>
            <li>Dimentional Validation Flag</li>
            <li>Field Verification, Linked Specs, Fracture Control</li>
            <li>Part Portal Report</li>
            <li>Next Steps</li>
          </ol>
        <h3 id='quality'>Quality Clauses and Commodity Codes</h3>
          Purpose of commodity Codes is to group similar parts together to
          better assign baseline Quality Clauses, lead times, buyers, etc.<br />
          <h4>Parts of Comodity Codes</h4>
            <ol>
              <li>Main Commodity</li>
              <li>Sub Commodity, which further refines and classifies commodity</li>
              Part attribute, not purpose or assembly
            </ol>
            Commodity code is automated, but must be confirmed.  Commodity code
            can be found under Part Portal &rarr; Supply Chain<br />
          <table>
            <tr><th>Code</th><th>Is</th><th>Isn't</th></tr>
            <tr>
              <td>Machined Part</td>
              <td>Company part that requires Machining</td>
              <td>comercial Part, assembly of machined parts</td>
            </tr>
            <tr>
              <td>Composite Component or Assembly</td>
              <td>Part or assembly made of Composite Materials</td>
              <td>Raw Material</td>
            </tr>
            <tr>
              <td>Casting</td>
              <td>Company casting to be machined</td>
              <td>Machined, assemby of cast parts, off shelf part</td>
            </tr>
            <tr>
              <td>Forging</td>
              <td>Forged material to be machined</td>
              <td>machined parts, assembly of forged parts, commercial part</td>
            </tr>
            <tr>
              <td>Hardware - Type X</td>
              <td>Company or commercial fastener</td>
              <td>Machined part with threads</td>
            </tr>
            <tr>
              <td>Seal</td>
              <td>Company or commercial seal, o-ring, gasket</td>
              <td>Chemical adhesive</td>
            </tr>
          </table>
          <h4>Quality Clauses</h4>
            Requirements that go to supplier in Purchase Order(PO)<br />
            874 is controlling document<br />
            Found in Part Portal &rarr; Engineering<br />
            Selection is automated but needs to be approved<br />
            Add and delete clauses as needed<br />
          <h4>Popular Quality Clauses</h4>
            10a-Raw Material Traceability<br />
            10b-Raw Material Test Results<br />
          <h4>Dimension-Related Quality Clauses</h4>
            13-Dimensional Inspection Acceptance Report<br />
            slide 16
      </div>
    );
  }

export default Portal;
