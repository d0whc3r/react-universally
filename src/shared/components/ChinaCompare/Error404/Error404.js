/* @flow */

import React, { Component } from 'react';
import { Message, Grid } from 'semantic-ui-react';

export class Error404 extends Component {
  render() {
    return (
      <Grid columns={4} centered={true}>
        <Grid.Row>
          <Grid.Column>
            <Message
              icon='warning'
              header='ERROR 404'
              content='Page not found'
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Error404;
