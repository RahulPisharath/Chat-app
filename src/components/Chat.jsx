import React from "react";

const Chat = ({ list }) => {
  return (
    <div>
      <ul className="query_listing_ul" key={list.id}>
        <li className="query_q">
          <div className="results">Question</div>
        </li>
        <li className="query_a output">
          <div className="results">
            <p className="typewriter">{list.name}</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Chat;
