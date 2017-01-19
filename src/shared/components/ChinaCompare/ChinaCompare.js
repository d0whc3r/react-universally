/* @flow */

import React, { Component } from 'react';
import { Match, Miss } from 'react-router';
import Helmet from 'react-helmet';
import { CodeSplit } from 'code-split-component';

import 'normalize.css/normalize.css';
import '../../../../semantic/dist/semantic.min.css';
import { safeConfigGet } from '../../utils/config';
import './globals.scss';
import Error404 from './Error404';
import Header from './Header';

export class ChinaCompare extends Component {
  render() {
    return (
      <div className="pusher">
        {/*
         All of the following will be injected into our page header.
         @see https://github.com/nfl/react-helmet
         */}
        <Helmet
          htmlAttributes={safeConfigGet(['htmlPage', 'htmlAttributes'])}
          titleTemplate={safeConfigGet(['htmlPage', 'titleTemplate'])}
          defaultTitle={safeConfigGet(['htmlPage', 'defaultTitle'])}
          meta={safeConfigGet(['htmlPage', 'meta'])}
          link={safeConfigGet(['htmlPage', 'links'])}
          script={safeConfigGet(['htmlPage', 'scripts'])}
        />
        <Header />
        <div className="ui vertical stripe segment">
          <div className="ui middle aligned stackable grid container">
            <div className="row">

              <Match
                exactly
                pattern="/"
                render={routerProps =>
          <CodeSplit chunkName="home" modules={{ Home: require('./Home') }}>
            { ({ Home }) => Home && <Home {...routerProps} /> }
          </CodeSplit>
              }
              />

              <Match
                pattern="/about"
                render={routerProps =>
          <CodeSplit chunkName="about" modules={{ About: require('./About') }}>
            { ({ About }) => About && <About {...routerProps} /> }
          </CodeSplit>
              }
              />

              <Miss component={Error404}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ChinaCompare;
