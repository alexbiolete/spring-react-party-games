import { Fragment } from 'react';

const GameCard = ({ game }) => {
  return (
    <div className="flex-shrink-0 w-60 h-40 p-2 bg-gray-800 border-2 border-transparent hover:border-gray-700 transition ease-in-out duration-500 rounded-xl">
      <div className="h-24 bg-gray-900 rounded-lg flex items-center justify-center overflow-hidden">
        <Fragment>
          {game.image ? (
            <img src={game.image} alt={game.name} className="w-full h-full object-cover" />
          ) : (
            <span className="text-gray-800">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
            </span>
          )}
        </Fragment>
      </div>
      <div className="w-full h-14 flex items-center justify-center">
        <h2 className="font-light tracking-widest uppercase">
          {game.name}
        </h2>
      </div>
    </div>
  );
};

export default GameCard;
