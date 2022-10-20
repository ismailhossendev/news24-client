
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../components/NewsCard';

const News = () => {
    const news = useLoaderData()
  
    return (
        <div className='w-11/12 mx-auto my-4'>
            <div className='text-white text-2xl'>{news.length === 0 && 'No News Found'}</div>
            {
                news.map(n => <NewsCard key={n._id} news={n} />)
            }
            <NewsCard/>
        </div>
    );
};

export default News;