var ReadPreference = require('../');
var assert = require('assert');

describe('mongodb-read-preference', function() {
  it('should work', function() {
    assert(ReadPreference);
  });
  it('should expose `primary`', function() {
    assert(ReadPreference.primary);
    assert.equal(ReadPreference.primary.mode, 'primary');
    assert.equal(ReadPreference.primary.slaveOk(), false);
  });
  it('should expose `primaryPreferred`', function() {
    assert(ReadPreference.primaryPreferred);
    assert.equal(ReadPreference.primaryPreferred.mode, 'primaryPreferred');
    assert.equal(ReadPreference.primaryPreferred.slaveOk(), true);
  });
  it('should expose `secondary`', function() {
    assert(ReadPreference.secondary);
    assert.equal(ReadPreference.secondary.mode, 'secondary');
    assert.equal(ReadPreference.secondary.slaveOk(), true);
  });
  it('should expose `secondaryPreferred`', function() {
    assert(ReadPreference.secondaryPreferred);
    assert.equal(ReadPreference.secondaryPreferred.mode, 'secondaryPreferred');
    assert.equal(ReadPreference.secondaryPreferred.slaveOk(), true);
  });
  it('should expose `nearest`', function() {
    assert(ReadPreference.nearest);
    assert.equal(ReadPreference.nearest.mode, 'nearest');
    assert.equal(ReadPreference.nearest.slaveOk(), true);
  });
});
