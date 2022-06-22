const Router = require("@koa/router")
const mainRouter = new Router()
const mathRouter = new Router()

const { additionRouter } = require("./math/addition.route")
const { subtractionRouter } = require("./math/subtraction.route")
const { multiplicationRouter } = require("./math/multiplication.route")
const { divisionRouter } = require("./math/division.route")

mathRouter.prefix("/math")
mathRouter
    .use(additionRouter.routes(), additionRouter.allowedMethods())
    .use(subtractionRouter.routes(), subtractionRouter.allowedMethods())
    .use(multiplicationRouter.routes(), multiplicationRouter.allowedMethods())
    .use(divisionRouter.routes(), divisionRouter.allowedMethods())

mainRouter.use(mathRouter.routes())

module.exports = {
    mainRouter,
}
