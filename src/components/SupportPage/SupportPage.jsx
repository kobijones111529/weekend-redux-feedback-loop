import { Link } from "react-router-dom/cjs/react-router-dom";

function SupportPage() {
  return (
    <>
      <p>How well do you feel supported?</p>
      <Link to="/comments">
        <button>Next</button>
      </Link>
    </>
  );
}

export default SupportPage;
