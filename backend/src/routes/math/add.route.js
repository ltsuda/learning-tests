const Router = require("@koa/router")
const router = new Router()
const { add } = require("../../add/add")

router.post("/add", (ctx) => {
    operand1 = ctx.request.query.operand1
    operand2 = ctx.request.query.operand2
    result = add(+operand1, +operand2)
    ctx.response.status = 200
    ctx.body = result
})

module.exports = {
    addRouter: router,
}
