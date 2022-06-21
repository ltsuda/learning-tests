const { validateOperands } = require("../src/utils/utils")

describe("Utils tests", () => {
    test("Number inputs should be OK", () => {
        const result = validateOperands(50, 51)
        expect(result).toEqual({
            message: "OK",
            operands: {
                operand1: 50,
                operand2: 51,
            },
        })
    })
    test("String character inputs should result in error", () => {
        const result = validateOperands(10, "z")
        expect(result).toEqual({
            message: "Operands are not defined or are not a number",
            operands: {
                operand1: 10,
                operand2: "z",
            },
        })
    })
    test("Missing inputs should result in error", () => {
        const result = validateOperands(11)
        expect(result).toEqual({
            message: "Operands are not defined or are not a number",
            operands: {
                operand1: 11,
                operand2: undefined,
            },
        })
    })
})
