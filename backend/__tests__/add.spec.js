const { add } = require("../src/addition/add")

describe("Addition tests", () => {
    test("1 + 1 should be 2", () => {
        result = add(1, 1)
        expect(result).toBe(2)
    })

    test("-5 + 1 should be -4", () => {
        result = add(-5, 1)
        expect(result).toBe(-4)
    })

    test("0 + 10 should be 10", () => {
        result = add(0, 10)
        expect(result).toBe(10)
    })
})
