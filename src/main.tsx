import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider
} from 'react-router-dom';
import App from './App.tsx';
import HomePage from './pages/HomePage';
import GalleryPage from './pages/GalleryPage';
import MemoriesPage from './pages/MemoriesPage';
import LoveLetterPage from './pages/LoveLetterPage';

import './index.css';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: "gallery",
                element: <GalleryPage />
            },
            {
                path: "memories",
                element: <MemoriesPage />
            },
            {
                path: "love-letter",
                element: <LoveLetterPage />
            }
        ]
    }
]);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
