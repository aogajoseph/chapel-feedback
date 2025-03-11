import { useState } from "react";
import { TextField, Button, Snackbar, Alert, Box } from "@mui/material";
import { supabase } from "../supabaseClient";  // ✅ Import Supabase client

const FeedbackForm = () => {
  const [feedback, setFeedback] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(""); // ✅ Handle errors

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!feedback.trim()) return;

    // ✅ Insert feedback into Supabase
    const { error } = await supabase
      .from("chapel-feedback")
      .insert([{ message: feedback }]);

    if (error) {
      setErrorMessage("Failed to send feedback. Try again.");
      setTimeout(() => setErrorMessage(""), 3000);
      return;
    }

    // ✅ Show success message
    setShowMessage(true);

    // ✅ Hide message after 3 seconds
    setTimeout(() => {
      setShowMessage(false);
    }, 3000);

    // ✅ Clear input field
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

      {/* Error message */}
      {errorMessage && (
        <Snackbar open={true} autoHideDuration={3000}>
          <Alert severity="error" variant="filled">
            {errorMessage}
          </Alert>
        </Snackbar>
      )}

      {/* Feedback form */}
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          multiline
          rows={4}
          label="Type your feedback here (max 500 characters)..."
          variant="outlined"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          required
          sx={{ mb: 2 }}
          InputLabelProps={{
            sx: { fontStyle: "italic", color: "#808080", fontSize: ".9rem" },
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
