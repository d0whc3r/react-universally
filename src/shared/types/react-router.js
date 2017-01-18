/* @flow */

import type { Dispatch, ThunkAction } from './redux';

export type Location = { pathname: string };

export type TaskRouteLocals = {
  dispatch: Dispatch<ThunkAction>,
};

export default { Location, TaskRouteLocals };
