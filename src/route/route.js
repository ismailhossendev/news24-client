import { createBrowserRouter } from "react-router-dom"
import SingleNews from "../components/SingleDetails"
import Main from "../layout/Main"
import News from "../pages/News"
import PostNews from "../pages/PostNews"

export  const route = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        children:([
            {
                path:'/',
                loader:() => fetch('http://localhost:5000/news'),
                element:<News/>
            },
            {
                path:'/categories/:id',
                loader:({params}) => fetch(`http://localhost:5000/categories/${params.id}`),
                element:<News/>
            },
            {
                path:'/news/:testid',
                loader:({params}) => fetch(`http://localhost:5000/news/${params.testid}`),
                element:<SingleNews/>
            },
            {
                path:'/post-news',
                element:<PostNews/>
            }
        ])
    }
])