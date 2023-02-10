

class APIService {
    constructor(baseURL, token) {
        this.baseURL = baseURL;
        this.token = token;
    }

    async makeRequest(endpoint, method = "GET", body = null) {
        try {
            const response = await fetch(`${this.baseURL}${endpoint}`, {
                method,
                headers: {
                    "Authorization": `Bearer ${this.token}`,
                    "Content-Type": "application/json"
                },
                body: body ? JSON.stringify(body) : null
            });
            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.message);
            }
            console.log(data);
            return data;
        } catch (error) {
            throw error;
        }
    }
}