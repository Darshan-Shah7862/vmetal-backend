module.exports = ({ env }) => ({
  url: env("HOST", "https://vmetal.herokuapp.com/"),
  proxy: true,
  // port: env.int('PORT', 1337),
  app: {
    keys: env.array("APP_KEYS", ["testKey1", "testKey2"]),
  },
});
