import { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import Separator from "../components/atoms/Separator";
import WrapperInput from "../components/molecules/WrapperInput";
import ButtonPrimary from '../components/atoms/ButtonPrimary';
import axios from 'axios';
import data from "../testing/data";

const Room = ({ refreshPage }) => {
  const { id } = useParams();
  const [room, setRoom] = useState(data.rooms.find(room => room.id === parseInt(id)));
  const game = data.games.find(game => game.id === room.gameId);
  const [myMessage, setMyMessage] = useState("");

  const [currentTab, setCurrentTab] = useState('chat');
  const [username, setUsername] = useState(sessionStorage.getItem('user_username'));
  const [userId, setUserId] = useState(sessionStorage.getItem('user_id'));

  const [players, setPlayers] = useState([]);
  const [dataChat, setDataChat] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8081/room?roomId=" + id)
      .then(response => {
        console.log(response.data);
        setRoom(response.data);
      });

    axios.get("http://localhost:8081/chat/all/room?roomId=" + id)
      .then(response => {
        console.log(response.data);
        setDataChat(response.data);
      });

    const conn = {
      "role": "Player",
      "roomId": id,
      "score": 0,
      "userId": userId,
      "username": username
    }

    axios.post("http://localhost:8081/connection", conn)
      .then(response => {
        axios.get("http://localhost:8081/user/all/room?roomId=" + id)
        .then(response => {
          console.log(response.data);
          setPlayers(response.data);
        });
        console.log(response.data);
      });

  }, []);


  const handleSubmit = (e) => {
    e.preventDefault();
    const chatMessage = {
      "message": myMessage,
      "room_id": room.id,
      "user_id": userId,
      "username": username
    };
    console.log(chatMessage);
    axios.post("http://localhost:8081/chat", chatMessage)
      .then(response => {
        console.log(response);
        refreshPage();
      });
  };

  const handleSubmit2 = (e) => {
    e.preventDefault();

    axios.post("http://localhost:8081/room/seed?roomId=" + room.id)
      .then(response => {
        console.log(response.data);
        setRoom(response.data);
        // refreshPage();
      });

  };

  return (
    <div className="space-y-4">
      <div className="w-full p-4 hidden md:flex items-center justify-between">
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
            {room.nr_users > 0 ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            )}
            <span className="mt-0.5">
              {room.nr_users}{' / '}{room.max_users}
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
      <div className="w-full p-4 flex md:hidden flex-col">
        <div className="px-2">
          <h1 className="font-light tracking-wider text-center text-xl uppercase">
            {room.name}
          </h1>
        </div>
        <div className="px-2 flex items-center justify-between space-x-3 text-gray-400">
          <div className="flex-1 flex items-center justify-start space-x-0.5">
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
          <div className="flex-1 flex items-center justify-center space-x-1.5 mt-0.5 text-gray-400">
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
          <div className="flex-1 flex items-center justify-end space-x-0.5">
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
      </div>
      <Separator />
      <div className="w-full p-4 space-y-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="col-span-1 md:col-span-2 p-4 bg-gray-800 rounded-xl space-y-4">
            <span className="h-8 flex items-center justify-center font-light tracking-wider uppercase text-center text-sm">
              {game.name}
            </span>
            <div className="w-full bg-gray-900 rounded-lg object-cover overflow-hidden">
              <img className="mx-auto h-full" src={`https://picsum.photos/seed/${room.seed}/200/300`} />
            </div>
          </div>
          <div className="col-span-1 flex flex-col p-4 bg-gray-800 rounded-xl space-y-4">
            <div className="w-full flex items-center justify-between space-x-2">
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
              <>
                <div className="w-full h-full bg-gray-900 rounded-lg overflow-hidden">
                  <div className="px-2 m-1 overflow-y-scroll">
                    {dataChat.map((chatMessage) => (
                      <div key={chatMessage.id}>
                        <span className="inline text-xs text-blue-400">
                          {chatMessage.username}{': '}
                        </span>
                        <p className="inline font-extralight text-xs">
                          {chatMessage.message}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative w-full">
                  <input
                    id="message"
                    title="Message"
                    type="text"
                    className="pl-3 pr-8 py-2 w-full h-10 bg-gray-900 rounded-lg font-light text-sm placeholder-gray-400 border-2 border-transparent focus:border-gray-700 focus:outline-none transition ease-in-out"
                    onChange={(e) => setMyMessage(e.target.value)}
                    value={myMessage}
                    required
                  />
                  <button
                    type="submit"
                    className="absolute top-2 right-2.5 text-gray-600 hover:text-gray-400 transition ease-in-out duration-500"
                    onClick={(e) => handleSubmit(e)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                    </svg>
                  </button>
                </div>
                {sessionStorage.getItem('user_type') === 'admin' && (
                  // <ButtonPrimary title="Guessed" type="submit" onClick={(e) => handleSubmit2(e)} />
                  <button
                    type="submit"
                    className="flex-1 flex items-center justify-center space-x-0.5 w-full px-2 py-1.5 bg-gray-700 border-2 border-transparent hover:border-gray-400 rounded-lg text-gray-100 hover:text-gray-200 focus:outline-none transition ease-in-out duration-300"
                    onClick={(e) => handleSubmit2(e)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="mt-0.5 font-medium text-xs uppercase">
                      {'Guessed'}
                    </span>
                  </button>
                )}
              </>
            )}
            {currentTab === 'players' && (
              <div className="w-full h-60 bg-gray-900 rounded-lg overflow-hidden">
                <div className="px-2 py-0.5 m-1 overflow-y-auto">
                  {players.map((user) => (
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