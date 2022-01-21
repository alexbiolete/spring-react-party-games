import { Link, useParams } from 'react-router-dom';
import ProfileSidebar from '../components/molecules/ProfileSidebar';

const User = ({
  users
}) => {
  let { userId } = useParams();
  const user = users.find(user => user.id == userId);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      <div className="col-span-1">
        <ProfileSidebar
          userName={user.name}
          userUsername={user.username}
          UserEmail={user.email}
        />
      </div>
      <div className="col-span-1 sm:col-span-2 md:col-span-3">
        <div className="bg-gray-800 rounded-lg px-6 py-4 space-y-4">
          <h1 className="uppercase font-semibold tracking-widest text-sm">{'User\'s Games'}</h1>
          <div className="flex flex-col space-y-2">
            {'Placeholder'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
