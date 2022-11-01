import React from 'react';
import { Outlet} from 'react-router-dom';
import Header from '../components/Header';
import LeftSideAside from '../components/LeftSideAside';


const Main = () => {
    return (
        <>
        <Header/>
        <div className='grid md:grid-cols-6 md:w-10/12 mx-auto'>
            <div className='hidden md:block'>
                <LeftSideAside/>
            </div>
            <div className=" md:col-span-4">
                <Outlet/>
            </div>
            <div>
                this is ride side aside 
            </div>
        </div>
        </>
    );
};

export default Main;