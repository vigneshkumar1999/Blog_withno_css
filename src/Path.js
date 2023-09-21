 import {Routes,Route} from "react-router-dom"
import Blog from "./Blog";
import AddBlog from "./AddBlog";
import Navbar from './Navbar';
import NotFound from "./NotFound";
import BlogDetails from "./BlogDetails";
 function Path(){
    return(
        <div className="Path">
            <Routes>
                <Route exact path="/" element={<Navbar/>}></Route>
                 <Route exact path="/blogs" element={<Blog/>}></Route>
                 <Route exact path="/addblog" element={<AddBlog/>}></Route>
                 <Route exact path="/blog/:id" element={<BlogDetails/>}></Route>
                 <Route exact path="*" element={<NotFound/>}></Route>
            </Routes>
        </div>
    )
 }
 export default Path;