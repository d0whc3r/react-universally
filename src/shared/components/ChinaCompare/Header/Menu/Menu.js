/* @flow */

import React, { Component } from 'react';
import { Link } from 'react-router';

export class Menu extends Component {
  render() {
    return (
      <ul style={{ marginTop: '1rem' }}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/posts">Posts</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    );
  }
}

export default Menu;
