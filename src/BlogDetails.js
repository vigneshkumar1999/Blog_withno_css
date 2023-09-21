import axios from "axios";
import { useEffect, useState } from "react";
import {useParams} from "react-router-dom"
function BlogDetails(){
    const {id}=useParams();
    const[details,setDetails]=useState(null);
    useEffect(()=>{
        axios.get("http://localhost:8084/blogs/"+id)
        .then((data)=>{
            setDetails(data?.data);
            console.log(details)
        })
    },[])
    return (
        <>
{ details&& <div className="BlogDetails">
            <h1>{details.title}</h1>
            <h4>{details.about}</h4>
            <h2>{details.author}</h2>
        </div>}
        </>
    )
}
export default BlogDetails;