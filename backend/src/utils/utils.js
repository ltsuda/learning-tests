function validateOperands(operand1, operand2) {
    const op1 = parseInt(operand1)
    const op2 = parseInt(operand2)
    if (isNaN(op1) || isNaN(op2)) {
        return {
            message: "Operands are not defined or are not a number",
            operands: {
                operand1: operand1,
                operand2: operand2,
            },
        }
    } else {
        return {
            message: "OK",
            operands: {
                operand1: op1,
                operand2: op2,
            },
        }
    }
}

module.exports = {
    validateOperands,
}
