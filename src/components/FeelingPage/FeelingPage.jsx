import { Link } from "react-router-dom/cjs/react-router-dom";

function FeelingPage() {
  return (
    <>
      <p>How are you feeling?</p>
      <Link to="/understanding">
        <button>Next</button>
      </Link>
    </>
  );
}

export default FeelingPage;
