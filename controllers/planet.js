const Planet = require('../models').Planet;
const serialize = require('../resources/planetserializer');

// TODO: Add JSON API Spec support
module.exports.index = (request, h) => {
  return Planet.findAll({ include: ['amenities', 'galaxy', 'photo', 'terrains'] }).then((planets) => {
    return serialize(request, planets);
  });
};

// TODO: Add abstraction to use eagerloading.
module.exports.show = (request, h) => {
  return Planet.findById(request.params.id, { include: ['amenities', 'galaxy', 'photo', 'terrains']}).then((planet) => {
    return serialize(request, planet);
  });
};
