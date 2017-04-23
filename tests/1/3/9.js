var t9 = require('../../../code/1/3/9.js');

var chai = require('chai');
var expect = chai.expect;

describe('CompleteLeftBrackets', function() {

  
  it('one brackets at the right end', function() {
    expect(t9.CompleteLeftBrackets("3+5)")).to.equal('(3+5)');
  });

  it('one brackets at the middle', function() {
    expect(t9.CompleteLeftBrackets("3+5)+6")).to.equal('(3+5)+6');
  });


  it('step 1', function() {
    expect(t9.CompleteLeftBrackets("1+2)*3-4)")).to.equal('(1+2)*(3-4)');
  });


  it('Sedgewick\'s task', function() {
    expect(t9.CompleteLeftBrackets("1+2)*3-4)*5-6)))")).to.equal('((1+2)*((3-4)*(5-6)))');
  });
 
});
