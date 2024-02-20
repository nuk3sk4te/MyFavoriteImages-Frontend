import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import { test, describe, expect, vi, beforeEach } from "vitest";
import FavoriteImages from '../pages/FavoriteImages';
import axios from 'axios';
import { getAllImages, getImageById } from "../services/ImageService.jsx"

describe('Testing FavoriteImage component', () => {
    test('should render correctly', () => {
        render(<FavoriteImages />);
        const homeText = screen.getByText("My favorite Images");
        expect(homeText).toBeInTheDocument();
    })
});

vi.mock('axios')
describe('Get images from Json Server API using axios', () => {
    beforeEach(() => {
        axios.get.mockReset()
    })
    test('makes a GET request to fetch all images', async () => {
        const imagesMock = [{ id: 1, title: "Árbol", }, { id: 2, title: "Lago" }]
        axios.get.mockResolvedValue({
            data: imagesMock,
        })

        const images = await getAllImages()
        const URL = "http://localhost:3000/images"
        expect(axios.get).toHaveBeenCalledWith(URL)
        expect(images).toStrictEqual(imagesMock)
    }),
    test('makes a GET request to fetch image by id', async () => {
        const imageId = 1;
        const imageMock = [{ id: 1, title: "Árbol", }]
        axios.get.mockResolvedValue({
            data: imageMock,
        })

        const image = await getImageById(imageId)
        const URL = `http://localhost:3000/images/${imageId}`
        expect(axios.get).toHaveBeenCalledWith(URL)
        expect(image).toEqual(imageMock)
    })
});