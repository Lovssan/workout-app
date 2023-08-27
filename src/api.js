import { TOKEN } from './app.constanse'
import axios from 'axios'
import Cookies from 'js-cookie'

export const $axios = axios.create({
	baseURL: `${import.meta.env.VITE_SERVER_URL}/api`,
	headers: {
		'Content-Type': 'application/json',
		Authorization: `Bearer ${Cookies.get(TOKEN) || ''}`
	}
})
