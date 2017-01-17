/* @flow */

import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jquery';
import TestUtils from 'react-addons-test-utils';

import About from './About';

describe('<About />', () => {
  it('should exist', () => {
    expect(About).toExist();
  });
  it('renders without crashing and search for p element', () => {
    const app = TestUtils.renderIntoDocument(<About/>);
    const $el = $(ReactDOM.findDOMNode(app));
    expect($el.find('p').length).toBe(1);
  });
});
