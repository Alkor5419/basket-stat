import { mainUrl, headers } from "./constants";
export const getMatchInfo = async (matchId: number) => {
  const url = `${mainUrl}/games/gameId/${matchId}`;

  const requestOptions = {
    method: "GET",
    headers,
  };

  try {
    const response = await fetch(url, requestOptions);
    const result = await response.json();
    const { api } = result;
    const { games } = api;
    return games[0];
  } catch (error) {
    console.error("error", error);
  }
};
