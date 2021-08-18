const expect = require('chai').expect;
const { substitution } = require('../src/substitution');

describe("substitution", () => {
  it('Should return "jrufscpw"', () => {
    const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
    const expected = 'jrufscpw';
    expect(actual).to.equal(expected);
  });
});

describe("substitution", () => {
    it('Should return "elp xhm xf mbymwwmfj dne"', () => {
      const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
      const expected = 'elp xhm xf mbymwwmfj dne';
      expect(actual).to.equal(expected);
    });
  });

  describe("substitution", () => {
    it('Should return "thinkful"', () => {
      const actual = substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false);
      const expected = 'thinkful';
      expect(actual).to.equal(expected);
    });
  });

  describe("substitution", () => {
    it('Should return "y&ii$r&"', () => {
      const actual = substitution("message", "$wae&zrdxtfcygvuhbijnokmpl");
      const expected = 'y&ii$r&';
      expect(actual).to.equal(expected);
    });
  });

  describe("substitution", () => {
    it('Should return "message"', () => {
      const actual = substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false);
      const expected = 'message';
      expect(actual).to.equal(expected);
    });
  });

  describe("substitution", () => {
    it('Should return "false"', () => {
      const actual = substitution("thinkful", "short");
      const expected = false;
      expect(actual).to.equal(expected);
    });
  });

  describe("substitution", () => {
    it('Should return "false"', () => {
      const actual = substitution("thinkful", "abcabcabcabcabcabcabcabcyz");
      const expected = false;
      expect(actual).to.equal(expected);
    });
  });