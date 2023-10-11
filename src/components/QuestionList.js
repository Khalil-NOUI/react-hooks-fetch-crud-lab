import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({questions, handleDelete}) {
  // console.log(questions)
  // console.log(questions[0].answers)
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul> 
        {questions.map((question, index) => (
          <QuestionItem key={index} question={question} handleDelete={handleDelete} />
        ))}
      </ul>
    </section>
  );
}

export default QuestionList;
