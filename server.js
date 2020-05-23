"use strict";

const Hapi = require("@hapi/hapi");
const Inert = require("inert");
const api = require("./routes/api");
const akaya = require('akaya');

const server = new Hapi.Server({
  port: 8080,
  host: "localhost"
});

(async () => {
  try {
    await server.register([Inert, akaya, api], {
      routes: {
        prefix: '/api'
      }
    });

    server.route({
      method: 'GET',
      path: '/{path*}',
      handler: {
        directory: {
          path: './public',
          listing: false,
          index: ['index.html']
        }
      }
    });

    await server.start();

  } catch (err) {
    console.log(err);
  }
})();
