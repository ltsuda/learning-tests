const { multiply } = require("../src/multiply/multiply")

describe("Multiplication tests", () => {
    test("1 * 1 should be 1", () => {
        result = multiply(1, 1)
        expect(result).toBe(1)
    })

    test("12 * 0 should be 0", () => {
        result = multiply(12, 0)
        expect(result).toBe(0)
    })

    test("-5 * 2 should be -10", () => {
        result = multiply(-5, 2)
        expect(result).toBe(-10)
    })
})
