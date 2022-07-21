const Router = require("@koa/router")
const router = new Router()
const { validateAge } = require("../../driverLicense/driverLicense")

router.post("/license", (ctx) => {
    const age = ctx.request.query.age
    const result = validateAge(age)
    if (result === "Age is not defined or are not a number") {
        ctx.status = 400
        ctx.body = {
            message: result,
        }
    } else {
        ctx.status = 200
        ctx.body = {
            message: result,
        }
    }
})

module.exports = {
    driverLicenseRouter: router,
}
