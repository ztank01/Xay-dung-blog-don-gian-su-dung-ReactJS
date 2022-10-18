import { React } from "react";
import { Link } from 'react-router-dom';


function Home(props) {
   
    console.log(props);
    return (
        <div>
            <h1>Post List</h1>
            {
                props.data.map((item, index) => {
                    return (
                        <li key={index}><Link to={`/post/?id=${item.id}`} state={{ id: `${item.id}`}}>Post {item.id}</Link></li>
                    )
                })
            }
            <Link to="/post/new"><button>Create New Post</button></Link>
        </div>
    )
}

export default Home;