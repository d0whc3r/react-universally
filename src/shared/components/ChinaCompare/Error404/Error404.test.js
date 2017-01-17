/* @flow */

import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jquery';
import TestUtils from 'react-addons-test-utils';

import { Error404 } from './Error404';

describe('<Error404 />', () => {
  it('should exist', () => {
    expect(Error404).toExist();
  });
  it('renders without crashing and search for p element', () => {
    const app = TestUtils.renderIntoDocument(<Error404 />);
    const $el = $(ReactDOM.findDOMNode(app));
    expect($el.find('p').length).toBe(1);
  });
});
