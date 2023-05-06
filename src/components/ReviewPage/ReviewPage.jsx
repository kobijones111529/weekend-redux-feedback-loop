import { Link } from "react-router-dom/cjs/react-router-dom";

function ReviewPage() {
  return (
    <>
      <p>Review Your Feedback</p>
      <Link to="/success">
        <button>Submit</button>
      </Link>
    </>
  );
}

export default ReviewPage;
