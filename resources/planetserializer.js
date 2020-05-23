let JSONAPISerializer = require('jsonapi-serializer').Serializer;

// TODO: Abstract each models schema, relationship definitions etc;
module.exports = function(request, data){
  return new JSONAPISerializer('planet', {
    dataLinks: {
      self: (data) => {
        return request.aka('planet.show', {
          params: {
            id: data.id,
          }
        })
      }
    },
    attributes: [
      'name',
      'uuid',
      'description',
      'diameter',
      'featured',
      'climate',

      // relationships
      'photo',
      'galaxy',
      'amenities',
      'terrains',
    ],
    pluralizeType: false,
    galaxy: {
      ref: 'id',
      pluralizeType: false,
      includedLinks: {
        self: function (record, current) {
          return 'some link';
        }
      },
      relationshipMeta: {
        name: (data, galaxy) => {
          return galaxy.name;
        }
      }
    },
    amenities: {
      ref: 'id',
      attributes: [
        'name',
        'description',
        'slug',
        'is_active',
      ],
      pluralizeType: false,
      includedLinks: {
        self: function (record, current) {
          return 'some link';
        }
      },
    },
    photo: {
      ref: 'id',
      pluralizeType: false,
      includedLinks: {
        self: function (record, current) {
          return 'some link';
        }
      },
      relationshipLinks: {
        self: (data, photo) => {
          return 'self';
        },
        src: (data, photo) => {
          return photo.file_path;
        },
        thumb_src: (data, photo) => {
          return photo.thumbnail;
        }
      }
    },
    terrains: {
      ref: 'id',
      attributes: [
        'name',
        'description',
      ],
      pluralizeType: false,
      includedLinks: {
        self: function (record, current) {
          return 'some link';
        }
      },
    }
  }).serialize(data);
};