
import { useContext} from 'react';
import NewsCard from '../components/NewsCard';
import { mainContext } from '../context/MainContext';
import PostNews from './PostNews';

const News = () => {
    const {news,newPost,user} = useContext(mainContext)
    console.log(newPost);
    return (
        <div className='w-11/12 mx-auto my-4 relative'>
            <div className='text-white text-2xl'>{news.length === 0 && 'No News Found'}</div>
            {
                newPost.title && <NewsCard news={newPost} />
            }
            {
                news.map(n => <NewsCard key={n._id} news={n} />)
            }
            <label htmlFor="my-modal-3" className="btn modal-button btn-circle sticky bottom-10">New Post</label>

            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
            <div className="modal-box relative">
                <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                {user?.uid ? <PostNews/> : 'please login '}
            </div>
            </div>
        </div>
    );
};

export default News;