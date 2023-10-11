import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {

  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/questions")
    .then(res => res.json())
    .then((data) => setQuestions(data))
  }, [])

  console.log(questions)

  function handleAdd(added) {
    console.log(added)
    const addedquestion = [...questions, added]
    console.log(addedquestion)
    setQuestions((questions) => addedquestion)
    
  }

  console.log(questions)

  function handleDelete(deletedID) {
    console.log(deletedID)
    const afterDelQuestions = questions.filter((question) => question.id !== deletedID )
    console.log(afterDelQuestions)
    setQuestions((questions) => afterDelQuestions)
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm handleAdd={handleAdd} /> : <QuestionList questions={questions} handleDelete={handleDelete} />}
    </main>
  );
}

export default App;
