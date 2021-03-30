import { mainUrl, headers } from "./constants";
export const getMatch = async (matchId: string) => {
  const url = `${mainUrl}/games/gameId/`;
  const body = JSON.stringify(matchId);

  const requestOptions = {
    method: "POST",
    headers,
    body,
  };

  try {
    const response = await fetch(url, requestOptions);
    const result = await response.json();
    const { api } = result;
    const { games } = api;
    return games;
  } catch (error) {
    console.error("error", error);
  }
};
