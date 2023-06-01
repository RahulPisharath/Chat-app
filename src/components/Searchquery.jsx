import React, { useState, useEffect } from "react";

import Loader from "../components/Loader";
import Chat from "../components/Chat";

const base_url = "https://jsonplaceholder.typicode.com/users/";



const Searchquery = () => {

  const [isOpen, setIsopen] = useState(false);
  const ToggleSidebar = () => {
    isOpen === true ? setIsopen(false) : setIsopen(true);
    }

  //state for storing chat messages
  const [messagelist, setMessagelist] = useState([]);
  const [messageHistroy, setMessageHistory] = useState([]);

  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  async function fetchChat() {
    try {
      const response = await fetch(base_url + search);
      const data = await response.json();
      console.log(data);
      const tempArray = [...messagelist,...messageHistroy];
      const length = tempArray.length;
      const chatObj = { question: search, answer: data.name, ID: length };

      tempArray.push(chatObj);
      setMessagelist([...tempArray]);
      console.log("Questions:" + setMessagelist.name);
      if (response.ok) {
        setLoading(false);
        setSearch("");
      }
    } catch (error) {
      console.log(error);
    }
  }

  const GetSelectedItem = (item) => {
    console.log(item);
    setMessageHistory([]);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      fetchChat();
    }
  };

  return (
    <>
    <div className= {`content_wrapper ${isOpen === true ? 'active' : ''}`}>
    <div className="header sh_in_sm">
      <div onClick={ToggleSidebar}
         className="nav_menu_mb">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
</svg>
      </div>
    </div>
      <div className="Search_queries">
        <div className="overlay"></div>
        <div className="sidebar" >
          <div className="sidebar_Logo">
          <a href="#">
                <i className="icon icon-add">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
</svg>
                </i>
                <span> New Chat</span>
              </a>
          </div>
         
          <div  className= "" >
            <ul className="sidebar_query_ul">
              {messagelist.slice(0).reverse().map((message, index) => (
                <li key={index}>
                  <a key={index} href="#" onClick={() => GetSelectedItem(message)}>
                    <span className="icon_chat"></span>
                    {message.question}
                  </a>
                </li>
              ))}
            </ul>
          </div>
         
        </div>
        <div className="query_items">
          {messagelist.map((message, index) => (
            <div key={index}>
              <Chat
                question={message.question}
                answer={message.answer}
              />
            </div>
          ))}
        </div>
        <button className="btn btn-generate">
            <span className="icon icon-refresh"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-clockwise" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
  <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
</svg></span>
            Regenerate Response
        </button>
        <div className="search_field">
          {loading ? <Loader /> : <></>}
          <input
            id="search"
            label="Search Data"
            className="input_field"
            type="text"
            placeholder="Enter Your Query Here..."
            tabIndex="0"
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
      </div>
    </>
  );
};

export default Searchquery;
