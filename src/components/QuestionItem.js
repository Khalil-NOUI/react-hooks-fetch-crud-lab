import React from "react";

function QuestionItem({ question, handleDelete }) {
  const { id, prompt, answers, correctIndex } = question;


  function onDelete(id) {
    fetch(`http://localhost:4000/questions/:${id}`, {
      method: "DELETE",
      headers : {
        "content-type":"application/json",},
    })
    .then(res => res.json())
    .then(deletedOne => handleDelete(id))

  }

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));



  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick={() => onDelete(id)}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
