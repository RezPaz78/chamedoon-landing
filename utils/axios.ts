import axios from "axios";

const client = axios.create({
	baseURL: process.env.BASE_URL,
	headers: {
		Accept: "application/json",
		"Content-Type": "application/json",
	},
});

// easily remove the interceptors
// axios.interceptors.request.eject(caseRequestInterceptor);

export const axiosInstance = client;
