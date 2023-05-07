import { Link } from "react-router-dom/cjs/react-router-dom";

function SuccessPage() {
  return (
    <>
      <p>Thanks!</p>
      <Link to="/">Leave new feedback</Link>
    </>
  );
}

export default SuccessPage;
