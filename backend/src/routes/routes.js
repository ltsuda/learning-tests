const Router = require("@koa/router")
const mainRouter = new Router()
const mathRouter = new Router()

const { addRouter } = require("./math/add.route")
const { subtractRouter } = require("./math/subtract.route")
const { multiplyRouter } = require("./math/multiply.route")
const { divideRouter } = require("./math/divide.route")

mathRouter.prefix("/math")
mathRouter
    .use(addRouter.routes(), addRouter.allowedMethods())
    .use(subtractRouter.routes(), subtractRouter.allowedMethods())
    .use(multiplyRouter.routes(), multiplyRouter.allowedMethods())
    .use(divideRouter.routes(), divideRouter.allowedMethods())

mainRouter.use(mathRouter.routes())

module.exports = {
    mainRouter,
}
