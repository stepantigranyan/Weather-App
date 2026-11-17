import { createBrowserRouter, Navigate, RouterProvider } from 'react-router';
import { Provider } from 'react-redux';
import { store } from '@src/store';

import Layout from '@src/Layout';
import Weather from '@src/pages/main/Weather';
import Forecast from '@src/pages/main/Forecast';
import Favorites from '@src/pages/main/Favorites';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Navigate to="/weather" replace={true} />,
            },
            {
                path: 'weather',
                element: <Weather />,
            },
            {
                path: 'forecast',
                element: <Forecast />,
            },
            {
                path: 'favorites',
                element: <Favorites />,
            },
        ],
    },
]);

const App = () => {
    return (
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    );
};

export default App;
