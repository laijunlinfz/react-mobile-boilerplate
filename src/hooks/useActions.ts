import { useMemo } from 'react';
import { bindActionCreators, ActionCreatorsMapObject } from 'redux';
import { useDispatch } from 'react-redux';

type Params = ActionCreatorsMapObject<any>;

export default function useActions(actionCreators: Params): any {
  const dispatch = useDispatch();
  return useMemo(() => {
    if (Array.isArray(actionCreators)) {
      return actionCreators.map(creator =>
        bindActionCreators(creator, dispatch)
      );
    }
    return bindActionCreators(
      actionCreators as ActionCreatorsMapObject,
      dispatch
    );
  }, [dispatch, actionCreators]);
}
