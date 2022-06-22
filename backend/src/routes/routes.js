const Router = require("@koa/router")
const mainRouter = new Router()
const mathRouter = new Router()

const { addRouter } = require("./math/add.route")
const { subtractRouter } = require("./math/subtract.route")

mathRouter.prefix("/math")
mathRouter
    .use(addRouter.routes(), addRouter.allowedMethods())
    .use(subtractRouter.routes(), subtractRouter.allowedMethods())

mainRouter.use(mathRouter.routes())

module.exports = {
    mainRouter,
}
