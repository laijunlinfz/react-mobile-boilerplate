/**
 * types
 */

import * as Types from '@/store/actionTypes';

export interface HomeState {
  planNo: string;
}

export interface ActivityAction {
  type: typeof Types.GET_HOME_DATA;
  payload: Exclude<HomeState, 'activityPageSortType'>;
}

// export type ActivityAction = GetActivity | SetSortType;
