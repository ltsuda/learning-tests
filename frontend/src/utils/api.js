import fetch from "node-fetch"

const baseAPI = new URL("http://localhost:3000")

async function send({ method, path, params }) {
    const options = { method, headers: {} }
    if (params) {
        options.headers["Content-Type"] = "application/json"
        baseAPI.search = new URLSearchParams(params)
    }
    const url = path.startsWith("/") ? `${baseAPI.origin}${path}` : `${baseAPI.origin}/${path}`

    return fetch(`${url}${baseAPI.search}`, options)
        .then((response) => {
            return response.text()
        })
        .then((json) => {
            try {
                const parsed = JSON.parse(json)
                return parsed
            } catch (err) {
                return json
            }
        })
}

export function get(path) {
    return send({ method: "GET", path })
}
export function post(path, params) {
    return send({ method: "POST", path, params })
}
