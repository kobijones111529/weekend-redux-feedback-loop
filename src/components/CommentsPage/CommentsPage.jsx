import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom/cjs/react-router-dom";
import { setFeedback } from "../../redux/actions";

function CommentsPage() {
  const dispatch = useDispatch();
  const feedback = useSelector(store => store.feedback);
  const [commentsInput, setCommentsInput] = useState('');

  const handleNext = () => {
    dispatch(setFeedback({ ...feedback, comments: commentsInput }));
  };

  return (
    <>
      <p>Comments?</p>
      <textarea
        value={commentsInput}
        onChange={event => setCommentsInput(event.target.value)}
      ></textarea>
      <Link to="/review" onClick={handleNext}>
        <button>Next</button>
      </Link>
    </>
  );
}

export default CommentsPage;
