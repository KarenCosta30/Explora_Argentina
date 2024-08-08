export const reducer = (state, action) => {
  switch (action.type) {
    case "GET_PRODUCTOS":
      return { ...state, tour: action.payload };
    default:
      return state;
  }
};
