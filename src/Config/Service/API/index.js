import axios from 'axios'
import { baseUrl } from 'server'

const appSpecificHeader = async () => ({
    'Content-Type': 'application/json',
    Authorization: `${(await accessToken() ? "Bearer" + (await accessToken()) : "")}`
});

async function accessToken() {
    return "Not available"
}

export async function api(path) {
    let options = {
        baseURl: baseUrl,
        headers: await appSpecificHeader()
    }
    return axios.create(options)
}

export async function catcher(e) {
    let res = e.response && e.response.data ? e.response.data : { message: "Network failed" }
}