function validateOperands(operand1, operand2) {
    const op1 = parseInt(operand1)
    const op2 = parseInt(operand2)
    if (isNaN(op1) || isNaN(op2)) {
        return {
            message: "Operands are not defined or are not a number",
            operands: {
                operand1: operand1 ? operand1 : null,
                operand2: operand2 ? operand2 : null,
            },
        }
    } else {
        return {
            message: "OK",
        }
    }
}

function toThreeMaxDecimal(result) {
    return Number(result.toFixed(3))
}

module.exports = {
    validateOperands,
    toThreeMaxDecimal,
}
