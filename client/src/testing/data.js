const data = {
  games: [
    {
      id: 1,
      name: 'Guess the password',
      image: null
    },
    {
      id: 2,
      name: 'Upcoming game',
      image: null
    },
    {
      id: 3,
      name: 'Upcoming game',
      image: null
    },
    {
      id: 4,
      name: 'Upcoming game',
      image: null
    },
    {
      id: 5,
      name: 'Upcoming game',
      image: null
    }
  ],
  roomTypes: [
    {
      id: 0,
      type: "public"
    },
    {
      id: 1,
      type: "private"
    }
  ],
  rooms: [
    {
      id: 0,
      name: 'With my buddies',
      gameId: 1,
      state: 'playing',
      type: 'private',
      nr_users: 9,
      max_users: 16
    },
    {
      id: 1,
      name: 'Drunk kings',
      gameId: 1,
      state: 'playing',
      type: 'public',
      nr_users: 5,
      max_users: 8
    },
    {
      id: 2,
      name: 'Dorms party',
      gameId: 1,
      state: 'waiting',
      type: 'private',
      nr_users: 0,
      max_users: 16
    },
    {
      id: 3,
      name: 'Currently sausage party, need some girls',
      gameId: 1,
      state: 'waiting',
      type: 'public',
      nr_users: 7,
      max_users: 16
    },
    {
      id: 4,
      name: 'Anti-social social club',
      gameId: 1,
      state: 'playing',
      type: 'public',
      nr_users: 3,
      max_users: 4
    },
    {
      id: 5,
      name: 'Free for all',
      gameId: 1,
      state: 'waiting',
      type: 'public',
      nr_users: 1,
      max_users: 16
    },
    {
      id: 6,
      name: 'Dorms party',
      gameId: 1,
      state: 'playing',
      type: 'private',
      nr_users: 10,
      max_users: 10
    },
    {
      id: 7,
      name: 'The regular ones',
      gameId: 1,
      state: 'offline',
      type: 'public',
      nr_users: 0,
      max_users: 20
    }
  ],
  users: [
    {
      id: 0,
      username: 'Alex',
      type: 'admin'
    },
    {
      id: 1,
      username: 'Peter',
      type: 'user'
    },
    {
      id: 2,
      username: 'Anna',
      type: 'guest'
    }
  ],
  chatMessages: [
    {
      id: 0,
      userId: 0,
      text: 'Amet qui Lorem ea nostrud dolor sint in quis anim.'
    },
    {
      id: 1,
      userId: 1,
      text: 'Ullamco nisi nostrud culpa aliqua esse sint est exercitation dolore occaecat ut eu.'
    },
    {
      id: 2,
      userId: 2,
      text: 'Labore aliqua ut nisi ex.'
    },
    {
      id: 3,
      userId: 0,
      text: 'In nostrud cupidatat exercitation excepteur deserunt deserunt duis voluptate ullamco do eiusmod ipsum irure sit.'
    },
  ]
};

export default data;
