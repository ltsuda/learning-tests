const { test, expect } = require("@playwright/test")

test("120 + 1 should be 121", async ({ request }) => {
    const response = await request.post("/math/add", { params: { operand1: 120, operand2: 1 } })
    expect(response.status()).toEqual(200)
    expect(await response.json()).toEqual(121)
})
