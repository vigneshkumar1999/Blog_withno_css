import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import{useNavigate}from "react-router-dom"
function AddBlog(){
    const[title,setTitle]=useState('')
    const[about,setAbout]=useState('')
    const[author,setAuthor]=useState('')
    const navigate=useNavigate();
    const handleSubmit =(e)=>{
        e.preventDefault();
        const blog={title,author,about}
        const json = JSON.stringify(blog);
        axios.post(`http://localhost:8084/blogs`,json,{
            headers: {
              'Content-Type': 'application/json'
            }})
        .then(res=>{
            console.log(res.data)
        }) 
        navigate('/')
    }
    return(
        <div className="Addblog">
            <h1>NewBlog</h1>
            <Link to="/">Home</Link>
            <Link to="/blogs">Blog</Link>
            <div className="form">
                <form onSubmit={handleSubmit}>
                    <label>Title</label><br></br>
                   <input type="text" placeholder="Title" value={title} onChange={(e)=>setTitle(e.target.value)}></input><br></br>
                   <label>About</label><br></br>
                   <textarea type="text" placeholder="Description"
                   value={about}
                   onChange={(e)=>setAbout(e.target.value)}></textarea><br></br>
                   <label>Author</label><br></br>
                   <input type="text" placeholder="Author name"
                   value={author}
                   onChange={(e)=>setAuthor(e.target.value)}></input><br></br>
                   <input type="submit" value="Create"></input>
                </form>
            </div>
        </div>
    )
}
export default AddBlog;