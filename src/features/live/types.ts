export const FETCH_LIVE_REQUEST = "live/fetch_live_request";
export const FETCH_LIVE_SUCCESS = "live/fetch_live_success";
export const FETCH_LIVE_FAILURE = "live/fetch_live_failure";

export type FetchLiveRequestType = {
  type: string;
};
export type FetchLiveSuccessType = {
  type: string;
  payload: any;
};
export type FetchLiveFailureType = {
  type: string;
  payload: any;
};
export type LiveMathesDispatchTypes =
  | FetchLiveRequestType
  | FetchLiveSuccessType
  | FetchLiveFailureType;

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
