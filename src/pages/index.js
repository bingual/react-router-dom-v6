import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import RootPage from './RootPage';
import PostList from 'components/PostList';
import PostDetail from 'components/PostDetail';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <RootPage />,
        children: [
            {
                path: 'posts',
                element: <PostList />,
            },
            {
                path: 'posts/:postId',
                element: <PostDetail />,
            },
        ],
    },
]);
