import { useState } from "react";
import { useParams } from "react-router-dom";
import Separator from "../components/atoms/Separator";
import data from "../testing/data";

const Room = () => {
  const { id } = useParams();
  const room = data.rooms.find(room => room.id === parseInt(id));
  const game = data.games.find(game => game.id === room.gameId);

  const [currentTab, setCurrentTab] = useState('chat');

  return (
    <div className="space-y-4">
      <div className="w-full p-4 flex items-center justify-between">
        <div className="px-2 flex-1 flex items-center justify-start space-x-3 text-gray-400">
          <div className="flex items-center space-x-0.5">
            {room.type === 'private' && (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                <span className="mt-0.5 capitalize">
                  {room.type}
                </span>
              </>
            )}
            {room.type === 'public' && (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" />
                </svg>
                <span className="mt-0.5 capitalize">
                  {room.type}
                </span>
              </>
            )}
          </div>
          <div className="flex items-center space-x-0.5">
            {room.userCount > 0 ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            )}
            <span className="mt-0.5">
              {room.userCount}{' / '}{room.userMax}
            </span>
          </div>
        </div>
        <div className="px-2 flex-1">
          <h1 className="font-light tracking-wider text-center text-xl uppercase">
            {room.name}
          </h1>
        </div>
        <div className="px-2 flex-1 flex items-center justify-end space-x-1.5 text-gray-400">
          {room.state === 'playing' && (
            <>
              <div>
                <div className="w-2 h-2 animate-ping absolute bg-green-600 rounded-full"></div>
                <div className="w-2 h-2 relative bg-green-600 rounded-full"></div>
              </div>
              <span className="font-semibold tracking-wider uppercase text-green-600">
                {room.state}
              </span>
            </>
          )}
          {room.state === 'waiting' && (
            <>
              <div className="w-2 h-2 animate-pulse bg-yellow-600 rounded-full"></div>
              <span className="font-semibold tracking-wider uppercase text-yellow-600">
                {room.state}
              </span>
            </>
          )}
          {room.state === 'offline' && (
            <>
              <div className="w-2 h-2 bg-transparent border border-red-700 rounded-full"></div>
              <span className="font-semibold tracking-wider uppercase text-red-700">
                {room.state}
              </span>
            </>
          )}
        </div>
      </div>
      <Separator />
      <div className="w-full p-4 space-y-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="col-span-1 md:col-span-2 p-4 bg-gray-800 rounded-xl space-y-4">
            <span className="h-8 flex items-center justify-center font-light tracking-wider uppercase text-center text-sm">
              {game.name}
            </span>
            <div className="w-full h-60 bg-gray-900 rounded-lg">

            </div>
          </div>
          <div className="col-span-1 h-80 p-4 bg-gray-800 rounded-xl space-y-4">
            <div className="w-full h-8 flex items-center justify-between space-x-2">
              <button className={`flex-1 flex items-center justify-center space-x-0.5 px-3 py-1.5 bg-gray-900 border-2 ${currentTab === 'chat' ? 'border-gray-700' : 'border-transparent'} transition ease-in-out duration-500 rounded-lg font-medium tracking-wider uppercase text-center text-gray-300 text-xs`} onClick={() => setCurrentTab('chat')}>
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                    <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                  </svg>
                </span>
                <span>
                  {'Chat'}
                </span>
              </button>
              <button className={`flex-1 flex items-center justify-center space-x-0.5 px-3 py-1.5 bg-gray-900 border-2 ${currentTab === 'players' ? 'border-gray-700' : 'border-transparent'} transition ease-in-out duration-500 rounded-lg font-medium tracking-wider uppercase text-center text-gray-300 text-xs`} onClick={() => setCurrentTab('players')}>
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                  </svg>
                </span>
                <span>
                  {'Players'}
                </span>
              </button>
            </div>
            {currentTab === 'chat' && (
              <div className="w-full h-60 bg-gray-900 rounded-lg overflow-hidden">
                <div className="px-2 m-1 overflow-y-auto">
                  <div>
                    <span className="inline text-xs text-blue-400">
                      {'Alex'}{': '}
                    </span>
                    <p className="inline font-extralight text-xs">
                      {'Amet qui Lorem ea nostrud dolor sint in quis anim.'}
                    </p>
                  </div>
                  <div>
                    <span className="inline text-xs text-green-400">
                      {'Peter'}{': '}
                    </span>
                    <p className="inline font-extralight text-xs">
                      {'Ullamco nisi nostrud culpa aliqua esse sint est exercitation dolore occaecat ut eu.'}
                    </p>
                  </div>
                  <div>
                    <span className="inline text-xs text-pink-400">
                      {'Anna'}{': '}
                    </span>
                    <p className="inline font-extralight text-xs">
                      {'Labore aliqua ut nisi ex.'}
                    </p>
                  </div>
                  <div>
                    <span className="inline text-xs text-blue-400">
                      {'Alex'}{': '}
                    </span>
                    <p className="inline font-extralight text-xs">
                      {'In nostrud cupidatat exercitation excepteur deserunt deserunt duis voluptate ullamco do eiusmod ipsum irure sit.'}
                    </p>
                  </div>
                </div>
              </div>
            )}
            {currentTab === 'players' && (
              <div className="w-full h-60 bg-gray-900 rounded-lg overflow-hidden">
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
                        {user.type !== 'admin' ? (
                          <button className="text-red-600 hover:text-red-400 transition ease-in-out duration-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          </button>
                        ) : (
                          <button className="invisible">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Room;