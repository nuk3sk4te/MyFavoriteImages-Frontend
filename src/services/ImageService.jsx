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

// Solicitud GET
export const getImageById = async (id) => {

    try {
        const response = await axios.get(API_BASE_URL + '/' + id);
        return response.data;
    } catch (error) {
        console.error('Error trying to fetch image', error);
        throw error;
    }
};

// Solicitud POST
export const addImage = async (data) => {

    try {
        const response = await axios.post(API_BASE_URL, data);
        return response.data;
    } catch (error) {
        console.error('Error trying to save image:', error);
        throw error;
    }
};

// Solicitud PUT
export const updateImage = async (id, image) => {
    try {
        const response = await axios.put(API_BASE_URL + '/' + id, image);
        return response.data;
    } catch (error) {
        console.error('Error trying to update image', error);
        throw error;
    }
};