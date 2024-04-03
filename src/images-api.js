import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/"

export async function fetchImages (query, page) {

    const params = {
     client_id: "8wxwxeNmBv7f4TvJEjl9jaYKYjjJJMYWj1Vt9qVnfro",  
        query,
        page,
    };
    const response = await axios.get("search/photos", { params })
    return response.data
}
