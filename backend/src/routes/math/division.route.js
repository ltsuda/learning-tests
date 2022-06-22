const Router = require("@koa/router")
const router = new Router()
const { division } = require("../../division/division")
const { toThreeMaxDecimal, validateOperands } = require("../../utils/utils")

router.post("/division", (ctx) => {
    const operand1 = ctx.request.query.operand1
    const operand2 = ctx.request.query.operand2
    const parsedQuery = validateOperands(operand1, operand2)
    if (parsedQuery.message === "OK") {
        const result = division(operand1, operand2)
        if (result === Infinity) {
            ctx.response.status = 400
            ctx.body = {
                message: "Division by zero is not possible",
                operands: {
                    operand1: +operand1,
                    operand2: +operand2,
                },
            }
        } else {
            const parsedResult = toThreeMaxDecimal(result)
            ctx.response.status = 200
            ctx.body = {
                message: parsedQuery.message,
                result: parsedResult,
            }
        }
    } else {
        ctx.status = 400
        ctx.body = {
            message: parsedQuery.message,
            operands: parsedQuery.operands,
        }
    }
})

module.exports = {
    divisionRouter: router,
}
