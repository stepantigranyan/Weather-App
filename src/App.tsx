import {createBrowserRouter, Navigate, RouterProvider} from 'react-router';
import Layout from "@src/Layout";
import Weather from "@src/pages/Weather.tsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Navigate to='/weather' replace={true}/>
            },
            {
                path: 'weather',
                element: <Weather />
            },
            {
                path: 'forecast',
                element: <h1>Forecast</h1>
            },
            {
                path: 'favorites',
                element: <h1>Favorites</h1>
            },
        ]
    }
])

const App = () => {
    return <RouterProvider router={router} />
};

export default App;
