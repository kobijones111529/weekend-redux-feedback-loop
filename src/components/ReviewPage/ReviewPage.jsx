import { useSelector } from "react-redux";
import { Link } from "react-router-dom/cjs/react-router-dom";
import { addFeedback } from "../../api/server";
import { useMemo } from "react";

function ReviewPage() {
  const feedback = useSelector(store => store.feedback);

  const validatedFeedback = useMemo(() => {
    if (feedback.feeling === null) {
      return null;
    } else if (feedback.understanding === null) {
      return null;
    } else if (feedback.support === null) {
      return null;
    }

    return feedback;
  }, [feedback]);

  const handleSubmitFeedback = event => {
    if (validatedFeedback === null) {
      event.preventDefault();
      alert('Please fill out all required fields');
      return;
    }

    addFeedback(validatedFeedback);
  };

  return (
    <>
      <p>Review Your Feedback</p>
      <table>
        <tbody>
          <tr>
            <th>Feeling{feedback.feeling === null ? '*' : ''}</th>
            <td>{feedback.feeling || <Link to="/feeling">Give feedback</Link>}</td>
          </tr>
          <tr>
            <th>Understanding{feedback.understanding === null ? '*' : ''}</th>
            <td>{feedback.understanding || <Link to="/understanding">Give feedback</Link>}</td>
          </tr>
          <tr>
            <th>Support{feedback.support === null ? '*' : ''}</th>
            <td>{feedback.support || <Link to="/support">Give feedback</Link>}</td>
          </tr>
          <tr>
            <th>Comments</th>
            <td>{feedback.comments || <Link to="/comments">Give feedback</Link>}</td>
          </tr>
        </tbody>
      </table>
      <Link to="/success" onClick={handleSubmitFeedback}>
        <button disabled={validatedFeedback === null}>Submit</button>
      </Link>
    </>
  );
}

export default ReviewPage;
