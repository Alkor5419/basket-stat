import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchLiveMatches } from "../../thunks";

export const LiveMatchesStat = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchLiveMatches());
  }, [dispatch]);
  return <div></div>;
};
