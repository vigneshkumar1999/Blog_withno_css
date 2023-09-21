import{Link} from "react-router-dom"
function Navbar(){
    return (
        <nav className="Navbar">
                <h1>Blog Site</h1>
                <div className="logo">
                    <img src="https://neilpatel.com/wp-content/uploads/2017/08/blog.jpg" alt="logo" ></img>
                </div>
                <div className="des">
                    <p>"Blogs are a type of regularly updated websites that provide insight into a certain topic. The word blog is a combined version of the words “web” and “log.” At their inception, blogs were simply an online diary where people could keep a log about their daily lives on the web."</p>
                </div>
                <Link to="/blogs">Blog</Link>
                <Link to="/addblog">Add Blog</Link>
        </nav>
        
    )
}
export default Navbar;