import React from 'react';

class Solar extends React.Component {
  state = {
    SunHours: 10,
    CloudyDays: 1,
    LentgthOfWire: 15,
    LightNumber: 3,
    LightPower: 6,
    LightHrs: .5,
    PumpNumber: 2,
    PumpPower: 4,
    PumpHrs: 1,
    ControlNumber: 1,
    ControlPower: .5,
    ControlHrs: 24,
    FanNumber: 1,
    FanPower: 30,
    FanHrs: 0,
  }

  changeSunHours = (event) => {
    const sunHours = event.target.value;
    return this.setState({
      SunHours: sunHours
    });
  }
  changeCloudyDays = (event) => {
    const cloudyDays = event.target.value;
    return this.setState({
      CloudyDays: cloudyDays
    });
  }
  changeLentgthOfWire = (event) => {
    const lentgthOfWire = event.target.value;
    return this.setState({
      LentgthOfWire: lentgthOfWire
    });
  }

  changeLightNumber = (event) => {
    const lightNumber = event.target.value;
    return this.setState({
      LightNumber: lightNumber
    });
  }
  changeLightPower = (event) => {
    const lightPower = event.target.value;
    return this.setState({
      LightPower: lightPower
    });
  }
  changeLightHrs = (event) => {
    const lightHrs = event.target.value;
    return this.setState({
      LightHrs: lightHrs
    });
  }
  changePumpNumber = (event) => {
    const pumpNumber = event.target.value;
    return this.setState({
      PumpNumber: pumpNumber
    });
  }
  changePumpPower = (event) => {
    const pumpPower = event.target.value;
    return this.setState({
      PumpPower: pumpPower
    });
  }
  changePumpHrs = (event) => {
    const pumpHrs = event.target.value;
    return this.setState({
      PumpHrs: pumpHrs
    });
  }
  changeControlNumber = (event) => {
    const controlNumber = event.target.value;
    return this.setState({
      ControlNumber: controlNumber
    });
  }
  changeControlPower = (event) => {
    const controlPower = event.target.value;
    return this.setState({
      ControlPower: controlPower
    });
  }
  changeControlHrs = (event) => {
    const controlHrs = event.target.value;
    return this.setState({
      ControlHrs: controlHrs
    });
  }
  changeFanNumber = (event) => {
    const fanNumber = event.target.value;
    return this.setState({
      FanNumber: fanNumber
    });
  }
  changeFanPower = (event) => {
    const fanPower = event.target.value;
    return this.setState({
      FanPower: fanPower
    });
  }
  changeFanHrs = (event) => {
    const fanHrs = event.target.value;
    return this.setState({
      FanHrs: fanHrs
    });
  }
  getBatteryCapacity() {
    return ((((this.state.LightPower * this.state.LightNumber * this.state.LightHrs) +
        (this.state.PumpNumber * this.state.PumpPower * this.state.PumpHrs) +
        (this.state.ControlNumber * this.state.ControlPower * this.state.ControlHrs) +
        (this.state.FanNumber * this.state.FanPower * this.state.FanHrs)) * 2.5) +
      (((this.state.LightPower * this.state.LightNumber * this.state.LightHrs) +
          (this.state.PumpNumber * this.state.PumpPower * this.state.PumpHrs) +
          (this.state.ControlNumber * this.state.ControlPower * this.state.ControlHrs) +
          (this.state.FanNumber * this.state.FanPower * this.state.FanHrs)) *
        (this.state.CloudyDays)));
  }
  getInverterSize() {
    return ((this.state.LightPower * this.state.LightNumber) +
      (this.state.PumpNumber * this.state.PumpPower) +
      (this.state.ControlNumber * this.state.ControlPower) +
      (this.state.FanNumber * this.state.FanPower)) * 1.5;
  }

  render() {
    return ( <
      div >

      <
      table >
      <
      tr >
      <
      th >
      Hours of Daily Sun <
      /th> <
      td >
      <
      input type = 'number'
      value = {
        this.state.SunHours
      }
      onChange = {
        this.changeSunHours
      }
      /> <
      /td> <
      /tr> <
      tr >
      <
      th >
      Consecutive cloudy days <
      /th> <
      td >
      <
      input type = 'number'
      value = {
        this.state.CloudyDays
      }
      onChange = {
        this.changeCloudyDays
      }
      /> <
      /td> <
      /tr> <
      tr >
      <
      th >
      Length of wire <
      /th> <
      td >
      <
      input type = 'number'
      value = {
        this.state.LentgthOfWire
      }
      onChange = {
        this.changeLentgthOfWire
      }
      /> <
      /td> <
      /tr> <
      /table> <
      br / > < br / >

      <
      table >
      <
      tr >
      <
      th > Appliance < /th> <
      th > Number < /th> <
      th > Watts < /th> <
      th > Hrs / Day < /th> <
      /tr> <
      tr >
      <
      td >
      <
      input type = 'text'
      value = 'Lights' / >
      <
      /td> <
      td >
      <
      input type = 'number'
      value = {
        this.state.LightNumber
      }
      onChange = {
        this.changeLightNumber
      }
      /> <
      /td> <
      td >
      <
      input type = 'number'
      value = {
        this.state.LightPower
      }
      onChange = {
        this.changeLightPower
      }
      /> <
      /td> <
      td >
      <
      input type = 'number'
      value = {
        this.state.LightHrs
      }
      onChange = {
        this.changeLightHrs
      }
      /> <
      /td> <
      /tr> <
      tr >
      <
      td >
      <
      input type = 'text'
      value = 'Pumps' / >
      <
      /td> <
      td >
      <
      input type = 'number'
      value = {
        this.state.PumpNumber
      }
      onChange = {
        this.changePumpNumber
      }
      /> <
      /td> <
      td >
      <
      input type = 'number'
      value = {
        this.state.PumpPower
      }
      onChange = {
        this.changePumpPower
      }
      /> <
      /td> <
      td >
      <
      input type = 'number'
      value = {
        this.state.PumpHrs
      }
      onChange = {
        this.changePumpHrs
      }
      /> <
      /td> <
      /tr> <
      tr >
      <
      td >
      <
      input type = 'text'
      value = 'Controller' / >
      <
      /td> <
      td >
      <
      input type = 'number'
      value = {
        this.state.ControlNumber
      }
      onChange = {
        this.changeControlNumber
      }
      /> <
      /td> <
      td >
      <
      input type = 'number'
      value = {
        this.state.ControlPower
      }
      onChange = {
        this.changeControlPower
      }
      /> <
      /td> <
      td >
      <
      input type = 'number'
      value = {
        this.state.ControlHrs
      }
      onChange = {
        this.changeControlHrs
      }
      /> <
      /td> <
      /tr> <
      tr >
      <
      td >
      <
      input type = 'text'
      value = 'Fans' / >
      <
      /td> <
      td >
      <
      input type = 'number'
      value = {
        this.state.FanNumber
      }
      onChange = {
        this.changeFanNumber
      }
      /> <
      /td> <
      td >
      <
      input type = 'number'
      value = {
        this.state.FanPower
      }
      onChange = {
        this.changeFanPower
      }
      /> <
      /td> <
      td >
      <
      input type = 'number'
      value = {
        this.state.FanHrs
      }
      onChange = {
        this.changeFanHrs
      }
      /> <
      /td> <
      /tr> <
      /table> <
      br / > < br / >

      <
      table >
      <
      tr >
      <
      th >
      Size of Inverter <
      /th> <
      td > {
        `${Math.round(this.getInverterSize())} Watts`
      } <
      /td> <
      /tr> <
      tr >
      <
      th >
      Battery Capacity <
      /th> <
      td > {
        `${Math.round(this.getBatteryCapacity())} Watt-Hours /
            ${Math.round(this.getBatteryCapacity()/12)} amp-Hours`
      } <
      /td> <
      /tr> <
      tr >
      <
      th >
      Panel Production <
      /th> <
      td > {
        `${Math.round(this.getBatteryCapacity() / this.state.SunHours)} Watts`
      } <
      /td> <
      /tr> <
      tr >
      <
      th > Charge Controller < /th> <
      td > {
        this.getBatteryCapacity()
      } < /td> <
      /tr> <
      /table> <
      br / > < br / >
      <
      h3 > Panel Arrangement < /h3> <
      h3 > Angle of Panel < /h3>
      Lattitude: 31.5 N <
      table >
      <
      tr > < th > Month < /th><th>Angle</th > < /tr> <
      tr > < td > Dec < /td><td>34</td > < /tr> <
      tr > < td > Jan / Nov < /td><td>42</td > < /tr> <
      tr > < td > Feb / Oct < /td><td>50</td > < /tr> <
      tr > < td > Mar / Sep < /td><td>58</td > < /tr> <
      tr > < td > Apr / Aug < /td><td>66</td > < /tr> <
      tr > < td > May / Jul < /td><td>74</td > < /tr> <
      tr > < td > Jun < /td><td>82</td > < /tr> <
      /table> <
      /div>
    );
  }
}

export default Solar;