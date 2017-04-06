const home = {
  method: 'GET',
  path: '/',
  handler: (req, reply) => {
    const data = {
      posts: [{
        title: 'Post1',
        body: '1-Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam magni maxime dicta ullam aut, sunt.',
        username: 'antonio',
      },
      {
        title: 'Post2',
        body: '2-Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam magni maxime dicta ullam aut, sunt.',
        username: 'martha',
      },
      ],
    };
    reply.view('index', data);
  },
};


const createPost = {
  method: 'GET',
  path: '/create-post',
  handler: (req, reply) => {
    const username = req.payload.username;
    const password = req.payload.password;
    req.cookieAuth.set({ username });

    reply.view('create-post', {
      credentials: req.auth.credentials,
    });
  },
};

const authRoute = {
  method: 'GET',
  path: '/auth-only',
  handler: (req, reply) => {
    reply('You\'re not authenticated :(');
  },
};

module.exports = [
  home,
  createPost,
  authRoute,
];
