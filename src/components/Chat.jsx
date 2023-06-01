import React from "react";
import TypeWriterEffect from 'react-typewriter-effect';

const Chat = ({ question, answer, index }) => {
  return (
    <div>
      <ul className="query_listing_ul">
        <li key={index} className="query_q">
          <div className="results" data-id="Q">
            <p>{question}</p>
          </div>
        </li>
        <li  key={index} className="query_a output">
          <div className="results">
          {/* <TypeWriterEffect
              textStyle={{ fontFamily: 'monospace' }}
              startDelay={100}
              cursorColor="#FFF"
              text={answer}
              typeSpeed={100}
              eraseSpeed={100}
            /> */}
            {<p>{answer}</p>}
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Chat;
