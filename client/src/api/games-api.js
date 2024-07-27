import * as request from "./requester";

const BASE_URL = "http://localhost:3030/jsonstore/games";

export const getAll = async () => {
  const result = await request.get(BASE_URL);
  const games = Object.values(result);
  return games;
};

export const getOne = async (gameId) => {
   const data =  await request.get(`${BASE_URL}/${gameId}`);
   return data;
    const game = Object.values(data);
    return game
};

const gamesAPI = {
    getAll,
    getOne,
    };

export default gamesAPI;