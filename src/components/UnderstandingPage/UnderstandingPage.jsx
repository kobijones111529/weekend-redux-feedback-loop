import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom/cjs/react-router-dom";
import { setFeedback } from "../../redux/actions";

function UnderstandingPage() {
  const dispatch = useDispatch();
  const feedback = useSelector(store => store.feedback);
  const [input, setInput] = useState('');

  const inputValidated = useMemo(() => {
    if (input.trim() === '') {
      return null;
    }

    const inputNum = Number(input);
    if (
      [
        Number.isNaN(inputNum),
        !Number.isInteger(inputNum),
        inputNum < 0,
        inputNum > 5
      ].some(cond => cond)
    ) {
      return null;
    }

    return inputNum;
  }, [input]);

  const handleNext = event => {
    if (inputValidated === null) {
      event.preventDefault();
      alert('Invalid input');
      return;
    }

    dispatch(setFeedback({ ...feedback, understanding: inputValidated }));
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
