import { useState, useEffect } from "react";
import * as gamesAPI from "../api/games-api";

export function useGetAllGames() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    gamesAPI.getAll().then((res) => setGames(res));
  }, []);

  return [games, setGames];
}

export function useGetOneGames(gameId) {
  const [game, setGame] = useState({});

  useEffect(() => {
    gamesAPI.getOne(gameId).then((res) => {
      setGame(res);
    });
  }, [gameId]);

  return [game, setGame];
}
