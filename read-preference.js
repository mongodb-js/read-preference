var NEEDS_SLAVE_OK = [
  'primaryPreferred',
  'secondary',
  'secondaryPreferred',
  'nearest',
  'any'
];

/**
 * @param {String} preference
 * @param {Object} tags
 * @param {Object} [options]
 * @option {Boolean} slave_ok - Manually override sending the slaveOk bit.
 * @return {ReadPreference}
 * @api public
 */
function ReadPreference(preference, tags, options) {
  if (!(this instanceof ReadPreference)) {
    return new ReadPreference(preference, tags, options);
  }
  options = options || {};

  this.preference = preference;
  this.tags = tags || [];
  this.options = options;
  this.slave_ok = options.slave_ok || NEEDS_SLAVE_OK.indexOf(this.preference) > -1;
}

/**
 * This needs slaveOk bit set
 *
 * @return {Boolean}
 * @api private
 */
ReadPreference.prototype.slaveOk = function() {
  return this.slave_ok;
};

/**
 * Are the two read preference equivalent
 * in terms of preferences built into the wire prototcol.
 *
 * @param {ReadPreference} a
 * @return {Boolean}
 * @api private
 */
ReadPreference.prototype.equals = function(a) {
  return a.preference === this.preference;
};

ReadPreference.prototype.toJSON = function() {
  return {
    preference: this.preference,
    tags: this.tags,
    options: this.options
  };
};

module.exports = exports = ReadPreference;
