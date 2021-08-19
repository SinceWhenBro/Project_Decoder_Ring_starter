const expect = require('chai').expect;
const { substitution } = require('../src/substitution');

describe("substitution()", () => {
  describe("error handling", () => {
      it("should return false if sub alphabet is missing", () => {
          const actual = substitution("thinkful")
          expect(actual).to.be.false
      })
      it("should return false if sub alphabet is not 26 characters", () => {
          const actual = substitution("thinkful", "whew")
          expect(actual).to.be.false
      })
      it("should return false if sub alphabet is not unqiue", () => {
          const actual = substitution("thinkful", "abbabbabbbabafffffffffffff")
          expect(actual).to.be.false
      })
  })
  describe("encoding a message", () => {
      it("should encode message with substitute alphabet", () => {
          const expected = 'jrufscpw'
          const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev")
          expect(actual).to.equal(expected)
      })
      it("should work with any key of unique characters", () => {
          const expected = "y&ii$r&"
          const actual = substitution("message", "$wae&zrdxtfcygvuhbijnokmpl")
          expect(actual).to.equal(expected)
      })
      it("should preserve spaces", () => {
          const expected = 'elp xhm xf mbymwwmfj dne'
          const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev")
          expect(actual).to.equal(expected)
      })
  })
  describe("decoding a message", () => {
      it("should decode a message with the substitution alphabet", () => {
          const expected = 'thinkful'
          const actual = substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false)
          expect(actual).to.equal(expected)
      })
      it("should work with any key of unique characters", () => {
          const expected = "message"
          const actual = substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false)
          expect(actual).to.equal(expected)
      })
      it("should preserve spaces", () => {
          const expected = "you are an excellent spy"
          const actual = substitution('elp xhm xf mbymwwmfj dne', "xoyqmcgrukswaflnthdjpzibev", false)
          expect(actual).to.equal(expected)
      })
  })
})