const Koa = require("koa")
const app = new Koa()
const bodyParser = require("koa-body")

const { mainRouter } = require("./routes/routes")

mainRouter.get("/", (ctx) => {
    ctx.status = 200
    ctx.body = "Welcome to KoaJS!"
})

app.use(bodyParser())
app.use(mainRouter.routes())

app.listen(3000)
console.log("Started server on port 3000")
