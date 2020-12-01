var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var validators = require('../../validators');

var types = validators.types;

exports.plugins = function (model) {
  model.plugin(function (schema, options) {
    schema.add({
      avatar: {
        type: Schema.Types.ObjectId,
        ref: 'binaries',
        validator: types.ref()
      }
    });
  });

  model.plugin(function (schema, options) {
    schema.add({
      name: {
        type: String,
        validator: types.name({
          length: 200
        })
      }
    });
  });

  model.plugin(function (schema, options) {
    schema.add({
      birthday: {
        type: Date,
        validator: types.birthday()
      }
    });
  });

  model.plugin(function (schema, options) {
    schema.add({
      location: {
        type: Schema.Types.ObjectId,
        ref: 'locations',
        validator: types.ref()
      }
    });
  });

  model.plugin(function (schema, options) {
    schema.add({
      contact: {
        type: Schema.Types.ObjectId,
        ref: 'contacts',
        validator: types.ref()
      }
    });
  });
};