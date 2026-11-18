import { Outlet } from 'react-router';
import Header from '@src/components/header/Header.tsx';

const Layout = () => {
    return (
        <div className="relative">
            <Header />
            <div className="w-full mt-30 p-5 sm:w-md sm:mx-auto md:w-xl lg:w-3xl xl:w-5xl">
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;
