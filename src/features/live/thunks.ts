import { Dispatch } from "redux";
import { liveFetch } from "../../api/live-fetch";
import {
  fetchLiveFailure,
  fetchLiveRequest,
  fetchLiveSuccess,
} from "./actions";
import { FetchLiveDispatchTypes } from "./types";

export const fetchLiveMatches = () => async (
  dispatch: Dispatch<FetchLiveDispatchTypes>
) => {
  dispatch(fetchLiveRequest());
  try {
    const data = await liveFetch();
    dispatch(fetchLiveSuccess(data));
  } catch (e) {
    console.error(e);
    dispatch(fetchLiveFailure(e));
  }
};
