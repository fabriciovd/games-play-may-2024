import * as request from "./requester";

const BASE_URL = "http://localhost:3030/data/games";

export const getAll = async () => {
  const result = await request.get(BASE_URL);
  const games = Object.values(result);
  return games;
};

export const getOne = async (gameId) => await request.get(`${BASE_URL}/${gameId}`);


export const create = async (gameData) => request.post(BASE_URL, gameData);


const gamesAPI = {
    getAll,
    getOne,
    };

export default gamesAPI;