import { React, useState } from "react";
import { Navigate, useLocation  } from 'react-router-dom';

function DeletePost(props){
    const location  = useLocation ();
    const  {id} = location.state;

    const tempData = [...props.data];
    tempData.splice(id - 1, 1);
    props.setData(tempData)
    alert("Delete Post Successfully");
    return (<Navigate to='/' />)
}
export default DeletePost;