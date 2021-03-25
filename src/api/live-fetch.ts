import { mainUrl, headers } from "./constants";
export const liveFetch = async () => {
  const url = `${mainUrl}/games/live/`;
  try {
    const response = await fetch(url, headers);
    const result = await response.json();
    const { api } = result;
    const { games } = api;
    return games;
  } catch (error) {
    console.error("error", error);
  }
};
