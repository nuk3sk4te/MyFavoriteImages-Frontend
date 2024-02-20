import { createBrowserRouter } from 'react-router-dom';
import Layout from "../layout/Layout";
import Home from '../pages/Home';
import FavoriteImage from '../pages/FavoriteImage';
import FavoriteImageById from '../pages/FavoriteImageById';
import AddImage from '../pages/AddImage';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/images",
                element: <FavoriteImage />
            },
            {
                path: "/image/:id",
                element: <FavoriteImageById />
            },
            {
                path: "/add-image",
                element: <AddImage />
            },
        ]
    }
]); 