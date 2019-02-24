import { PLAYER_FETCHED } from "../actions/types";

const INITIAL_STATE = {
  fetchedPlayer: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PLAYER_FETCHED:
      return { ...state, fetchedPlayer: action.payload };
    default:
      return state;
  }
};
