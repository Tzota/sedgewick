'use strict';

const t4 = require('../../../code/1/3/4.js');
const expect = require('chai').expect;

describe('Parentheses', function() {
    it('should return true on balansed parentheses', function() {
        expect(t4.Parentheses('[()]{}{[()()]()}')).to.equal(true);
    });

    it('should return false on unbalansed parentheses', function() {
        expect(t4.Parentheses('[(])')).to.equal(false);
    });

    it('should fail on unexpected character', function() {
        expect(() => t4.Parentheses('[(*')).to.throw(Error, /Forbidden character/);
    });
});