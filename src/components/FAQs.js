import React, { useState } from "react";
import "./FAQs.css";

const FAQs = ({ question, answer, answerSupport }) => {
  const [answerClass, setAnswerClass] = useState("FAQs__answer__close");

  const hasAnswerSupport = (answerSupport) => {
    if (answerSupport.length > 0) {
      return true;
    }
  };

  const handleClick = (e) => {
    const answerDiv = e.target.nextSibling;
    console.log(e.target.style);

    setAnswerClass(
      answerClass === "FAQs__answer__close"
        ? "FAQs__answer__open"
        : "FAQs__answer__close"
    );

    if (answerClass === "FAQs__answer__close") {
      e.target.style.backgroundColor = "#d6001c";
      e.target.style.color = "white";

      answerDiv.childNodes.forEach((node) => {
        node.style.display = "block";
      });
    } else if (answerClass === "FAQs__answer__open") {
      e.target.style.backgroundColor = "white";
      e.target.style.color = "#212529";

      answerDiv.childNodes.forEach((node) => {
        setTimeout(() => {
          node.style.display = "none";
        }, 0);
      });
    }
  };

  return (
    <div className="FAQs">
      <div className="FAQs__question" onClick={(e) => handleClick(e)}>
        {question}
      </div>
      <div className={`FAQs__answer ${answerClass}`}>
        <p>{answer}</p>
        {hasAnswerSupport(answerSupport) === true && (
          <ul>
            {answerSupport.map((listItem, index) => (
              <li key={index}>{listItem}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
export default FAQs;
