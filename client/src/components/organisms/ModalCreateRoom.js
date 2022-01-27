import { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import WrapperInput from '../molecules/WrapperInput';
import ButtonPrimary from '../atoms/ButtonPrimary';
import ButtonSecondary from '../atoms/ButtonSecondary';

const ModalCreateRoom = ({
  showModalCreateRoom,
  setShowModalCreateRoom,
  onAdd
}) => {
  const DEFAULT_MAX_PLAYERS = 10;
  const DEFAULT_TYPE = "private";
  const DEFAULT_STATE = "waiting";

  const [name, setName] = useState('');
  const [maxPlayers, setMaxPlayers] = useState(DEFAULT_MAX_PLAYERS);
  const [gameId, setGameId] = useState(1);
  const [type, setType] = useState(DEFAULT_TYPE);

  const onSubmit = (e) => {
    e.preventDefault()

    // if (!name) {
    //   alert('Please complete all fields.')
    //   return
    // }
    const room = {
      adminId: parseInt(sessionStorage.getItem('user_id')),
      adminName: sessionStorage.getItem('user_username'),
      gameId: parseInt(gameId),
      name: name,
      // seed: Math.random(),
      type: type,
      state: DEFAULT_STATE,
      max_users: parseInt(maxPlayers)
    };

    axios.post("http://localhost:8081/room", room).then((response) => console.log(response));

    // onAdd({
    //   name
    // })

    setShowModalCreateRoom(!showModalCreateRoom)
  }

  if (!showModalCreateRoom) {
    return null;
  }

  return (
    <div className="fixed left-0 top-0 right-0 bottom-0 z-40 flex items-center justify-center bg-black bg-opacity-50">
      <div className="shadow-lg overflow-hidden sm:rounded-2xl">
        <form onSubmit={onSubmit}>
          <div className="p-2 md:p-4 bg-gray-800">
            <div className="max-w-xl space-y-6">
              <div className="px-2 space-y-6">
                <span className="font-medium tracking-widest text-base">
                  {'Create room'}
                </span>
                <div className="space-y-2">
                  <WrapperInput
                    id="name"
                    title="Name"
                    onChange={(e) => setName(e.target.value)}
                    // value={name}
                  />
                  <WrapperInput
                    id="max_users"
                    title="Max. users"
                    value={DEFAULT_MAX_PLAYERS}
                    onChange={(e) => setMaxPlayers(e.target.value)}
                    // value={name}
                  />
                  <div className="flex flex-col space-y-2 font-semibold text-sm text-gray-100">
                    <label htmlFor="games" className="px-0.5 select-none font-medium tracking-wider text-sm">
                      {'Game'}
                    </label>
                    <select
                      id="games"
                      name="games"
                      className="w-full h-10 px-4 py-2 rounded-lg bg-gray-900 font-light text-sm text-white"
                      onChange={(e) => setGameId(e.target.value)}
                    >
                      <option value="1" default>Guess the picture</option>
                    </select>
                  </div>
                  <div className="flex flex-col space-y-2 font-semibold text-sm text-gray-100">
                    <label htmlFor="games" className="px-0.5 select-none font-medium tracking-wider text-sm">
                      {'Type'}
                    </label>
                    <select
                      id="type"
                      name="type"
                      className="w-full h-10 px-4 py-2 rounded-lg bg-gray-900 font-light text-sm text-white"
                      onChange={(e) => setType(e.target.value)}
                    >
                      <option value="private" default>{'Private'}</option>
                      <option value="public">{'Public'}</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-end space-x-3 p-3 bg-gray-800 text-right">
          <ButtonSecondary
            title="Cancel"
            onClick={() => {
              setShowModalCreateRoom(!showModalCreateRoom)
            }}
          >
            {/* ../Resources/svg/close.svg */}
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </ButtonSecondary>
          <ButtonPrimary title="Add" type="submit">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
          </ButtonPrimary>
        </div>
        </form>
      </div>
    </div>
  )
};

ModalCreateRoom.propTypes = {
  showModalAddItem: PropTypes.bool,
  setShowModalAddItem: PropTypes.func,
  onAdd: PropTypes.func
};

export default ModalCreateRoom;
