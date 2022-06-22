const { division } = require("../src/division/division")

describe("Division tests", () => {
    test("10 / 2 should be 5", () => {
        result = division(10, 2)
        expect(result).toEqual(5)
    })

    test("-13 / 1 should be -13", () => {
        result = division(-13, 1)
        expect(result).toEqual(-13)
    })

    test("-6 / -12 should be 0.5", () => {
        result = division(-6, -12)
        expect(result).toEqual(0.5)
    })

    test("5 / 10 should be 0.5", () => {
        result = division(5, 10)
        expect(result).toEqual(0.5)
    })
})
