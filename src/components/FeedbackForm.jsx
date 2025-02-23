import { useState } from "react";
import { TextField, Button, Snackbar, Alert, Box } from "@mui/material";

const FeedbackForm = () => {
  const [feedback, setFeedback] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!feedback.trim()) return;

    // Show the success message
    setShowMessage(true);

    // Hide the message after 3 seconds
    setTimeout(() => {
      setShowMessage(false);
    }, 3000);

    // Clear the feedback input
    setFeedback("");
  };

  return (
    <Box sx={{ p: 2, maxWidth: 500, mx: "auto", textAlign: "center" }}>
      {/* Success message */}
      <Snackbar open={showMessage} autoHideDuration={3000}>
        <Alert severity="success" variant="filled">
          Feedback sent successfully!
        </Alert>
      </Snackbar>

      {/* Feedback form */}
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          multiline
          rows={6}
          label="Type your feedback here (max 500 characters)..."
          variant="outlined"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          required
          sx={{ mb: 2, }}
          InputLabelProps={{
            sx: { fontStyle: "italic" }, // Italicizes the label
          }}
        />
        <Button type="submit" variant="contained" color="secondary" fullWidth>
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default FeedbackForm;
