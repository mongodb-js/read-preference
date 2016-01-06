var ReadPreference = require('../');
var assert = require('assert');

function testReadPref(rp, expectedStr, expectedSlaveOk) {
  assert(rp);
  if (typeof rp.slaveOk === 'function') {
    assert.equal(rp.mode, expectedStr);
    assert.equal(rp.slaveOk(), expectedSlaveOk);
  } else {
    assert.equal(rp.mode, expectedStr);
  }
}

describe('mongodb-read-preference', function() {
  it('should work', function() {
    assert(ReadPreference);
  });
  it('should expose `primary`', function() {
    testReadPref(ReadPreference.primary, 'primary', false);
  });
  it('should expose `primaryPreferred`', function() {
    testReadPref(ReadPreference.primaryPreferred, 'primaryPreferred', true);
  });
  it('should expose `secondary`', function() {
    testReadPref(ReadPreference.secondary, 'secondary', true);
  });
  it('should expose `secondaryPreferred`', function() {
    testReadPref(ReadPreference.secondaryPreferred, 'secondaryPreferred', true);
  });
  it('should expose `nearest`', function() {
    testReadPref(ReadPreference.nearest, 'nearest', true);
  });

  it('should be an instanceof the driver ReadPreference if available', function() {
    var DriverReadPreference;
    try {
      DriverReadPreference = require('mongodb').ReadPreference;
    } catch (e) {
      DriverReadPreference = null;
    }

    if (!DriverReadPreference) {
      this.skip();
      return;
    }

    assert(ReadPreference.primary instanceof DriverReadPreference);
  });
});
