import React from 'react'
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { Container } from '@mui/material';

//fetch from useParams
const Course = () => {
    const state = useLocation().state;
    const { mediaPath, mediaType } = state;
    console.log(state)

    return (
      <Container sx={{ height: '100vh' }}>
        <h1>{state.title}</h1>
        <p>{state.description}</p>
        {
            mediaType === 'video' ?
            <ReactPlayer url={`http://localhost:5002/${mediaPath}`} controls />
            : <object data={`http://localhost:5002/${mediaPath}`} aria-label='pdf' type='application/pdf' height='100%' width='100%' />
        }
      </Container>
    );
}

export default Course;