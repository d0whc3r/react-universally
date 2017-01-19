/* @flow */

import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';

import logo from './logo.png';

export class Logo extends Component {
  render() {
    return (
      <Image src={logo} alt="Logo" size="tiny" verticalAlign="middle" shape="circular"/>
    );
  }
}

export default Logo;
