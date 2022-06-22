const { test, expect } = require("@playwright/test")

test("120 + 1 should be 121", async ({ request }) => {
    const response = await request.post("/math/addition", { params: { operand1: 120, operand2: 1 } })
    expect(response.status()).toEqual(200)
    expect(await response.json()).toEqual({
        message: "OK",
        result: 121,
    })
})

test("-101.10 + 101.10 should be 0", async ({ request }) => {
    const response = await request.post("/math/addition", { params: { operand1: -101.10, operand2: 101.10 } })
    expect(response.status()).toEqual(200)
    expect(await response.json()).toEqual({
        message: "OK",
        result: 0,
    })
})

test("1 + 'abc' should result in 400", async ({ request }) => {
    const response = await request.post("/math/addition", { params: { operand1: 1, operand2: "abc" } })
    expect(response.status()).toEqual(400)
    expect(await response.json()).toEqual({
        message: "Operands are not defined or are not a number",
        operands: { operand1: "1", operand2: "abc" },
    })
})

test("Missing input should result in 400", async ({ request }) => {
    const response = await request.post("/math/addition", { params: { operand1: 500 } })
    expect(response.status()).toEqual(400)
    expect(await response.json()).toEqual({
        message: "Operands are not defined or are not a number",
        operands: { operand1: "500", operand2: null },
    })
})
