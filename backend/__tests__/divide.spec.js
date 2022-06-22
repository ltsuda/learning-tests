const { divide } = require("../src/divide/divide")

describe("Division tests", () => {
    test("10 / 2 should be 5", () => {
        result = divide(10, 2)
        expect(result).toEqual(5)
    })

    test("-13 / 1 should be -13", () => {
        result = divide(-13, 1)
        expect(result).toEqual(-13)
    })

    test("-6 / -12 should be 0.5", () => {
        result = divide(-6, -12)
        expect(result).toEqual(0.5)
    })

    test("5 / 10 should be 0.5", () => {
        result = divide(5, 10)
        expect(result).toEqual(0.5)
    })
})
