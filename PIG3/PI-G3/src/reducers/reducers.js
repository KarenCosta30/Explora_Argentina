export const reducer = (state, action) => {
  switch (action.type) {
    case "GET_PRODUCTOS":
      return { ...state, tour: action.payload };
  
      case "GET_CATEGORIES":
        return{...state,categories:action.payload};
        case "SET_USER":
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
      case "SET_USER_EMAIL":
          return {
              ...state,
              userEmail: action.payload
          };
          case "SET_USER_ADMINISTRATOR":
            return {
              ...state,
              userAdministrator: action.payload
            };
      default:
          return state;
  }
};
