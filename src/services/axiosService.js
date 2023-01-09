import axios from "axios";

// create baseURL and timeout
let newUrl = "http://192.168.55.26:5001/"
let currentUrl = window.location.href
console.log(currentUrl.slice(0, 22))
if (currentUrl.slice(0, 22) === 'http://localhost:8000/') {
    newUrl = 'http://localhost:5001/'
}
export const api = axios.create({
    baseURL: newUrl,
    timeout: 30000
})





