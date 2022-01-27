import RoomCard from "../components/molecules/RoomCard";
import data from "../testing/data";

const Rooms = () => {
  return (
    <div className="w-full p-4 space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {data.rooms.map((room) => (
          <RoomCard key={room.id} room={room} />
        ))}
      </div>
    </div>
  );
};

export default Rooms;
