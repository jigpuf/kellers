import React from 'react';

class Tax extends React.Component {
  render () {
    return (
      <div>
        <h3>Income</h3>
          <li>Pay at Job</li>
          <li>Income from business</li>
        <h3>Expense</h3>
          <li>Business Equipment</li>
          <li>Business Tax</li>
          <li>Business services</li>
          <li>Education</li>
          <li>Mortgage Interest</li>
          <li>Property Tax</li>
          <li>Home Improvement</li>
          <li>Business Losses</li>
          <li>Payout to rent space</li>
        <h3>Other deductions</h3>
          <li>Charitable Donations</li>
          <li>Children</li>
      </div>
    );
  }
}

export default Tax;
