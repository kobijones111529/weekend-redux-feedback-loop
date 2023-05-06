import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom/cjs/react-router-dom";
import { setFeedback } from "../../redux/actions";

function SupportPage() {
  const dispatch = useDispatch();
  const feedback = useSelector(store => store.feedback);
  const [input, setInput] = useState('');

  const handleNext = () => {
    dispatch(setFeedback({ ...feedback, support: input }));
  };

  return (
    <>
      <p>How well do you feel supported?</p>
      <input value={input} onChange={event => setInput(event.target.value)} />
      <Link to="/comments" onClick={handleNext}>Next</Link>
    </>
  );
}

export default SupportPage;
