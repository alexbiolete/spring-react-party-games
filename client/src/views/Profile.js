import { useMemo } from 'react';
import ProfileSidebar from '../components/molecules/ProfileSidebar';

const Profile = ({
  authenticatedUserName,
  authenticatedUserUsername,
  authenticatedUserEmail
}) => {
  const columns = useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'name'
      },
      {
        Header: 'ID',
        accessor: 'id'
      }
    ],
    []
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      <div className="col-span-1">
        <ProfileSidebar
          userName={authenticatedUserName}
          userUsername={authenticatedUserUsername}
          userEmail={authenticatedUserEmail}
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

export default Profile;
