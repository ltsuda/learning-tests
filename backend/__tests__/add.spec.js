const { add } = require("../src/add/add")

describe("Addition tests", () => {
    test("1 + 1 should be 2", () => {
        result = add(1, 1)
        expect(result).toEqual(2)
    })

    test("-5 + 1 should be -4", () => {
        result = add(-5, 1)
        expect(result).toEqual(-4)
    })

    test("0.1 + 10 should be 10.1", () => {
        result = add(0.1, 10)
        expect(result).toEqual(10.1)
    })
})
