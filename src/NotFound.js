import { Link } from "react-router-dom";
function NotFound(){
    return(
        <div className="NotFound">
        <h2>Sorry</h2>
        <h3>404 Error</h3>
        <p>The page not found</p>
        <Link to='/'>Go to Home</Link>
        </div>
    )
}
export default NotFound;