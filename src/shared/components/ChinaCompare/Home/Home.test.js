/* @flow */

import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jquery';
import TestUtils from 'react-addons-test-utils';

import Home from './Home';

describe('<Home />', () => {
  it('should exist', () => {
    expect(Home).toExist();
  });
  it('renders without crashing and search for h2 element', () => {
    const app = TestUtils.renderIntoDocument(<Home/>);
    const $el = $(ReactDOM.findDOMNode(app));
    expect($el.find('h2').length).toBe(1);
  });
});
