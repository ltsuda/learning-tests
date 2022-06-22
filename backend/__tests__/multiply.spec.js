const { multiply } = require("../src/multiply/multiply")

describe("Multiplication tests", () => {
    test("1 * 1 should be 1", () => {
        result = multiply(1, 1)
        expect(result).toEqual(1)
    })

    test("12 * 0 should be 0", () => {
        result = multiply(12, 0)
        expect(result).toEqual(0)
    })

    test("-5 * 2.3 should be -11.555", () => {
        result = multiply(-5, 2.311)
        expect(result).toEqual(-11.555)
    })
})
