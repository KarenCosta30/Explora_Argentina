export const reducer = (state, action) => {
  switch (action.type) {
    case "GET_PRODUCTOS":
      return { ...state, tour: action.payload };
      case "SET_USERS":
        return{...state,user:action.payload};
      case "SET_USER_ACTIVE":
          return {
              ...state,
              userActive: action.payload
          };
      case "SET_USER_NAME":
          return {
              ...state,
              userName: action.payload
          };
      case "SET_USER_SURNAME":
          return {
              ...state,
              userSurname: action.payload
          };
      default:
          return state;
  }
};
