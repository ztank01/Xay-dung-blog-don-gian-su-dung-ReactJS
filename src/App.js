import {React,useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from "./routes/Home"
import Post from "./routes/Post"
import NewPost from './routes/NewPost';
import DeletePost from './routes/DeletePost'
import { postList } from './models/postList';

function App() {
  const [postData,setPostData] = useState(postList);

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home data={postData} setData={setPostData}/>}/>
        <Route path="/post/" element={<Post data={postData} setData={setPostData}/>} />
        <Route path="/post/new" element={<NewPost data={postData} setData={setPostData} title={"Create New Post"}/>}/>
        <Route path="/post/update" element={<NewPost data={postData} setData={setPostData}/>}/>
        <Route path="/post/delete" element={<DeletePost data={postData} setData={setPostData}/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
