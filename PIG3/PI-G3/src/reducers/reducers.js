export const reducer = (state, action) => {
  switch (action.type) {
    case "GET_PRODUCTOS":
      return { 
        ...state, 
        tour: Array.isArray(action.payload) ? action.payload : [] // Verifica que sea un array
      };

      case "ADD_PRODUCTO":
  return {
    ...state,
    tour: [...state.tour, action.payload] // Agrega el nuevo tour al estado existente
  };

    case "GET_CATEGORIES":
      return {
        ...state,
        categories: Array.isArray(action.payload) ? action.payload : [] // Verifica que sea un array
      };

    case "SET_USER":
      return { ...state, user: action.payload };

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
      const isAlreadyFavorite = state.favorites.some(fav => fav.id === action.payload.id);
      if (isAlreadyFavorite) {
        return state; // Si ya está en favoritos, no hacer nada
      }
      return { 
        ...state, 
        favorites: [...state.favorites, action.payload] 
      };

    case "DELETE_FAVORITES":
      return { 
        ...state, 
        favorites: state.favorites.filter(fav => fav.id !== action.payload.id) 
      };

    case "SET_FAVORITES":
      return { 
        ...state, 
        favorites: Array.isArray(action.payload) ? action.payload : [] // Verifica que sea un array
      };

    default:
      return state;
}
};

