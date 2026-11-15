import { Outlet  } from "react-router";
import Header from "@src/components/header/Header.tsx";

const Layout = () => {
    return (
        <div>
            <Header />
            <div className='w-full p-5 sm:w-lg sm:mx-auto md:w-2xl lg:w-4xl xl:w-6xl'>
                <Outlet />
            </div>
        </div>
    );
};

export default Layout