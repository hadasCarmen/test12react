import React, { useEffect, useState } from "react";
import { fetchComplaints } from "../api/complaintsApi";
import { useNavigate } from "react-router";

function Question() {
  const navigate = useNavigate();
  const [answer, setAnswer] = useState();
  const [isGood, setIsGood] = useState(false);
  const [isBad, setIsBad] = useState(false);
  const [completeSentence, setCompleteSentence] = useState("");
  const [goodAnswer, setGoodAnswer] = useState();
  const [numQuestion, setNumQuestion] = useState(1);
  async function rowQuestion() {
    const list = await fetchComplaints();
    const numList = Math.floor(Math.random() * list.length);
    const numbers = new Set();
    const row = Object.entries(list[numList]);
    while (numbers.size < 3) {
      const random = Math.floor(Math.random() * row.length);
      numbers.add(random);
    }
    const listNumbers = [...numbers];

    const words1 = [row[listNumbers[0]][0], row[listNumbers[0]][1]];
    const words2 = [row[listNumbers[1]][0], row[listNumbers[1]][1]];
    const words3 = [row[listNumbers[1]][0], row[listNumbers[2]][1]];
    setCompleteSentence(
      `When ${words1[0]}=${words1[1]} and ${words2[0]}=${words2[1]},what is the ${words3[0]}`,
    );

    return words3[1];
  }

  function chekAnswer() {
    if (goodAnswer) {
      answer === goodAnswer
        ? (setIsGood(true), setIsBad(false))
        : (setIsBad(true), setIsGood(false));
    }
  }
  useEffect(() => {
    rowQuestion().then((returnedAnswer) => setGoodAnswer(returnedAnswer));
  }, [numQuestion]);

  return (
    <div>
      <h1>Terror Data Quiz</h1>
      <div>{completeSentence}</div>
      <div>
        <form onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="answer">Your Answer:</label>
          <input
            onChange={(e) => setAnswer(e.target.value)}
            type="text"
            name="answer"
            id="answer"
          />
          <button onClick={() => chekAnswer()} type="submit">
            Submit Answer
          </button>
        </form>
      </div>
      {isGood && <div className="badOrGood">you sucsess</div>}
      {isBad && <div className="badOrGood">try again</div>}
      <div>
        <button onClick={() => navigate("/api/terorist")}>
          Back to Data Page
        </button>
        <button onClick={(e) => setNumQuestion(numQuestion + 1)}>
          Next Question
        </button>
      </div>
    </div>
  );
}

export default Question;
