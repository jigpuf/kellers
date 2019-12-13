import React from 'react';

const DEEP_CYCLE_SAFETY_FACTOR = 2.5;
const INVERTER_INEFICIENCY_FACTOR = 1.5;

class Solar extends React.Component {
  state ={
    SunHours: 10,
    CloudyDays: 1,
    LengthOfWire: 15,
    appliances: [
      {
        name: 'lights',
        number: 3,
        power: 6,
        hrs: .5,
      },
      {
        name: 'pumps',
        number: 2,
        power: 4,
        hrs: 1,
      },
      {
        name: 'controller',
        number: 1,
        power: .5,
        hrs: 24,
      },
      {
        name: 'fans',
        number: 1,
        power: 30,
        hrs: 0,
      },
    ],
  }

  updateValue = event => {
    const key = event.target.name;
    const value = event.target.value;
    return this.setState({[key]: value});
  }
  updateAppliance = index => {
    return event => {
      const appliances = this.state.appliances;
      const key = event.target.name;
      const value = event.target.value;
      appliances[index][key] = value;
      return this.setState({appliances});
    }
  }

  getBatteryCapacity(){
    const applianceArr = this.state.appliances;
    const dailyConsumption = applianceArr.reduce((total, current) => {
      return total + (current.power * current.number * current.hrs);
    }, 0);
    return (dailyConsumption * DEEP_CYCLE_SAFETY_FACTOR) + (dailyConsumption * this.state.CloudyDays);
  }
  getInverterSize(){
    const applianceArr = this.state.appliances;
    const peakConsumption = applianceArr.reduce((total, current) => {
      return total + (current.power * current.number);
    }, 0);
    return peakConsumption * INVERTER_INEFICIENCY_FACTOR;
  }

  render () {
    const applianceArr = this.state.appliances || [];
    const appliances = applianceArr.map((appliance, index) => {
      return (
        <tr key={index}>
          <td>
            {appliance.name}
          </td>
          <td>
            <input name="number" type='number' value={appliance.number}
            onChange={this.updateAppliance(index)}/>
          </td>
          <td>
            <input name="power" type='number' value={appliance.power}
            onChange={this.updateAppliance(index)}/>
          </td>
          <td>
            <input name="hrs" type='number' value={appliance.hrs}
            onChange={this.updateAppliance(index)}/>
          </td>
        </tr>
      )
    });

    return (
      <div>

      <table>
        <tbody>
          <tr>
            <th>
              Hours of Daily Sun
            </th>
            <td>
              <input name='SunHours' type='number' value={this.state.SunHours}
              onChange={this.updateValue}/>
            </td>
          </tr>
          <tr>
            <th>
              Consecutive cloudy days
            </th>
            <td>
              <input name="CloudyDays" type='number' value={this.state.CloudyDays}
              onChange={this.updateValue}/>
            </td>
          </tr>
          <tr>
            <th>
              Length of wire
            </th>
            <td>
              <input name="LengthOfWire" type='number' value={this.state.LengthOfWire}
              onChange={this.updateValue}/>
            </td>
          </tr>
        </tbody>
      </table>
      <br /><br />

      <table>
        <thead>
          <tr>
            <th>Appliance</th>
            <th>Number</th>
            <th>Watts</th>
            <th>Hrs/Day</th>
          </tr>
        </thead>
        <tbody>
        {appliances}
        </tbody>
      </table>
      <br /><br />

      <table>
        <tbody>
          <tr>
            <th>
              Size of Inverter
            </th>
            <td>
              {`${Math.round(this.getInverterSize())} Watts`}
            </td>
          </tr>
          <tr>
            <th>
              Battery Capacity
            </th>
            <td>
              {`${Math.round(this.getBatteryCapacity())} Watt-Hours /
              ${Math.round(this.getBatteryCapacity()/12)} amp-Hours`}
            </td>
          </tr>
          <tr>
            <th>
              Panels needed
            </th>
            <td>
              {`${Math.round(this.getBatteryCapacity() / this.state.SunHours)} Watts`}
            </td>
          </tr>
          <tr>
            <th>Charge Controller</th>
            <td>{this.getBatteryCapacity()}</td>
          </tr>
        </tbody>
      </table>
      <br />< br />
      </div>
    );
  }
}

export default Solar;
