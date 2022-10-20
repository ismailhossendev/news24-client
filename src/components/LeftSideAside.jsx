import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideAside = () => {
    const [loading,setLoading] = useState(true)
    const [categories,setCategories] = useState({});
    useEffect(()=>{
        setLoading(true)
        fetch('http://localhost:5000/categories')
        .then(res => res.json())
        .then(data => {
            setCategories(data)
            setLoading(false)
        })
    },[])

    return (
        <div>
            <aside className="w-full p-6  bg-gray-900 text-gray-100 rounded-md my-4">
                <nav className="space-y-8 text-sm">
                    <div className="space-y-2">
                        <h2 className="text-sm font-semibold tracking-widest uppercase text-gray-400">Catagories</h2>
                        <div className="flex flex-col space-y-1">
                            {
                              loading ||  categories.map(c => <Link key={c.id} to={`/categories/${c.id}`}>{c.name}</Link>)
                            }
                        </div>
                    </div>
                    <div className="space-y-2">
                        <h2 className="text-sm font-semibold tracking-widest uppercase text-gray-400">Dashboard</h2>
                        <div className="flex flex-col space-y-1">
                            <Link rel="noopener noreferrer" href="#">Header</Link>
                            <Link rel="noopener noreferrer" href="#">Drawer</Link>
                            <Link rel="noopener noreferrer" href="#">Page Title</Link>
                            <Link rel="noopener noreferrer" href="#">Menus</Link>
                            <Link rel="noopener noreferrer" href="#">Sidebar</Link>
                            <Link rel="noopener noreferrer" href="#">Footer</Link>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <h2 className="text-sm font-semibold tracking-widest uppercase text-gray-400">Pages</h2>
                        <div className="flex flex-col space-y-1">
                            <Link rel="noopener noreferrer" href="#">Homepage</Link>
                            <Link rel="noopener noreferrer" href="#">Users</Link>
                            <Link rel="noopener noreferrer" href="#">Tools</Link>
                            <Link rel="noopener noreferrer" href="#">Settings</Link>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <h2 className="text-sm font-semibold tracking-widest uppercase text-gray-400">Misc</h2>
                        <div className="flex flex-col space-y-1">
                            <Link rel="noopener noreferrer" href="#">Tutorials</Link>
                            <Link rel="noopener noreferrer" href="#">Changelog</Link>
                        </div>
                    </div>
                </nav>
            </aside>
        </div>
    );
};

export default LeftSideAside;