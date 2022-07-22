// import fetch from "node-fetch"

const baseAPI = new URL("http://localhost:3000")

async function send({ method, path, params }) {
    const options = { method, headers: {} }
    if (params) {
        options.headers["Content-Type"] = "application/json"
        baseAPI.search = new URLSearchParams(params)
    }
    const url = path.startsWith("/") ? `${baseAPI.origin}${path}` : `${baseAPI.origin}/${path}`

    const response = await fetch(`${url}${baseAPI.search}`, options)
    try {
        return await response.json()
    } catch (err) {
        return await response.text()
    }
}

async function post(path, params) {
    return await send({ method: "POST", path, params })
}
export async function get(path) {
    return await send({ method: "GET", path })
}

export async function driver(path, params) {
    return await post(`/driver/${path}`, params)
}
