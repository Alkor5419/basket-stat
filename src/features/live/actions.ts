import {
  FETCH_LIVE_REQUEST,
  FETCH_LIVE_SUCCESS,
  FETCH_LIVE_FAILURE,
  FetchLiveFailureType,
  FetchLiveRequestType,
  FetchLiveSuccessType,
  ILiveGames,
} from "./types";

export const fetchLiveRequest = (): FetchLiveRequestType => ({
  type: FETCH_LIVE_REQUEST,
});
export const fetchLiveSuccess = (
  payload: ILiveGames
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
