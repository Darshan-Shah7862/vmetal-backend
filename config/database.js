const parse = require("pg-connection-string").parse;
const config = parse(
  "postgres://vrtuokrfeyowui:c6cfc895a6108d5133da624c558955be95d120d2b0c54ca5c797c77455ae5e01@ec2-44-193-178-122.compute-1.amazonaws.com:5432/depgjet8akkae0"
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
