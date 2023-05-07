import { useSelector } from "react-redux";
import { Link } from "react-router-dom/cjs/react-router-dom";
import { addFeedback } from "../../api/server";

function ReviewPage() {
  const feedback = useSelector(store => store.feedback);

  const handleSubmitFeedback = event => {
    if (feedback.feeling === null) {
      event.preventDefault();
      alert(`Please let us know how you're feeling`);
      return;
    } else if (feedback.understanding === null) {
      event.preventDefault();
      alert(`Please let us know how well you're understanding the content`);
      return;
    } else if (feedback.support === null) {
      event.preventDefault();
      alert(`Please let us know how well you're feeling supported`);
      return;
    }

    addFeedback(feedback);
  };

  return (
    <>
      <p>Review Your Feedback</p>
      <Link to="/success" onClick={handleSubmitFeedback}>
        <button>Submit</button>
      </Link>
    </>
  );
}

export default ReviewPage;
