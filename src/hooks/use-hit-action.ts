import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

export const useHitAction = (): Function => {
  const dispatch = useDispatch();

  return useCallback(
    (action) => {
      if (!action) return;
      !action?.type
        ? Object.values(action).map(([type, payload]) => dispatch({ type, payload }))
        : dispatch({ type: action.type, payload: action.payload });
    },
    [dispatch]
  );
};

/**
 mulitple action usage:
 hitAction({
      firstReq: [actions.WATCH_GET_PROFILE],
      secondReq: [
        actions.WATCH_TICKETS,
        {
          type: 'read',
        },
      ],
    });

 */
