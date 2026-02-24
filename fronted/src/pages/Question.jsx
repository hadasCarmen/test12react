import React, { useEffect, useState } from "react";
import { fetchComplaints } from "../api/complaintsApi";

function Question() {
  const [answer, setAnswer] = useState();
  async function rowQuestion() {
    const list = await fetchComplaints();
    const num = Math.floor(Math.random() * (list.length - 1));
    const numbers = new Set();

    while (numbers.size < 3) {
      const random = Math.floor(Math.random() * 100) + 1;
      numbers.add(random);
    }

  }
  useEffect(async () => {
    rowQuestion();
  }, []);
  function equal() {}
  return (
    <div>
      <h1>Terror Data Quiz</h1>
      <div>{`when `}</div>
      <div>
        <form action="">
          <label htmlFor="answer">Your Answer:</label>
          <input
            onChange={(e) => setAnswer(e.target.value)}
            type="text"
            name="answer"
            id="answer"
          />
          <button onClick={equal} type="submit">
            Submit Answer
          </button>
        </form>
      </div>
      <div>correct</div>
      <div>
        <button>Back to Data Page</button>
        <button>Next Question</button>
      </div>
    </div>
  );
}

export default Question;
