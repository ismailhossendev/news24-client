import React, { createContext, useEffect, useState } from 'react';
import {getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup} from 'firebase/auth'
import app from '../firebase.config';
export const mainContext = createContext();


const auth = getAuth(app)

const MainContext = ({children}) => {
    const [news,setNews] = useState([]);
    const [newPost,setNewPost] = useState({})
    const [user,setUser] = useState(null)

    const gprovider = new GoogleAuthProvider()

    useEffect(()=>{
        fetch('http://localhost:5000/new-news')
        .then(res => res.json())
        .then(data =>{
            
            setNews(data)
            console.log(data);
        })
    },[])
    const googleLogin = () =>{
        signInWithPopup(auth,gprovider)
        .then(()=>{

        })
        .catch(()=>{

        })

    }
    useEffect(()=>{
      const unlink =  onAuthStateChanged(auth,result =>{
            setUser(result)
        })
        return () => unlink();
    },[])
    const value = {news,setNews,newPost,setNewPost,googleLogin,user}
    return (
        <div>
            <mainContext.Provider value={value}>
                {children}
            </mainContext.Provider>
        </div>
    );
};

export default MainContext;