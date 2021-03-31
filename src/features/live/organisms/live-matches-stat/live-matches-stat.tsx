import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchLiveMatches,
  fetchMatchInfo,
} from "../../thunks";
import { InitialStateI } from "../../reducers";
import { Match } from "../../../../shared/molecules/match";
import { IGameInfo } from "../../types";
interface IRootState {
  liveReducer: InitialStateI;
}
export const LiveMatchesStat = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchLiveMatches());
  }, [dispatch]);
  const matchesIds = useSelector(
    (state: IRootState) => state.liveReducer.matchesIds
  );
  useEffect(() => {
    if (matchesIds.length > 0)
      matchesIds.forEach((el: number) =>
        dispatch(fetchMatchInfo(el))
      );
  }, [dispatch]);
  const liveGames = useSelector(
    (state: IRootState) => state.liveReducer.liveGames
  );
  return (
    <>
      {liveGames.length > 0
        ? liveGames.map((el: IGameInfo) => (
            <Match
              teamA={el.fullNameA}
              teamB={el.fullNameB}
              scoreA={el.pointsA}
              scoreB={el.pointsB}
              key={el.gameId}
            />
          ))
        : null}
    </>
  );
};
