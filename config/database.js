const parse = require("pg-connection-string").parse;
const config = parse(
  "postgres://snbhqhhpngfvqd:b97dddb7a80d324ce3d9580e2f1486b1a965b37ab03ffcf74d58465451e594ae@ec2-54-86-106-48.compute-1.amazonaws.com:5432/dduhlr77ds7eqk"
);
module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: config.host,
      port: config.port,
      database: config.database,
      user: config.user,
      password: config.password,
      ssl: {
        rejectUnauthorized: false,
      },
    },
    debug: false,
  },
});
