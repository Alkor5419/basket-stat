import {
  FETCH_LIVE_FAILURE,
  FETCH_LIVE_REQUEST,
  FETCH_LIVE_SUCCESS,
  FETCH_MATCH_INFO_FAILURE,
  FETCH_MATCH_INFO_REQUEST,
  FETCH_MATCH_INFO_SUCCESS,
} from "./actions";

//live
export type FetchLiveRequestType = {
  type: typeof FETCH_LIVE_REQUEST; //если просто поставить стринг, вылезет прикол в action.payload reducers.ts
};
export type FetchLiveSuccessType = {
  type: typeof FETCH_LIVE_SUCCESS;
  payload: any;
};
export type FetchLiveFailureType = {
  type: typeof FETCH_LIVE_FAILURE;
  payload: any;
};

export type LiveMathesDispatchTypes =
  | FetchLiveSuccessType
  | FetchLiveFailureType
  | FetchLiveRequestType;

export interface ILiveGames {
  seasonYear: string;
  league: string;
  gameId: number;
  seasonStageId: number;
  statusNum: number;
  startTimeUTC: string;
  endTimeUTC: string;
  arena: string;
  city: string;
  country: string;
  infos: string;
  vTeam: ITeam;
  hTeam: ITeam;
}
interface ITeam {
  teamId: number;
  score: IScore;
}
interface IScore {
  points: number;
}

//match info
export type FetchMatchInfoRequestType = {
  type: typeof FETCH_MATCH_INFO_REQUEST;
};
export type FetchMatchInfoSuccessType = {
  type: typeof FETCH_MATCH_INFO_SUCCESS;
  payload: any;
};
export type FetchMatchInfoFailureType = {
  type: typeof FETCH_MATCH_INFO_FAILURE;
  payload: any;
};

export type MatchInfoDispatchTypes =
  | FetchMatchInfoRequestType
  | FetchMatchInfoSuccessType
  | FetchMatchInfoFailureType;

export interface IGameInfo {
  gameId: number;
  fullNameA: string;
  fullNameB: string;
  logoA: string;
  logoB: string;
  pointsA: number;
  pointsB: number;
}
//reducer
export type ActionsTypes =
  | FetchMatchInfoRequestType
  | FetchMatchInfoSuccessType
  | FetchMatchInfoFailureType
  | FetchLiveSuccessType
  | FetchLiveFailureType
  | FetchLiveRequestType;
