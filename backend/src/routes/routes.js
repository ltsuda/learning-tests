const Router = require("@koa/router")
const mainRouter = new Router()
const mathRouter = new Router()

const { addRouter } = require("./math/add.route")

mathRouter.prefix("/math")
mathRouter.use(addRouter.routes(), addRouter.allowedMethods())

mainRouter.use(mathRouter.routes())

module.exports = {
    mainRouter,
}
