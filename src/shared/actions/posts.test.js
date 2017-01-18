import expect from 'expect';

import * as actions from './posts';

describe('Actions', () => {
  it('should get FETCHING_POST', () => {
    const act = {
      type: 'FETCHING_POST',
      payload: 123
    };
    expect(actions.fetching(act.payload)).toEqual(act);
  });
  it('should get FETCHED_POST', () => {
    const post = {
      id: 123,
      title: 'the title',
      body: 'the body',
    };
    const act = {
      type: 'FETCHED_POST',
      payload: post
    };
    expect(actions.fetched(act.payload)).toEqual(act);
  });
});
