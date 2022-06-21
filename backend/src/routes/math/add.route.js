const Router = require("@koa/router")
const router = new Router()
const { add } = require("../../add/add")
const { validateOperands } = require("../../utils/utils")

router.post("/add", (ctx) => {
    const operand1 = ctx.request.query.operand1
    const operand2 = ctx.request.query.operand2
    const parsedQuery = validateOperands(operand1, operand2)
    if (parsedQuery.message === "OK") {
        const result = add(parsedQuery.operands.operand1, parsedQuery.operands.operand2)
        ctx.response.status = 200
        ctx.body = {
            message: parsedQuery.message,
            result: result,
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
    addRouter: router,
}
