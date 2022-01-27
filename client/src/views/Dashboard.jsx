import { useState } from "react";
import { Link } from "react-router-dom";
import data from "../testing/data";

const Dashboard = () => {
  const [currentTab, setCurrentTab] = useState('users');

  return (
    <div className="p-4 bg-gray-800 rounded-xl space-y-4">
      <div className="w-full h-8 flex items-center justify-between space-x-2">
        <button className={`flex-1 flex items-center justify-center space-x-0.5 px-3 py-1.5 bg-gray-900 border-2 ${currentTab === 'users' ? 'border-gray-700' : 'border-transparent'} transition ease-in-out duration-500 rounded-lg font-medium tracking-wider uppercase text-center text-gray-300 text-xs`} onClick={() => setCurrentTab('users')}>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
            </svg>
          </span>
          <span>
            {'Users'}
          </span>
        </button>
        <button className={`flex-1 flex items-center justify-center space-x-0.5 px-3 py-1.5 bg-gray-900 border-2 ${currentTab === 'rooms' ? 'border-gray-700' : 'border-transparent'} transition ease-in-out duration-500 rounded-lg font-medium tracking-wider uppercase text-center text-gray-300 text-xs`} onClick={() => setCurrentTab('rooms')}>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
            </svg>
          </span>
          <span>
            {'Rooms'}
          </span>
        </button>
        <button className={`flex-1 flex items-center justify-center space-x-0.5 px-3 py-1.5 bg-gray-900 border-2 ${currentTab === 'games' ? 'border-gray-700' : 'border-transparent'} transition ease-in-out duration-500 rounded-lg font-medium tracking-wider uppercase text-center text-gray-300 text-xs`} onClick={() => setCurrentTab('games')}>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </span>
          <span>
            {'Games'}
          </span>
        </button>
      </div>
      <div className="w-full bg-gray-900 rounded-lg overflow-hidden">
        {currentTab === 'users' && (
          <div className="px-2 py-0.5 m-1 overflow-y-auto">
            {data.users.map((user) => (
              <div className="flex items-center space-x-1">
                <div className="text-xs text-white">
                  <span>
                    {user.username}
                  </span>
                  <span className="font-extralight capitalize">
                    {' ('}{user.type}{')'}
                  </span>
                </div>
                <div>
                  {user.type === 'admin' ? (
                    <button title="Remove admin" className="text-red-600 hover:text-red-400 transition ease-in-out duration-500">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944zM11 14a1 1 0 11-2 0 1 1 0 012 0zm0-7a1 1 0 10-2 0v3a1 1 0 102 0V7z" clipRule="evenodd" />
                      </svg>
                    </button>
                  ) : (
                    <button title="Make admin" className="text-green-500 hover:text-green-300 transition ease-in-out duration-500">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </button>
                  )}
                </div>
                <div>
                  {user.type !== 'admin' && (
                    <button title="Ban" className="text-red-600 hover:text-red-400 transition ease-in-out duration-500">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z" clipRule="evenodd" />
                      </svg>
                    </button>
                  )}
                </div>
                <div>
                  {user.type !== 'admin' && (
                    <button title="Remove" className="text-red-600 hover:text-red-400 transition ease-in-out duration-500">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
        {currentTab === 'rooms' && (
          <div className="px-2 py-1.5 m-1 space-y-2 overflow-y-auto">
            {data.rooms.map((room) => (
              <div className="flex items-center space-x-1">
                <Link to={`/room/${room.id}`} className="text-xs text-white hover:text-gray-300 transition ease-in-out duration-500">
                  {room.name}
                </Link>
                <button title="Modify" className="text-yellow-500 hover:text-yellow-300 transition ease-in-out duration-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                  </svg>
                </button>
                <button title="Remove" className="text-red-600 hover:text-red-400 transition ease-in-out duration-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        )}
        {currentTab === 'games' && (
          <div className="px-2 py-1.5 m-1 space-y-2 overflow-y-auto">
            {data.games.map((game) => (
              <div className="flex items-center space-x-1">
                <div className="text-xs text-white">
                  <span>
                    {game.name}
                  </span>
                </div>
                <button title="Modify" className="text-yellow-500 hover:text-yellow-300 transition ease-in-out duration-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                  </svg>
                </button>
                <button title="Remove" className="text-red-600 hover:text-red-400 transition ease-in-out duration-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
