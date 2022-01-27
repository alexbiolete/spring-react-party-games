import { useState, useEffect } from "react";
import RoomCard from "../components/molecules/RoomCard";
import data from "../testing/data";
import axios from "axios";

const Rooms = () => {

  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8081/room/all")
      .then(response => {
        console.log(response.data);
        setRooms(response.data);
      });
  }, []);
  

  return (
    <div className="w-full p-4 space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {rooms.map((room) => (
          <RoomCard key={room.id} room={room} />
        ))}
      </div>
    </div>
  );
};

export default Rooms;
