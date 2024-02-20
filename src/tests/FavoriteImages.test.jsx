import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import { test, describe, expect } from "vitest";
import FavoriteImages from '../pages/FavoriteImages';

describe('Testing FavoriteImage component', () => {
    test('should render correctly', () => {
        render(<FavoriteImages />);
        const homeText = screen.getByText("FavoriteImages");
        expect(homeText).toBeInTheDocument();
    })
});