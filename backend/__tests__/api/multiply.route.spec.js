const { test, expect } = require("@playwright/test")

test("1024 * 2 should be 2048", async ({ request }) => {
    const response = await request.post("/math/multiply", { params: { operand1: 1024, operand2: 2 } })
    expect(response.status()).toEqual(200)
    expect(await response.json()).toEqual({
        message: "OK",
        result: 2048,
    })
})

test("11 * -11 should be -121", async ({ request }) => {
    const response = await request.post("/math/multiply", { params: { operand1: 11, operand2: -11 } })
    expect(response.status()).toEqual(200)
    expect(await response.json()).toEqual({
        message: "OK",
        result: -121,
    })
})

test("0 * 'ghi' should result in 400", async ({ request }) => {
    const response = await request.post("/math/multiply", { params: { operand1: 0, operand2: "ghi" } })
    expect(response.status()).toEqual(400)
    expect(await response.json()).toEqual({
        message: "Operands are not defined or are not a number",
        operands: { operand1: "0", operand2: "ghi" },
    })
})

test("Missing input should result in 400", async ({ request }) => {
    const response = await request.post("/math/multiply", { params: { operand2: 1 } })
    expect(response.status()).toEqual(400)
    expect(await response.json()).toEqual({
        message: "Operands are not defined or are not a number",
        operands: { operand1: null, operand2: "1" },
    })
})
