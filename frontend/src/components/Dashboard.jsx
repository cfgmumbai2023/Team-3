import React from 'react';
import { Card, CardContent, Typography, LinearProgress, Grid, styled, CardMedia } from '@mui/material';

const courses = [
  { title: 'Course 1', name: 'Introduction to React', image: 'sample1.jpg' },
  { title: 'Course 2', name: 'JavaScript Fundamentals', image: 'sample1.jpg' },
  { title: 'Course 3', name: 'HTML & CSS Basics', image: 'sample1.jpg' },
  { title: 'Course 4', name: 'Backend Development with Node.js', image: 'sample1.jpg' },
  { title: 'Course 5', name: 'Database Design and Management', image: 'sample1.jpg' },
];

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  borderRadius: '20px',
  boxShadow: '0 2px 6px rgba(0, 0, 0, 0.5)',
  overflow: 'hidden', // Ensure the card content does not overflow
}));

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  paddingTop: '60%',
}));

const StyledDivider = styled('hr')(({ theme }) => ({
  border: 0,
  borderTop: `1.5px solid ${theme.palette.divider}`,
  margin: '8px 0',
}));

const StyledHeading = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  marginBottom: '16px',
}));

const CourseCard = ({ title, name, image }) => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <StyledCard>
        <StyledCardMedia image={image} />
        <CardContent>
          <StyledDivider /> {/* Add the divider */}
          <Typography variant="h6" component="div">
            {title}
          </Typography>
          <Typography variant="body1">{name}</Typography>
        </CardContent>
        <LinearProgress variant="determinate" value={50} />
      </StyledCard>
    </Grid>
  );
};

const Dashboard = () => {
  return (
    <div style={{ marginTop: '50px', margin: '50px' }}> {/* Add overall margin to the content */}
      <>
        <StyledHeading variant="h5">Current Courses:</StyledHeading> {/* Apply styling to the heading */}
        <Grid container spacing={2}>
          {courses.map((course, index) => (
            <CourseCard key={index} title={course.title} name={course.name} image={course.image} />
          ))}
        </Grid>
      </>
    </div>
  );
};

export default Dashboard;
