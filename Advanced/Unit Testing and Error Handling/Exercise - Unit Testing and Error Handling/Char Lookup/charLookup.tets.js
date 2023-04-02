const { expect } = require('chai');
const lookupChar = require('./charLookup');

describe('Seacrhing characters', () => {

    it('Test 1: Check types of parameters', () => {
        expect(lookupChar(1, 'a')).to.be.undefined;
        expect(lookupChar('a', 'a')).to.be.undefined;
        expect(lookupChar('a')).to.be.undefined;
        expect(lookupChar(1, 1)).to.be.undefined;
        expect(lookupChar('a', 1.1)).to.be.undefined;
        expect(lookupChar('a', null)).to.be.undefined;
        expect(lookupChar('a', [1])).to.be.undefined;
        expect(lookupChar('a', {})).to.be.undefined;
        expect(lookupChar('a', undefined)).to.be.undefined;
    });

    it('Test 2: If index is invalid', () => {
        expect(lookupChar('a', 1)).to.be.equal('Incorrect index');
        expect(lookupChar('a', -1)).to.be.equal('Incorrect index');
        expect(lookupChar('', 0)).to.be.equal('Incorrect index');
    });

    it('Test 3: If two parameters are valid', () => {
        expect(lookupChar('abc', 2)).to.be.equal('c');
    });
})