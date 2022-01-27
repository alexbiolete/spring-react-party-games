const data = {
  games: [
    {
      id: 0,
      name: 'Skribbl',
      image: null
    },
    {
      id: 1,
      name: 'Upcoming game',
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
      gameId: 0,
      state: 'playing',
      type: 'private',
      userCount: 9,
      userMax: 16
    },
    {
      id: 1,
      name: 'Drunk kings',
      gameId: 0,
      state: 'playing',
      type: 'public',
      userCount: 5,
      userMax: 8
    },
    {
      id: 2,
      name: 'Dorms party',
      gameId: 0,
      state: 'waiting',
      type: 'private',
      userCount: 0,
      userMax: 16
    },
    {
      id: 3,
      name: 'Currently sausage party, need some girls',
      gameId: 0,
      state: 'waiting',
      type: 'public',
      userCount: 7,
      userMax: 16
    },
    {
      id: 4,
      name: 'Anti-social social club',
      gameId: 0,
      state: 'playing',
      type: 'public',
      userCount: 3,
      userMax: 4
    },
    {
      id: 5,
      name: 'Free for all',
      gameId: 0,
      state: 'waiting',
      type: 'public',
      userCount: 1,
      userMax: 16
    },
    {
      id: 6,
      name: 'Dorms party',
      gameId: 0,
      state: 'playing',
      type: 'private',
      userCount: 10,
      userMax: 10
    },
    {
      id: 7,
      name: 'The regular ones',
      gameId: 0,
      state: 'offline',
      type: 'public',
      userCount: 0,
      userMax: 20
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
