import axios from "axios";

const baseUrl = "https://rickandmortyapi.com/api/character";
const headers = {};

export const getCharacters = async ({
  name,
  status,
  species,
  type,
  gender,
  page,
}) => {
  try {
    let url = `${baseUrl}/?`;
    if (name) url += `&name=${name}`;
    if (status) url += `&status=${status}`;
    if (species) url += `&species=${species}`;
    if (type) url += `&type=${type}`;
    if (gender) url += `&gender=${gender}`;
    if (page) url += `&page=${page}`;

    const { data } = await axios({ url, headers });
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getCharacterById = async (characterId) => {
  try {
  } catch (error) {
    return Promise.reject(error);
  }
};
