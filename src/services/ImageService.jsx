import axios from "axios";

const API_BASE_URL = "http://localhost:3000/images";
// Solicitud GET
export const getAllImages = async () => {
    try {
        const response = await axios.get(API_BASE_URL);
        return response.data;
    } catch (error) {
        console.error('Error trying to fetch images', error);
        throw error;
    }
};