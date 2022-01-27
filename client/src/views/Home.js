import Separator from "../components/atoms/Separator";
import GameCard from "../components/molecules/GameCard";
import RoomCard from "../components/molecules/RoomCard";
import data from "../testing/data";

const Home = ({
  userTypes,
  userType,
  setUserType
}) => {
  return (
    <div className="space-y-4">
      <div className="w-full p-4 space-y-8">
        <h1 className="font-light tracking-wider text-center text-xl uppercase">
          {'Most popular games'}
        </h1>
        <div className="flex flex-row space-x-4 overflow-x-auto pb-4">
          {data.games.map((game) => (
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
          {data.rooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
