import axios from "axios";
const user = JSON.parse(localStorage.getItem('user'));
export default axios.create({
    baseURL: 'https://sugary-gifted-enthusiasm.glitch.me/',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user ? user.token : null}`
    }
})
