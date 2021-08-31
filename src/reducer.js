export const initialState = {
  isOpen: false,
  user: {},
  darkMode: false,
};

export const actionTypes = {
  TOGGLE_MENU: "TOGGLE_MENU",
  SET_USER: "SET_USER",
  SET_DARKMODE: "SET_DARKMODE",
};



// escucha si en algun punto de la manguera de datos, se han inyectado datos.
const reducer = (state, action) => {
  console.log(action)
  switch (action.type) {
    case actionTypes.TOGGLE_MENU:
      return {
        ...state,
        isOpen: action.isOpen,
      };
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      };
    case actionTypes.SET_DARKMODE:
      return {
        ...state,
        darkMode: action.darkMode
      };
    default:
      return state;
      }
    };

export default reducer;
