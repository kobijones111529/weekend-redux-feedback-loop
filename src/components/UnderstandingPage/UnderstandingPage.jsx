import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom/cjs/react-router-dom";
import { setFeedback } from "../../redux/actions";

function UnderstandingPage() {
  const dispatch = useDispatch();
  const feedback = useSelector(store => store.feedback);
  const [input, setInput] = useState('');

  const handleNext = () => {
    dispatch(setFeedback({ ...feedback, understanding: input }));
  };

  return (
    <>
      <p>How well are you understanding the content?</p>
      <input value={input} onChange={event => setInput(event.target.value)} />
      <Link to="/support" onClick={handleNext}>Next</Link>
    </>
  );
}

export default UnderstandingPage;
