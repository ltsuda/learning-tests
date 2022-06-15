const { divide } = require("../src/divide/divide")

describe("Division tests", () => {
    test("10 / 2 should be 5", () => {
        result = divide(10, 2)
        expect(result).toBe(5)
    })

    test("-13 / 1 should be -13", () => {
        result = divide(-13, 1)
        expect(result).toBe(-13)
    })

    test("-6 / -12 should be 0.5", () => {
        result = divide(-6, -12)
        expect(result).toBe(0.5)
    })

    test("5 / 14 should be 0.357", () => {
        result = divide(5, 14)
        expect(result).toBe(0.357)
    })
})
