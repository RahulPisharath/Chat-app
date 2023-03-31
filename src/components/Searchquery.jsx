import React, { useState, useEffect } from "react";
import Loader from "../components/Loader";
import Chat from "../components/Chat";

const base_url = "https://jsonplaceholder.typicode.com/users/";

const Searchquery = () => {

  //state for storing chat messages
  const [messagelist, setMessagelist] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  async function fetchChat() {
    try {
      const response = await fetch(base_url + search);
      const data = await response.json();
      console.log(data);
      const chatObj = { question: search, answer: data.name };
      const tempArray = [...messagelist];
      tempArray.push(chatObj);
      setMessagelist([...tempArray]);
      // console.log("Your Search API is :" + base_url + search);
      // console.log("Your Search Parameter is :" + search);
      if (response.ok) {
        setLoading(false);
        setSearch("");
      }
    } catch (error) {
      console.log(error);
    }
  }

  const handleKeyPress = e => {
    if (e.key === "Enter") {
      fetchChat();
    }
  };

  return (
    <>
      <div className="Search_queries">
        <div className="query_items">
        {messagelist.map((message,index) => (
            <Chat key={index} question={message.question} answer={message.answer} />
          ))}
        </div>
        <div className="search_field">
          {loading ? <Loader /> : <></>}
          <input
            id="search"
            label="Search Data"
            className="input_field"
            type="text"
            placeholder="Enter Your Query Here..."
            onChange={(e) => {
              setSearch(e.currentTarget.value);
            }}
            onKeyPress={handleKeyPress} 
            value={search}
          />
          <button
            className="btn btn_send"
            type="button"
            onClick={() => {
              setSearch("");
              setLoading(true);
              fetchChat();
              // createNewChatItem();
            }}
          >
            <span className="icon_send">
              <svg
                width="800px"
                height="800px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 12L4 4L6 12M20 12L4 20L6 12M20 12H6"
                  stroke="#1b2228"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Searchquery;
