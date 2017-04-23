var t10 = require('../../../code/1/3/10.js');

var chai = require('chai');
var expect = chai.expect;

describe('InfixToPostfix', function() {

  
  it('a+b*c', function() {
    expect(t10.InfixToPostfix("a+b*c")).to.equal('abc*+');
  });

  it('a+b-c*d', function() {
    expect(t10.InfixToPostfix("a+b-c*d")).to.equal('abcd*-+');
  });


  it('a+b*c-d', function() {
    expect(t10.InfixToPostfix("a+b*c-d")).to.equal('abc*+d-');
  });


  it('(a+b)*c', function() {
    expect(t10.InfixToPostfix('(a+b)*c')).to.equal('ab+c*');
  });

  it('(a+b*c)/2', function() {
    expect(t10.InfixToPostfix('(a+b*c)/2')).to.equal('abc*+2/');
  });

  it('(a*(b+c)+d)/2', function() {
    expect(t10.InfixToPostfix('(a*(b+c)+d)/2')).to.equal('abc+*d+2/');
  });
});
