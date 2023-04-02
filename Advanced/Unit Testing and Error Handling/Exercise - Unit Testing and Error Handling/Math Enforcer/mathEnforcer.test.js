const { expect } = require('chai');
const { mathEnforcer } = require('./mathEnforcer');

describe('Math Operations', () => {mathEnforcer

    // let istance = null;

    // beforeEach(() => {
    //     istance = mathEnforcer;
    // });

    // it('All function', () => {
    //     expect(istance).to.has.ownProperty('addFive');
    //     expect(istance).to.has.ownProperty('subtractTen');
    //     expect(istance).to.has.ownProperty('sum');
    // });

    describe('Test addFive Function:', () => {

        it('Test 1: If the input is non-numeric', () => {
            expect(mathEnforcer.addFive('1')).to.be.undefined; //If use beforeEach() ---> expect(istance.addFive('1')).to.be.undefined;
            expect(mathEnforcer.addFive([])).to.be.undefined;
            expect(mathEnforcer.addFive()).to.be.undefined;
            expect(mathEnforcer.addFive({})).to.be.undefined;
            expect(mathEnforcer.addFive(null)).to.be.undefined;
            expect(mathEnforcer.addFive(undefined)).to.be.undefined;
        });

        it('Test 2: If the input is number', () => {
            expect(mathEnforcer.addFive(2)).to.be.equal(7);
            expect(mathEnforcer.addFive(3.5)).to.be.equal(8.5);
            expect(mathEnforcer.addFive(-5)).to.be.equal(0);
        });
    });

    describe('Test subtractTen Function', () => {

        it('Test 1: If the input is non-numeric', () => {
            expect(mathEnforcer.subtractTen('1')).to.be.undefined;
            expect(mathEnforcer.subtractTen()).to.be.undefined;
            expect(mathEnforcer.subtractTen([])).to.be.undefined;
            expect(mathEnforcer.subtractTen({})).to.be.undefined;
            expect(mathEnforcer.subtractTen(null)).to.be.undefined;
            expect(mathEnforcer.subtractTen(undefined)).to.be.undefined;
        });

        it('Test 2: If the input is number', () => {
            expect(mathEnforcer.subtractTen(2)).to.be.equal(-8);
            expect(mathEnforcer.subtractTen(5.5)).to.be.equal(-4.5);
            expect(mathEnforcer.subtractTen(-5)).to.be.equal(-15);
        });

    });

    describe('Test sum Function', () => {
        it('Test 1: If one or two parameters are non-numeric', () => {
            expect(mathEnforcer.sum('1', 1)).to.be.undefined;
            expect(mathEnforcer.sum(1, '1')).to.be.undefined;
            expect(mathEnforcer.sum()).to.be.undefined;
            expect(mathEnforcer.sum(1)).to.be.undefined;
            expect(mathEnforcer.sum([], 1)).to.be.undefined;
            expect(mathEnforcer.sum(1, [])).to.be.undefined;
            expect(mathEnforcer.sum(1, {})).to.be.undefined;
            expect(mathEnforcer.sum({}, 1)).to.be.undefined;
            expect(mathEnforcer.sum(null, 1)).to.be.undefined;
            expect(mathEnforcer.sum(1, null)).to.be.undefined;
            expect(mathEnforcer.sum(1, undefined)).to.be.undefined;
            expect(mathEnforcer.sum(undefined, 1)).to.be.undefined;
        });

        it('Test 2: If one or two parameters are number', () => {
            expect(mathEnforcer.sum(2, 5)).to.be.equal(7);
            expect(mathEnforcer.sum(5.5, 5.7)).to.be.equal(11.2);
            expect(mathEnforcer.sum(-5, 5)).to.be.equal(0);
        });
    })
})