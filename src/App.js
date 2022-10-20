
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { route } from './route/route';

function App() {
  return (
    <div className='bg-slate-800'>
        <RouterProvider router={route} /> 
    </div>
  );
}

export default App;
