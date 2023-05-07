import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom/cjs/react-router-dom";
import { setFeedback } from "../../redux/actions";

function SupportPage() {
  const dispatch = useDispatch();
  const feedback = useSelector(store => store.feedback);
  const [input, setInput] = useState('');

  // Validated input or null
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

    // Update redux store
    dispatch(setFeedback({ ...feedback, support: inputValidated }));
  };

  return (
    <>
      <p>How well do you feel supported?</p>
      <input value={input} onChange={event => setInput(event.target.value)} />
      <Link to="/comments" onClick={handleNext}>
        <button disabled={inputValidated === null}>Next</button>
      </Link>
    </>
  );
}

export default SupportPage;
