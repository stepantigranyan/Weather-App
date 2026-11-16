import { Outlet } from 'react-router';
import Header from '@src/components/header/Header.tsx';

const Layout = () => {
    return (
        <div className="relative flex flex-col items-center justify-center h-screen">
            <Header />
            <div className="w-full p-5 sm:w-md sm:mx-auto md:w-xl lg:w-3xl xl:w-5xl">
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;
