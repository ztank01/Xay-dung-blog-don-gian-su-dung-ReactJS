import React from "react";
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            {/* <h1>{{ caption }}</h1> */}
            <ul>
                {/* {{ #each postList }}
                <li><a href="http://localhost:5000/post/{{id}}">Post {{ id }}</a></li>
                {{/ each}} */}
            </ul>
            <Link to="/post/new" class="button"><button>Create New Post</button></Link>
        </div>
    )
}

export default Home;