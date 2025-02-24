import { useState } from "react";
import FeedbackForm from "../components/FeedbackForm";
import SuccessMessage from "../components/SuccessMessage";
import { Container, Typography, Paper } from "@mui/material";

const Home = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleFeedbackSubmit = (feedback) => {
    // Send feedback to AWS
    console.log("Submitting feedback:", feedback);
    setSubmitted(true);
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 10, textAlign: "center" }}>
      <Typography 
        variant="h4" 
        fontWeight="bold" 
        gutterBottom 
        sx={{ fontFamily: "Times New Roman" }} 
      >
        The Chapel Feedback
      </Typography>
      
      <Typography 
        variant="subtitle1" 
        color="textSecondary" 
        gutterBottom 
        sx={{ fontFamily: "Times New Roman" }}
      >
        Share your feedback anonymously. We value your thoughts!
      </Typography>

      <Paper elevation={0} sx={{ p: 1, mt: 2 }}>
        {submitted ? <SuccessMessage /> : <FeedbackForm onSubmit={handleFeedbackSubmit} />}
      </Paper>
    </Container>
  );
};

export default Home;
