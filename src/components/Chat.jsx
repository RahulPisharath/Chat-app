import React from "react";

const Chat = ({ question, answer }) => {
  return (
    <div>
      <ul className="query_listing_ul">
        <li className="query_q">
          <div className="results" data-id="Q">
            <p>{question}</p>
          </div>
        </li>
        <li className="query_a output">
          <div className="results">
            <p className="typewriter">{answer}</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Chat;
