const { toThreeMaxDecimal, validateOperands } = require("../src/utils/utils")

describe("Utils tests", () => {
    test("validateOperands function with Number inputs should be OK", () => {
        const result = validateOperands(50, 51)
        expect(result).toEqual({ message: "OK" })
    })

    test.each([
        [10, "z", 10, "z"],
        [11, undefined, 11, null],
    ])(
        "validateOperands(%s, %s) inputs should result in error",
        (op1, op2, expectedOp1, expectedOp2) => {
            const result = validateOperands(op1, op2)
            expect(result).toEqual({
                message: "Operands are not defined or are not a number",
                operands: {
                    operand1: expectedOp1,
                    operand2: expectedOp2,
                },
            })
        }
    )

    test.each([
        [1, 1],
        [1.25, 1.25],
        [-3.456, -3.456],
        [5.6667, 5.667],
    ])("toThreeMaxDecimal(%s) should parse values to a Number with a maximum of three decimals", (value, expected) => {
        const result = toThreeMaxDecimal(value)
        expect(result).toEqual(expected)
    })
})
