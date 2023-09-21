import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Blog(){
    // const[blogs,setBlogs]=useState([{title:"Sleeping",author:"Vignesh",about:"Sleep is a normal body process that allows your body and brain to rest. At first glance, sleep is deceptively simple. For most people, it's just a matter of getting comfortable, closing your eyes and drifting into slumber.",id:1},{title:"Cricket",author:"Suren",about:"Cricket is a bat-and-ball game played between two teams of eleven players on a field at the centre of which is a 22-yard (20-metre) pitch with a wicket at each end, each comprising two bails balanced on three stumps.",id:2},{title:"Youtube",author:"Manojh",about:"A YouTube description is a section where a content creator can provide additional information about their video content. This can include content descriptions, links to related content, social media or website links, and more.",id:3}])
     const[blogs,setBlogs]=useState(null);
     const[error,setError]=useState(null);
     const navigate=useNavigate();
    const handleDelete =(id)=>{
        axios.delete('http://localhost:8084/blogs/'+id)
        .then(res=>{
            console.log('Deleted')
        })
        navigate('/')
    }
    useEffect(()=>{
        // fetch('http://localhost:8085/blogs')
        // .then(res=>{
        //     return res.json();
        // })
        // .then(data=>{
        //     setBlogs(data);
        // })
        axios.get("http://localhost:8084/blogs").then((data) => {
        setBlogs(data?.data);
        console.log(data);
    })
    .catch(err=>{
        setError(err.message);
    })
    },[])
    return(
        <>
        {error&&<>{error}</>}
         {blogs&& <div className="Blog">
         <h1>Blogs</h1>
         <Link to="/">Home</Link>
         <Link to="/addblog">Add Blog</Link>
         {blogs.map((blog)=>(
             <div className="blogs">
                 <h3>Title: {blog.title}</h3>
                 <h3>Author: {blog.author}</h3>
                 <Link to={`/blog/${blog.id}`}>Blog Details</Link>
                 <button onClick={()=>{handleDelete(blog.id)}}>Delete</button>
             </div>
         ))}
       
     </div>} 
      
     </>
    )
}
export default Blog;