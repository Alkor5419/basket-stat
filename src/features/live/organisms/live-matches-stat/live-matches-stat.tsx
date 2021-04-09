import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchLiveMatches,
  fetchMatchInfo,
} from "../../thunks";
import { InitialStateI } from "../../reducers";
import { Match } from "../../../../shared/molecules/match";
import { IGameInfo } from "../../types";
import { HasntMatches } from "../../moleculs/hasnt-matches";
import { Spin } from "antd";

interface IRootState {
  liveReducer: InitialStateI;
}

export const LiveMatchesStat = () => {
  const dispatch = useDispatch();

  const matchesIds = useSelector(
    (state: IRootState) => state.liveReducer.matchesIds
  );
  const isLoading = useSelector(
    (state: IRootState) => state.liveReducer.loading
  );
  const liveGames = useSelector(
    (state: IRootState) => state.liveReducer.liveGames
  );

  useEffect(() => {
    dispatch(fetchLiveMatches());
  }, [dispatch]);
  useEffect(() => {
    if (matchesIds.length > 0)
      matchesIds.forEach((el: number) =>
        dispatch(fetchMatchInfo(el))
      );
  }, [matchesIds, dispatch]);

  return (
    <>
      {isLoading ? (
        <Spin size="large" />
      ) : liveGames.length > 0 ? (
        liveGames.map((el: IGameInfo) => (
          <Match
            teamA={el.fullNameA}
            teamB={el.fullNameB}
            logoA={el.logoA}
            logoB={el.logoB}
            scoreA={el.pointsA}
            scoreB={el.pointsB}
            key={el.gameId}
          />
        ))
      ) : (
        <HasntMatches />
      )}
    </>
  );
};
