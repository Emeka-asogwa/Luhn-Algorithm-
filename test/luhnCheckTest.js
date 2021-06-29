const assert = require('chai').assert;
const luhnCheck = require('../luhnAlgorithm');

describe('luhnCheck()', function() {
  it('should detect a valid number', function() {
    let valid = '79927398713';
    assert.equal(luhnCheck(valid), true);
  });
  it('should detect an invalid number', function() {
    let invalid = '7992739871';
    assert.equal(luhnCheck(invalid), false);
  });
  
});
