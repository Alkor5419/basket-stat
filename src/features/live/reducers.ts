import {
  LiveMathesDispatchTypes,
  FETCH_LIVE_FAILURE,
  FETCH_LIVE_SUCCESS,
  FETCH_LIVE_REQUEST,
} from "./types";

interface InitialStateI {
  loading: boolean;
}

const initialState: InitialStateI = {
  loading: false,
};

export const liveReducer = (
  state: InitialStateI = initialState,
  action: LiveMathesDispatchTypes
) => {
  switch (action.type) {
    case FETCH_LIVE_FAILURE:
      return { ...state, loading: false };
    case FETCH_LIVE_SUCCESS:
      return { ...state, loading: false };
    case FETCH_LIVE_REQUEST:
      return { ...state, loading: true };
    default:
      return state;
  }
};
