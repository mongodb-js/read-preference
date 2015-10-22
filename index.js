/**
 * Backwards compat support from `mongodb@2.0.43`.
 */
var legacy = false;
try {
  ReadPreference = require('mongodb/node_modules/mongodb-core').ReadPreference;
  legacy = true;
} catch (e) {
  try {
    ReadPreference = require('mongodb-core').ReadPreference;
    legacy = true;
  } catch (err) {
    legacy = false;
    ReadPreference = require('./read-preference');
  }
}

module.exports = exports = ReadPreference;

/**
 * Only allow reading from the primary of a replicaset.
 *
 * @api public
 */
exports.primary = new ReadPreference('primary');

/**
 * Read from the primary of a replicaset if available,
 * but also allow reading from secondaries.
 *
 * @api public
 */
exports.primaryPreferred = new ReadPreference('primaryPreferred');

/**
 * Only read from secondaries
 *
 * @api public
 */
exports.secondary = new ReadPreference('secondary');

/**
 * Read from secondaries but also allow reads from secondaries.
 *
 * @api public
 */
exports.secondaryPreferred = new ReadPreference('secondaryPreferred');

/**
 * Read from whatever instance is `nearest`.
 *
 * @api public
 */
exports.nearest = new ReadPreference('nearest');

/**
 * Read from any instance.
 *
 * @api public
 */
exports.any = new ReadPreference('any');

if (legacy) {
  exports.any.slaveOk = function() {
    return true;
  };
}
