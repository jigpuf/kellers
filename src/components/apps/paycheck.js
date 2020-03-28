import React from 'react';

class Paycheck extends React.Component {
  state ={
    hourlyWage: 35.5,
    hoursWorked: 110,
    insurance: 400,
    setAside: 1500,
    effectiveHours:125,
    espp:.15,
    taxes: .11,
    selectedOption: 'night',
    shiftWage: 1.085,
    mortgage:1800,
    carInsurance:100,
    electricity:200,
    water:45,
    gas:50,
    internet:95,
    fuel:250,
    cellPhones:185,
    carPayment:800,
    Hulu:13,
    Netflix:15,
    Amazon:15,
    Zander:13,
    Gym:45,
    AtmInternet:155,
  }
  changeHourlyWage = (event) => {
    const wage = parseFloat(event.target.value,10);
    return this.setState({hourlyWage:wage});
  }
  changeHoursWorked = (event) => {
    const hours = parseInt(event.target.value,10);
    const bigHours = ((hours - 80) * 1.5) +80;
    return (
      this.setState({hoursWorked:hours,effectiveHours:((hours - 80) * 1.5) +80})
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
    const grossTaxable =(this.state.hourlyWage * this.state.effectiveHours * 26) - 24800;

  }
  shiftWageChanger = () => {
    if(this.state.selectedOption === "night"){ return this.setState({shiftWage:1.085})};
    if(this.state.selectedOption === "day"){ return this.setState({shiftWage:1.0})};
    if(this.state.selectedOption === "graveyard"){ return this.setState({shiftWage:1.1})};
  }
  handleOptionChange = (event) => {
    return (

      this.setState({selectedOption:event.target.value},this.shiftWageChanger)
    );
//it seems to grab the last value, not the current 1
  }
  render () {
    return (
      <div>
        Shift:<br />
        <form>
          <input type="radio" name="shift" value="day" onChange={this.handleOptionChange}
          checked={this.state.selectedOption === 'day'}/>Day<br />
          <input type="radio" name="shift" value="night" onChange={this.handleOptionChange}
          checked={this.state.selectedOption === 'night'} /> Night<br />
          <input type="radio" name="shift" value="graveyard" onChange={this.handleOptionChange}
          checked={this.state.selectedOption === 'graveyard'}/> Graveyard
        </form>
        <table>
          <tr><td>Hourly Pay</td><td><input type='number'
          value={this.state.hourlyWage} onChange={this.changeHourlyWage}/></td></tr>
          <tr><td>Hours Worked</td><td><input type='number'
          value={this.state.hoursWorked} onChange={this.changeHoursWorked}/></td></tr>
          <tr><td>Cost of Insurance</td><td><input type='number'
          value={this.state.insurance} onChange={this.changeinsurance}/></td></tr>
          <tr><td>Amount to set aside</td><td><input type='number'
          value={this.state.setAside} onChange={this.changeSetAside}/></td></tr>
          <tr><td>ESPP percentage</td><td><input type='number'
          value={this.state.espp} onChange={this.changeEspp}/></td></tr>
        </table><br />

        <table>
          <tr>
            <td><strong>Wage:</strong></td>
            <td>{this.state.hourlyWage}</td>
            <td><strong>Shift Wage:</strong></td>
            <td>{parseFloat(this.state.hourlyWage * this.state.shiftWage).toFixed(2)}</td>
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
            <td>{parseInt(this.state.hourlyWage * this.state.effectiveHours * this.state.shiftWage * this.state.espp)}</td>
          </tr>
          <tr>
            <td><strong>Gross Income:</strong></td>
            <td>{parseInt(this.state.hourlyWage * this.state.effectiveHours * this.state.shiftWage)}</td>
            <td><strong>Take Home:</strong></td>
            <td>{parseInt((((this.state.hourlyWage * this.state.effectiveHours
              * this.state.shiftWage) - this.state.insurance)
              * (1-this.state.taxes)) - (this.state.hourlyWage
              * this.state.effectiveHours * this.state.shiftWage) * this.state.espp)}</td>
          </tr>
          <tr>
            <td><strong>Projected annual Gross:</strong></td>
            <td>{parseInt(this.state.hourlyWage * this.state.effectiveHours * this.state.shiftWage * 26)}</td>
            <td><strong>Projected taxable:</strong></td>
            <td>{parseInt((this.state.hourlyWage * this.state.effectiveHours * this.state.shiftWage * 26) - 24400)}</td>
          </tr>
          <tr>
            <td><strong>Annual ESPP</strong></td>
            <td>{parseInt(this.state.hourlyWage * this.state.effectiveHours * this.state.shiftWage * 26 * this.state.espp * 1.176)}</td>
            <td><strong>Taxes:</strong></td>
            <td>{parseInt(this.state.hourlyWage * this.state.effectiveHours * this.state.shiftWage * 26 * this.state.taxes)}</td>
          </tr>
        </table>
        <br />< br />
        <h3>Monthly</h3>
        Take home:
        <table>
          <tr><th>Bill</th><th>Amount</th></tr>
          <tr><td>Mortgage</td><td>{this.state.mortgage}</td></tr>
          <tr><td>Car Insurance</td><td>{this.state.carInsurance}</td></tr>
          <tr><td>Electricity</td><td>{this.state.electricity}</td></tr>
          <tr><td>Water</td><td>{this.state.water}</td></tr>
          <tr><td>Gas</td><td>{this.state.gas}</td></tr>
          <tr><td>Internet</td><td>{this.state.internet}</td></tr>
          <tr><td>Fuel</td><td>{this.state.fuel}</td></tr>
          <tr><td>Cell Phones</td><td>{this.state.cellPhones}</td></tr>
          <tr><td>Car Payment</td><td>{this.state.carPayment}</td></tr>
          <tr><td>Total</td><td>{this.state.mortgage + this.state.carInsurance
            + this.state.electricity + this.state.water + this.state.gas
            + this.state.internet + this.state.fuel + this.state.cellPhones
            + this.state.carPayment}</td></tr>
          <tr><td>After Bills</td><td>{parseInt((((((this.state.hourlyWage * this.state.effectiveHours
            * this.state.shiftWage) - this.state.insurance)
            * (1-this.state.taxes)) - (this.state.hourlyWage
            * this.state.effectiveHours * this.state.shiftWage) * this.state.espp))*2)-(this.state.mortgage + this.state.carInsurance
              + this.state.electricity + this.state.water + this.state.gas
              + this.state.internet + this.state.fuel + this.state.cellPhones
              + this.state.carPayment)}</td></tr>
        </table>
      </div>
    );
  }
}

export default Paycheck;
