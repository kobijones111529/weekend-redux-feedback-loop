import { useMemo, useState } from "react";
import { Link, Redirect } from "react-router-dom/cjs/react-router-dom";
import { setFeedback } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

function FeelingPage() {
  const dispatch = useDispatch();
  const feedback = useSelector(store => store.feedback);
  const [input, setInput] = useState('');

  const inputValid = useMemo(() => {
    if (input.trim() === '') {
      return false;
    }

    return true;
  }, [input]);

  const handleNext = event => {
    if (!inputValid) {
      alert('Invalid input');
      event.preventDefault();
      return;
    }

    dispatch(setFeedback({ ...feedback, feeling: input }));
  };

  return (
    <>
      <p>How are you feeling?</p>
      <input value={input} onChange={event => setInput(event.target.value)} />
      <Link to="/understanding" onClick={handleNext}>Next</Link>
    </>
  );
}

export default FeelingPage;
