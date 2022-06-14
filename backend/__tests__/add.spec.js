const { add } = require("../src/addition/add")

describe("Addition tests", () => {
    test("1 + 1 should be 2", () => {
        result = add(1, 1)
        expect(result).toBe(2)
    })
})
