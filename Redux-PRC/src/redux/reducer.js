import { actionsToDo } from "./action";
export const intialState = {
  allUserInfo: [],
};

export function reducer(state = intialState, action) {
  switch (action.type) {
    case actionsToDo.ADD_A_DATA:
      return {
        ...state,
        allUserInfo: [
          ...state.allUserInfo,
          { ...action.payload, id: Date.now() },
        ],
      };
    case actionsToDo.DELETE_A_DATA:
      return {
        ...state,
        allUserInfo: state.allUserInfo.filter(
          (obj) => obj.id !== action.payload
        ),
      };
    default:
      return state;
  }
}
