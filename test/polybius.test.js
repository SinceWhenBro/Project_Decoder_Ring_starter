// Write your tests here!
const expect = require('chai').expect;
const { polybius } = require('../src/polybius');

describe('polybius', () =>{
    it('should encode a message by translating each letter to number pairs', () =>{
        let actual = polybius("thinkful");
        expect(actual).to.equal("4432423352125413");
    });

    it('Should translate bot i and j to 42', () =>{
        let actual = polybius("thjnkful");
        expect(actual).to.equal("4432423352125413");
    });

    it("should leave spaces as is", () => {
        const expected = "hello world";
        const actual = polybius("3251131343 2543241341", false)
        const expected1 = "3251131343 2543241341"
        const actual1 = polybius("hello world")
        expect(actual).to.equal(expected)
        expect(actual1).to.equal(expected1)
    })

    it('Should decode a message by translating each pair of numbers into a letter', () =>{
        let actual = polybius("3251131343 2543241341", false);
        expect(actual).to.equal("hello world");
    });

    it("Should translate 42 to both i and j", () =>{
        let actual = polybius("4432423352125413", false);
        expect(actual).to.equal("thi/jnkful");
    });
    it('Returns false if the length of all number is odd', () =>{
        let actual = polybius("4432324", false);
        expect(actual).to.be.false;
    });
});













