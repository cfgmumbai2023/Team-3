import React from 'react'
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';

//fetch from useParams
const Course = () => {
    const state = useLocation().state;
    const { mediaPath } = state;

    return (
      <>
        <h1>{state.title}</h1>
        <p>{state.description}</p>
        <ReactPlayer url={mediaPath} controls />
      </>
    );
}

export default Course;