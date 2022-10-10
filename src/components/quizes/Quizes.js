import React from "react";
import { useLoaderData } from "react-router-dom";
import Quiz from "../quiz/Quiz";

const Quizes = () => {
  const quizData = useLoaderData();
  const questions = quizData.data.questions;
  console.log(quizData.data.questions);
  return (
    <div>
      <h1 className="my-5 text-center">
        Start <span className="text-danger ">Javascript</span> Quiz
      </h1>
      {questions.map((question) => (
        <Quiz key={question.id} qus={question}></Quiz>
      ))}
    </div>
  );
};

export default Quizes;
