import React from 'react';

class Paycheck extends React.Component {
  state ={
    hourlyWage: 20,
    hoursWorked: 110,
    insurance: 140,
    setAside: 1500,
    effectiveHours:125,
    espp:.15,
    taxes: 0,
  }
  changeHourlyWage = (event) => {
    const wage = parseFloat(event.target.value,10);
    return this.setState({hourlyWage:wage});
  }
  changeHoursWorked = (event) => {
    const hours = parseInt(event.target.value,10);
    const bigHours = ((hours - 80) * 1.5) +80;
    return (
      this.setState({hoursWorked:hours}),
      this.setState({effectiveHours:((hours - 80) * 1.5) +80})
    );
  }
  changeinsurance = (event) => {
    const insuranceCost =parseInt(event.target.value,10);
    return this.setState({insurance:insuranceCost});
  }
  changeSetAside = (event) => {
    const setAsideMoney = parseInt(event.target.value,10);
    return this.setState({setAside:setAsideMoney});
  }
  changeEspp = (event) => {
    const esppChange = parseFloat(event.target.value,10);
    return this.setState({espp:esppChange});
  }
  calculateTaxes = () => {
    const grossTaxable =(this.state.hourlyWage * this.state.effectiveHours * 26) - 24400;

  }
  render () {
    return (
      <div>
        Shift:<br />
        <input type="radio" name="shift" value="day" />Day<br />
        <input type="radio" name="shift" value="night" /> Night<br />
        <input type="radio" name="shift" value="graveyard" /> Graveyard<br />
        Hourly Pay:
        <input type='number' value={this.state.hourlyWage} onChange={this.changeHourlyWage}/><br />
        Hours Worked:
        <input type='number' value={this.state.hoursWorked} onChange={this.changeHoursWorked}/><br />
        Cost of Insurance:
        <input type='number' value={this.state.insurance} onChange={this.changeinsurance}/><br />
        Amount to set aside:
        <input type='number' value={this.state.setAside} onChange={this.changeSetAside}/><br />
        ESPP percentage:
        <input type='number' value={this.state.espp} onChange={this.changeEspp}/><br />


        <table>
          <tr>
            <td><strong>Wage:</strong></td>
            <td>{this.state.hourlyWage}</td>
            <td><strong>Shift Wage:</strong></td>
            <td>{this.state.hourlyWage * 1.085}</td>
          </tr>
          <tr>
            <td><strong>Hours:</strong></td>
            <td>{this.state.hoursWorked}</td>
            <td><strong>Effective Hours:</strong></td>
            <td>{this.state.effectiveHours}</td>
          </tr>
          <tr>
            <td><strong>Insurance:</strong></td>
            <td>{this.state.insurance}</td>
            <td><strong>ESPP:</strong></td>
            <td>{(this.state.hourlyWage * this.state.effectiveHours) * this.state.espp}</td>
          </tr>
          <tr>
            <td><strong>Gross Income:</strong></td>
            <td>{this.state.hourlyWage * this.state.effectiveHours}</td>
            <td><strong>Net Income:</strong></td>
            <td>{(((this.state.hourlyWage * this.state.effectiveHours) - this.state.insurance) * (1-this.state.taxes)) - (this.state.hourlyWage * this.state.effectiveHours) * this.state.espp}</td>
          </tr>
          <tr>
            <td><strong>Projected annual Gross:</strong></td>
            <td>{this.state.hourlyWage * this.state.effectiveHours * 26}</td>
            <td><strong>Projected taxable:</strong></td>
            <td>{(this.state.hourlyWage * this.state.effectiveHours * 26) - 24400}</td>
          </tr>
          <tr>
            <td><strong>Taxes paid:</strong></td>
            <td>{this.calculateTaxes}</td>
            <td><strong>Tax Rate:</strong></td>
            <td>{}</td>
          </tr>
        </table>
        Bills:<br />
        After Bills:<br />
        Amount paid to interest:<br />
        Amount paid to principle:<br />
        annual stuff:
      </div>
      //Need to get the tax set up and insurance corrected
      //Radio button needs to adjust Shift Wage
      //Need to add bills afterwards
      //Start building money spent on interest etc.
    );
  }
}

export default Paycheck;
