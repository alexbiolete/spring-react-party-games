import { Link } from "react-router-dom";
import data from "../../testing/data";

const RoomCard = ({ room }) => {
  const game = data.games.find(game => game.id === room.gameId);

  return (
    <Link to={`/room/${room.id}`} className="col-span-1 w-full h-48 px-6 py-4 bg-gray-800 border-2 border-transparent hover:border-gray-700 transition ease-in-out duration-500 rounded-xl flex flex-col justify-between">
      <div className="w-full h-10 flex items-center justify-center">
        <h2 className="bg-gray-900 px-3 py-1.5 rounded-full font-light tracking-widest text-sm uppercase">
          {game.name}
        </h2>
      </div>
      <div className="w-full h-20 mb-2 flex flex-col items-center justify-center space-y-1">
        <h3 className="font-medium tracking-wide text-center text-gray-200">
          {room.name}
        </h3>
        <span className="px-1.5 py-0.5 flex items-center space-x-1 rounded-full" style={{ backgroundColor: '#18202A' }}>
          {room.state === 'playing' && (
            <>
              <div>
                <div className="w-1.5 h-1.5 animate-ping absolute bg-green-600 rounded-full"></div>
                <div className="w-1.5 h-1.5 relative bg-green-600 rounded-full"></div>
              </div>
              <span className="font-semibold tracking-wider uppercase text-xs text-green-600">
                {room.state}
              </span>
            </>
          )}
          {room.state === 'waiting' && (
            <>
              <div className="w-1.5 h-1.5 animate-pulse bg-yellow-600 rounded-full"></div>
              <span className="font-semibold tracking-wider uppercase text-xs text-yellow-600">
                {room.state}
              </span>
            </>
          )}
          {room.state === 'offline' && (
            <>
              <div className="w-1.5 h-1.5 bg-transparent border border-red-700 rounded-full"></div>
              <span className="font-semibold tracking-wider uppercase text-xs text-red-700">
                {room.state}
              </span>
            </>
          )}
        </span>
      </div>
      <div className="w-full h-8 flex justify-between text-gray-400">
        <span className="flex items-center space-x-0.5">
          {room.type === 'private' && (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              <small className="mt-0.5 capitalize">
                {room.type}
              </small>
            </>
          )}
          {room.type === 'public' && (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" />
              </svg>
              <small className="mt-0.5 capitalize">
                {room.type}
              </small>
            </>
          )}
        </span>
        <span className="flex items-center space-x-0.5">
          {room.userCount > 0 ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          )}
          <small className="mt-0.5">
            {room.userCount}{' / '}{room.userMax}
          </small>
        </span>
      </div>
    </Link>
  );
};

export default RoomCard;
