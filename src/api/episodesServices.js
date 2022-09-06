import axios from "axios";

const baseUrl = "https://rickandmortyapi.com/api/episode";
const headers = {};

export const getEpisodes = async ({ page }) => {
  let url = `${baseUrl}/?`;
  if (page) url += `&page=${page}`;
  try {
    const { data } = await axios({ url, headers });
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
};
