import { Link } from "react-router-dom/cjs/react-router-dom";

function ReviewPage() {
  return (
    <>
      <p>Done?</p>
      <Link to="/success">
        <button>Submit</button>
      </Link>
    </>
  );
}

export default ReviewPage;
