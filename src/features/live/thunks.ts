import { Dispatch } from "redux";
import { liveFetch, getMatchInfo } from "../../api";

import {
  fetchLiveFailure,
  fetchLiveRequest,
  fetchLiveSuccess,
  fetchMatchInfoFailure,
  fetchMatchInfoRequest,
  fetchMatchInfoSuccess,
} from "./actions";
import {
  ILiveGames,
  LiveMathesDispatchTypes,
  MatchInfoDispatchTypes,
} from "./types";

export const fetchLiveMatches = () => async (
  dispatch: Dispatch<LiveMathesDispatchTypes>
) => {
  dispatch(fetchLiveRequest());
  try {
    const data = await liveFetch();
    const matchesIds = data.map(
      (el: ILiveGames) => el.gameId
    );
    dispatch(fetchLiveSuccess(matchesIds));
  } catch (e) {
    console.error(e);
    dispatch(fetchLiveFailure(e));
  }
};

export const fetchMatchInfo = (matchId: number) => async (
  dispatch: Dispatch<MatchInfoDispatchTypes>
) => {
  dispatch(fetchMatchInfoRequest());
  try {
    const data = await getMatchInfo(matchId);
    dispatch(fetchMatchInfoSuccess(data));
  } catch (e) {
    console.error(e);
    dispatch(fetchMatchInfoFailure(e));
  }
};
