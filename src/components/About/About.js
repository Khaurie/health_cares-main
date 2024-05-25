import { Box, Container, Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <Box
      id="about"
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "70vh",
      }}
      points="0,100 50,00, 100,100"
    >
      <Container maxWidth="xl">
        <Typography
          sx={{ color: "primary.main", mx: 2, p: 2, textAlign: "center" }}
          variant="h4"
        >
          All-in-One Website Health Solution
        </Typography>

        <Typography sx={{ mx: 2, p: 2, textAlign: "center" }} variant="h6">
          Experience in Medical Services
        </Typography>

        <Typography
          sx={{ mx: 2, p: 2, mb: 4, textAlign: "justify" }}
          variant="p"
        >
          One big thing I wanted to highlight is that our methodology is fairer
          to hospitals and health systems than horizontal sites. Health Care has
          many hospital reviews from real users, but the way we survey our
          patient users has less “motivated complainer bias.” Thus, I think the
          CareDash hospital reviews provider a more accurate view of real
          patient satisfaction. <br />
          <br />
          <br />
          Be sure to leave a review on <strong>Health Care</strong> of any
          hospital you’ve visited, whether you’ve had a negative or a positive
          experience. Share your suggestions about writing hospital reviews in
          the comments below or message us on LINKEDIN{" "}
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong> @ADV102</strong>
          </a>
          .
          <br />
          <br />
        </Typography>
      </Container>
    </Box>
  );
};

export default About;
