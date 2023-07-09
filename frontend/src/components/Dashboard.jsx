import React, { useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { ToastContainer, toast } from "react-toastify";
// import { useEffect, useState } from 'react';
// import axios from 'axios';
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  Typography,
  LinearProgress,
  Grid,
  styled,
  CardMedia,
  Button,
} from "@mui/material";
import { axiosClient } from "../axios";

const StyledCard = styled(Card)(({ theme }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  borderRadius: "20px",
  boxShadow: "0 2px 6px rgba(0, 0, 0, 0.5)",
  overflow: "hidden", // Ensure the card content does not overflow
}));

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  paddingTop: "60%",
}));

const StyledDivider = styled("hr")(({ theme }) => ({
  border: 0,
  borderTop: `1.5px solid ${theme.palette.divider}`,
  margin: "8px 0",
}));

const StyledHeading = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  marginBottom: "16px",
}));

// {
//     "_id": "64a9da528b3f1a30ed74891d",
//     "title": "New one",
//     "description": "This is a new course",
//     "mediaType": "PDF",
//     "mediaPath": "uploads/courses/URMI_PS1.pdf",
//     "createdAt": "2023-07-08T21:51:14.020Z",
//     "updatedAt": "2023-07-08T21:51:14.020Z",
//     "__v": 0
// }

const CourseCard = ({
  _id,
  title,
  name,
  description,
  createdAt,
  prog,
  ...props
}) => {
  const progress = "Continue";
  // console.log(description)
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <StyledCard>
        {/* TODO: Use @ffmpeg to generate thumbnail */}
        {/* <StyledCardMedia image={image} /> */}
        <CardContent>
          <StyledDivider />

          <Typography variant="h6" component="div">
            {title}
          </Typography>
          <Typography variant="body1">{name}</Typography>
          <Typography>{description}</Typography>
          <Link
            state={{ _id, title, name, description, createdAt, prog, ...props }}
            to={`/course/${_id}`}
          >
            <Button> {prog}</Button>
          </Link>
          <Link to="/quiz">
            <Button> Quiz </Button>{" "}
          </Link>
        </CardContent>
        <LinearProgress variant="determinate" value={50} />
      </StyledCard>
    </Grid>
  );
};

const ApplyCourses = ({
  _id,
  title,
  description,
  minimumQualification,
  numberOfYears,
  ...props
}) => {
  const [disabled, setDisabled] = useState(false);
  const { mutateAsync } = useMutation({
    mutationFn: (data) => axiosClient.post(`/course/${_id}`, data),
    onError() {
      toast("Successfully applied!", {
        type: "success",
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    },
    onSuccess() {
      toast("Cannot apply here!", {
        type: "error",
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setDisabled(true);
    },
  });
  // console.log(description)
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <StyledCard>
        {/* TODO: Use @ffmpeg to generate thumbnail */}
        {/* <StyledCardMedia image={image} /> */}
        <CardContent>
          <StyledDivider />

          <Typography variant="h6" component="div">
            {title}
          </Typography>

          <Typography>{description}</Typography>
          <Button
            disabled={disabled}
            onClick={async () => {
              await mutateAsync({
                userId: "64a998158e2de416d9f3ce88",
              });
            }}
          >
            Apply
          </Button>
        </CardContent>
        <LinearProgress variant="determinate" value={50} />
      </StyledCard>
    </Grid>
  );
};

const fetchFn = async () => {
  const res = await axiosClient.get("/lecture/64a9d86c59abb4e4152fd611");
  return res;
};

const Dashboard = () => {
  const { data, isLoading } = useQuery(["courses"], fetchFn);
  const { data: recommendedCourses, isLoading: isCoursesLoading } = useQuery(
    ["recommended-courses"],
    () => axiosClient.get("/course/64a994251ae4e9b7453dbb0b")
  );
  if (isLoading || isCoursesLoading) return <>Loading...</>;
  return (
    <div style={{ marginTop: "50px", margin: "50px" }}>
      {" "}
      {/* Add overall margin to the content */}
      <>
        <StyledHeading variant="h5">Current Course:</StyledHeading>{" "}
        {/* Apply styling to the heading */}
        <Grid container spacing={2} mb={2}>
          {data.data.lectures.map((course, index) => {
            if (index === 0) {
              return <CourseCard key={index} prog={"Continue"} {...course} />;
            } else {
              return <CourseCard key={index} prog={"Start"} {...course} />;
            }
          })}
        </Grid>
        <StyledDivider />
        <StyledHeading variant="h5" mt={2}>
          Courses for you!
        </StyledHeading>{" "}
        <Grid container spacing={2}>
          {recommendedCourses.data.courses.map((course, index) => (
            <ApplyCourses key={index} {...course} />
          ))}
        </Grid>
      </>
    </div>
  );
};

export default Dashboard;
