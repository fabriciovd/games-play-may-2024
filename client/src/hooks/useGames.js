import { useState, useEffect } from "react";
import * as gamesAPI from "../api/games-api";

export function useGetAllGames() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    gamesAPI.getAll().then((res) => setGames(res));
  }, []);
  
  return [games, setGames];
}
