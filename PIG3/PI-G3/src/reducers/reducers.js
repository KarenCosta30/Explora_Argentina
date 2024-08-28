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
          case "ADD_FAVORITES":
              // Verificar si el favorito ya está en la lista
              // some => Este método prueba si al menos un elemento en el array cumple con la condición implementada por la función proporcionada.
              /* fav es cada elemento del array state.favorites mientras .some() itera sobre ellos.
              La condición que se evalúa es fav.id === action.payload.id, lo que significa que se está comprobando
              si el id del elemento actual (fav) es igual al id del payload que se ha pasado en la acción. */
                const isAlreadyFavorite = state.favorites.some(fav => fav.id === action.payload.id); 
                if (isAlreadyFavorite) {
                    return state; // Si ya está en favoritos, no hacer nada
                }
                return { ...state, favorites: [...state.favorites, action.payload] };
           case "DELETE_FAVORITES":
            return {...state, favorites:state.favorites.filter(fav => fav.id !== action.payload.id)};
      default:
          return state;
  }
};
