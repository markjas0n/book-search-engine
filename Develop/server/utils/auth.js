// auth.js
// Contains JWT authentication logic, including the auth middleware for verifying tokens.

const jwt = require('jsonwebtoken');

const secret = 'mysecretsshhhhh';
const expiration = '2h';

module.exports = {
  // Middleware function to verify the JWT token and attach the user data to the request
  authMiddleware: function ({ req }) {
    let token = req.headers.authorization || '';

    if (token) {
      token = token.split(' ').pop().trim();
    }

    if (!token) {
      return req;
    }

    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log('Invalid token');
    }

    return req;
  },

  // Signs a JWT token with user data
  signToken: function ({ username, email, _id }) {
    const payload = { username, email, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
