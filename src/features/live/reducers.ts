import { ActionsTypes, IGameInfo } from "./types";
import {
  FETCH_LIVE_FAILURE,
  FETCH_LIVE_SUCCESS,
  FETCH_LIVE_REQUEST,
  FETCH_MATCH_INFO_REQUEST,
  FETCH_MATCH_INFO_FAILURE,
  FETCH_MATCH_INFO_SUCCESS,
} from "./actions";

export interface InitialStateI {
  loading: boolean;
  matchesIds: number[];
  liveGames: IGameInfo[];
}

const initialState: InitialStateI = {
  loading: false,
  matchesIds: [],
  liveGames: [],
};

export const liveReducer = (
  state: InitialStateI = initialState,
  action: ActionsTypes
) => {
  switch (action.type) {
    case FETCH_LIVE_FAILURE:
      return { ...state, loading: false };
    case FETCH_LIVE_SUCCESS:
      return {
        ...state,
        loading: false,
        matchesIds: action.payload,
      };
    case FETCH_LIVE_REQUEST:
      return { ...state, loading: true };
    case FETCH_MATCH_INFO_REQUEST:
      return { ...state, loading: true };
    case FETCH_MATCH_INFO_SUCCESS:
      const game = {
        gameId: action.payload.gameId,
        fullNameA: action.payload.vTeam.nickName,
        fullNameB: action.payload.hTeam.nickName,
        logoA: action.payload.vTeam.logo,
        logoB: action.payload.hTeam.logo,
        pointsA: action.payload.vTeam.score.points,
        pointsB: action.payload.hTeam.score.points,
      };
      return {
        ...state,
        loading: false,
        liveGames: [...state.liveGames, game],
      };
    case FETCH_MATCH_INFO_FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
};
