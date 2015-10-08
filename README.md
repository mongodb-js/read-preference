# mongodb-read-preference

[![build status](https://secure.travis-ci.org/mongodb-js/read-preference.png)](http://travis-ci.org/mongodb-js/read-preference)

> MongoDB Read Preferences.

## Example

```javascript
var ReadPreference = require('mongodb-read-preference');
console.log(ReadPreference.primary.slaveOk());
>>> false
console.log(ReadPreference.secondary.slaveOk());
>>> true
```

## License

Apache 2
