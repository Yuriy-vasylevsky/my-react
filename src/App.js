import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import Section from './Components/Section/Section ';
// import IconSvg from './Components/IconsSvg/IconsSvg';
import { Button, DatePicker, version } from 'antd';
import 'antd/dist/antd.css';

export default class App extends Component {
  state = {};

  render() {
    return (
      <Section>
        {/* <IconSvg
          name="spotify-icon"
          color="green"
          height="30"
          width="30"
          className="icon-2"
        />
        <IconSvg name="hero" color="green" height="300" /> */}

        <DatePicker />
        <Button type="primary" style={{ marginLeft: 8 }}>
          Primary Button
        </Button>
      </Section>
    );
  }
}
