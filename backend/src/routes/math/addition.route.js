const Router = require("@koa/router")
const router = new Router()
const { addition } = require("../../addition/addition")
const { toThreeMaxDecimal, validateOperands } = require("../../utils/utils")

router.post("/addition", (ctx) => {
    const operand1 = ctx.request.query.operand1
    const operand2 = ctx.request.query.operand2
    const parsedQuery = validateOperands(operand1, operand2)
    if (parsedQuery.message === "OK") {
        const result = addition(operand1, operand2)
        const parsedResult = toThreeMaxDecimal(result)
        ctx.response.status = 200
        ctx.body = {
            message: parsedQuery.message,
            result: parsedResult,
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
    additionRouter: router,
}
