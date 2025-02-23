import { useState } from "react";

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
    <div className="relative p-4">
      {showMessage && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded shadow">
            Your feedback has been submitted successfully. Thank you!
        </div>
      )}

      <form onSubmit={handleSubmit} className="p-4">
        <textarea
          className="w-full p-2 border rounded"
          placeholder="Share your feedback..."
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          required
        />
        <button type="submit" className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">
          Submit Feedback
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;
