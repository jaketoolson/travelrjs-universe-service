const PlanetController = require('../../controllers/planet');

module.exports = {
  name: "ApiRoutes",
  register: async (server, options) => {
    server.route([
      {
        method: "GET",
        path: "/planet",
        config: {
          id: 'planet.index',
          handler: PlanetController.index
        }
      },
      {
        method: "GET",
        path: "/planet/{id}",
        config: {
          id: 'planet.show',
          handler: PlanetController.show,
        }
      }
    ]);
  }
};
