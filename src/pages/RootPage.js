import React from 'react';
import { Outlet } from 'react-router-dom';

export default function RootPage() {
    return (
        <div>
            <h3>RootPage</h3>
            <Outlet />
        </div>
    );
}
