const { subtract } = require("../src/subtract/subtract")

describe("Subtraction tests", () => {
    test("5 - 3 should be 2", () => {
        result = subtract(5, 3)
        expect(result).toEqual(2)
    })

    test("-1 - 9 should be -10", () => {
        result = subtract(-1, 9)
        expect(result).toEqual(-10)
    })

    test("-11 - -15.5 should be 4.5", () => {
        result = subtract(-11, -15.5)
        console.log(result)
        expect(result).toEqual(4.5)
    })
})
