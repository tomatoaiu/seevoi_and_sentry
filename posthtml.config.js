module.exports = {
  plugins: {
    "posthtml-expressions": {
      locals: {
        env: process.env,
      },
    },
  },
};
