import { Link } from "react-router-dom/cjs/react-router-dom";

function CommentsPage() {
  return (
    <>
      <p>Comments?</p>
      <Link to="/review">
        <button>Next</button>
      </Link>
    </>
  );
}

export default CommentsPage;
