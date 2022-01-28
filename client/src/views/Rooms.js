import { useState, useEffect } from "react";
import axios from "axios";
import { dbApiUrl } from "../app/config";
import RoomCard from "../components/molecules/RoomCard";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    axios.get(`${dbApiUrl}/room/all`)
      .then(response => {
        console.log(response.data);
        setRooms(response.data);
      });
  }, []);

  return (
    <div className="w-full p-4 space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {rooms.slice(0).reverse().map((room) => (
          <RoomCard key={room.id} room={room} />
        ))}
      </div>
    </div>
  );
};

export default Rooms;
