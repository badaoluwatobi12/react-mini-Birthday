import { useState } from "react";
import "./accordion.scss";
import SingleQuestion from "./accordion/question.jsx";
import data from "./accordion/data";

function accordion() {
  const [questions, setQuestions] = useState(data);
  return (
    <>
      <div className="container">
        <h3>question and answer about login</h3>
        <section className="info">
          {questions.map((question) => {
            return <SingleQuestion key={question.id} {...question} />;
          })}
        </section>
      </div>
    </>
  );
}

export default accordion;
