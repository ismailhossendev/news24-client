import React, { useState } from 'react';

const PostNews = () => {
    const [news,setNews] = useState([])
    const handleSubmit = e =>{
        e.preventDefault();
        const title = e.target.title.value;
        const details = e.target.details.value;
        const thumbnailUrl = e.target.thumbnail_url.value;
        const ourNews = {title,details,thumbnailUrl}
        fetch('http://localhost:5000/news',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(ourNews)
        })
        .then(res =>res.json())
        .then(data =>{
            const newNews = [...news,data];
            setNews(newNews);
        } )
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" id="" /><br />
                <input type="text" name="details" id="" />
                <input type="text" name="thumbnail_url" id="" />
                <button className='bg-red-500 p-10 rounded' type="submit">sumbit</button>
            </form>
        </div>
    );
};

export default PostNews;