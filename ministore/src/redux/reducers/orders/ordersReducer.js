import * as Actions from "../../../main/actionsType";
const initialState = [];
const ordersReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.CHECK_OUT_SUCCESS:
      console.log([...state, action.payload]);
      return [...state, action.payload];

    default:
      return [...state];
  }
};
export default ordersReducer;
