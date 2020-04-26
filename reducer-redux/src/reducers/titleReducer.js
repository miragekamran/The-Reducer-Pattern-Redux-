export const initialState = {
  title: "This is the initial title",
  editing: true,
};

export const titleReducer = (state = initialState, action) => {
  switch (action.type) {
    case "EDITING":
        console.log('EDITING')
      return { ...state, editing: true };
      case 'UPDATE_TITLE':
          console.log('UPDATING TITLE')
          return {...state, title: action.payload, editing: false}
    default:
      return state;
  }
};
