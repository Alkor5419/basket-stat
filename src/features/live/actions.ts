import {
  FetchLiveFailureType,
  FetchLiveRequestType,
  FetchLiveSuccessType,
  FetchMatchInfoRequestType,
  FetchMatchInfoSuccessType,
  FetchMatchInfoFailureType,
  ILiveGames,
} from "./types";

//live
export const fetchLiveRequest = (): FetchLiveRequestType => ({
  type: FETCH_LIVE_REQUEST,
});
export const fetchLiveSuccess = (
  payload: number[]
): FetchLiveSuccessType => ({
  type: FETCH_LIVE_SUCCESS,
  payload,
});
export const fetchLiveFailure = (
  payload: any
): FetchLiveFailureType => ({
  type: FETCH_LIVE_FAILURE,
  payload,
});

//match-info
export const fetchMatchInfoRequest = (): FetchMatchInfoRequestType => ({
  type: FETCH_MATCH_INFO_REQUEST,
});
export const fetchMatchInfoSuccess = (
  payload: ILiveGames
): FetchMatchInfoSuccessType => ({
  type: FETCH_MATCH_INFO_SUCCESS,
  payload,
});
export const fetchMatchInfoFailure = (
  payload: any
): FetchMatchInfoFailureType => ({
  type: FETCH_MATCH_INFO_FAILURE,
  payload,
});

//constants
export const FETCH_LIVE_REQUEST = "live/fetch_live_request";
export const FETCH_LIVE_SUCCESS = "live/fetch_live_success";
export const FETCH_LIVE_FAILURE = "live/fetch_live_failure";
export const FETCH_MATCH_INFO_REQUEST =
  "live/fetch_match_info_request";
export const FETCH_MATCH_INFO_SUCCESS =
  "live/fetch_match_info_success";
export const FETCH_MATCH_INFO_FAILURE =
  "live/fetch_match_info_failure";
