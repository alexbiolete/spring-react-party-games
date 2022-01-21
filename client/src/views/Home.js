import DebugMenu from '../components/organisms/DebugMenu';

const Home = ({
  userTypes,
  userType,
  setUserType
}) => {
  return (
    <div className="space-y-4">
      <DebugMenu
        userTypes={userTypes}
        userType={userType}
        setUserType={setUserType}
      />
      <div className="w-full bg-gray-800 rounded-lg shadow-sm">
        <div className="p-4 flex justify-center">
          {'Placeholder'}
        </div>
      </div>
    </div>
  );
};

export default Home;
