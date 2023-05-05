import { Link } from "react-router-dom/cjs/react-router-dom";

function UnderstandingPage() {
  return (
    <>
      <p>How well are you understanding the content?</p>
      <Link to="/support">
        <button>Next</button>
      </Link>
    </>
  );
}

export default UnderstandingPage;
