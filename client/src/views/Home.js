import { useState, useEffect } from "react";
import axios from "axios";
import { dbApiUrl } from "../app/config";
import Separator from "../components/atoms/Separator";
import GameCard from "../components/molecules/GameCard";
import RoomCard from "../components/molecules/RoomCard";
import data from "../testing/data";

const Home = () => {
  const [rooms, setRooms] = useState([]);
  const [games, setGames] = useState([]);

  useEffect(() => {
    axios.get(`${dbApiUrl}/game/all`)
      .then(response => {
        console.log(response.data);
        setGames(response.data);
      });

    axios.get(`${dbApiUrl}/room/all`)
      .then(response => {
        console.log(response.data);
        setRooms(response.data);
      });
  }, []);

  return (
    <div className="space-y-4">
      <div className="w-full p-4 space-y-8">
        <h1 className="font-light tracking-wider text-center text-xl uppercase">
          {'Most popular games'}
        </h1>
        <div className="flex flex-row space-x-4 overflow-x-auto pb-4">
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </div>
      <Separator />
      <div className="w-full p-4 space-y-8">
        <h1 className="font-light tracking-wider text-center text-xl uppercase">
          {'Recently created rooms'}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {rooms.slice(0).reverse().map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
