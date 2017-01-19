/* @flow */

import React, { Component } from 'react';
import { Container, Header, Grid, Divider } from 'semantic-ui-react';

import Logo from './Logo';
// import Menu from './Menu';

export class CustomHeader extends Component {
  render() {
    return (
      <div className="ui inverted vertical masthead center aligned segment">
        <Grid columns={2} relaxed={true}>
          <Grid.Column>
            <Container>
              <Logo/>
            </Container>
          </Grid.Column>
          <Grid.Column>
            <Container>
              <Header inverted={true}>ChinaCompare</Header>
              <Header inverted={true} sub={true}>Price comparator</Header>
            </Container>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default CustomHeader;
