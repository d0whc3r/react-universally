/* @flow */

import React, { Component } from 'react';
import { Container, Header, Grid, Divider } from 'semantic-ui-react';

import Logo from './Logo';
// import Menu from './Menu';

export class CustomHeader extends Component {
  render() {
    return (
      <div className="ui inverted vertical masthead center aligned segment">
        <Container>
          <Header inverted={true}>
            ChinaCompare
            <Header inverted={true} sub={true}>Price comparator</Header>
          </Header>
        </Container>
      </div>
    );
  }
}

export default CustomHeader;
