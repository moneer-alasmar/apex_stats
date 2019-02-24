import { PLAYER_FETCHED } from "./types";

// export const fetchedPlayer = (player, dispatch) => {
//   dispatch({ type: PLAYER_FETCHED, payload: player });
// };

export const fetchedPlayer = player => {
  return {
    type: PLAYER_FETCHED,
    payload: player
  };
};
