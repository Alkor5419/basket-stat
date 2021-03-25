const initialState = {};

export const liveReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case typeName:
      return { ...state, ...payload };

    default:
      return state;
  }
};
