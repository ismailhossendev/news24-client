import React, { useContext } from 'react';
import { mainContext } from '../context/MainContext';

const PostNews = () => {
    const {setNewPost,user} = useContext(mainContext);
    const handleSubmit = e =>{
        e.preventDefault();
        const title = e.target.title.value;
        const details = e.target.details.value;
        const thumbnailUrl = e.target.thumbnail_url.value;
        const date =new Date()
        console.log(date);
        const ourNews = {title,details,thumbnailUrl,date,profile:user.photoURL,name:user.displayName}
        fetch('http://localhost:5000/news',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(ourNews)
        })
        .then(res =>res.json())
        .then(data =>{
            setNewPost(data)
        } )
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input  className="input w-full max-w-xs" type="text" name="title" id="" placeholder='this is title' required /><br />
                <input  className="input w-full max-w-xs my-4" type="text" name="details" id="" placeholder='news details' /> <br />
                <input  className="input w-full max-w-xs" type="text" name="thumbnail_url" placeholder='news thumbnail url' id="" /> <br />
                <button className='btn btn-primary' type="submit">sumbit</button>
            </form>
        </div>
    );
};

export default PostNews;