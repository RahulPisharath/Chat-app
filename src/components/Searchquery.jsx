import React, { useState, useEffect } from "react";
import Loader from "../components/Loader";
import Chat from "../components/Chat";

const base_url = "https://jsonplaceholder.typicode.com/users/";

const Searchquery = () => {
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
    setMessageHistory([item]);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      fetchChat();
    }
  };

  return (
    <>
      <div className="Search_queries">
        <div className="sidebar">
          <div className="sidebar_Logo">
            <a href="#">
              <svg
                className="box_content"
                width="416"
                height="112"
                viewBox="0 0 416 112"
                fill="#FFF"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M48.6735 112C67.5248 112 81.1225 105.812 89.93 89.7237L79.7318 82.7624C72.6239 96.221 62.7347 100.862 48.6735 100.862C26.4227 100.862 13.7522 90.6519 13.7522 55.6906C13.7522 20.5746 26.4227 11.1381 48.6735 11.1381C62.4257 11.1381 71.3878 15.1602 77.2595 27.6906L88.0758 20.4199C80.6589 5.56905 67.9883 0 48.6735 0C16.5335 0 0 15.4696 0 55.8453C0 96.221 16.5335 112 48.6735 112Z"
                  fill="white"
                ></path>
                <path
                  d="M105.025 55.8453C105.025 95.4475 120.476 112 153.544 112C185.993 112 202.217 95.4475 202.217 55.8453C202.217 16.2431 187.383 0 153.544 0C121.095 0 105.025 16.2431 105.025 55.8453ZM118.777 56C118.777 21.0387 130.829 11.1381 153.544 11.1381C176.258 11.1381 188.465 21.6574 188.465 55.6906C188.465 90.6519 176.258 100.862 153.544 100.862C130.829 100.862 118.777 90.1878 118.777 56Z"
                  fill="white"
                ></path>
                <path
                  d="M273.949 13.6133C289.246 13.6133 296.509 21.3481 296.509 34.8066C296.509 49.9668 288.01 57.2376 273.794 57.2376H244.745V13.6133H273.949ZM244.745 69.1492H275.03L296.972 110.144H312.115L288.937 66.8287C302.535 62.1878 310.261 51.3591 310.261 34.3425C310.261 13.6133 298.363 1.85635 273.949 1.85635H230.993V110.144H244.745V69.1492Z"
                  fill="white"
                ></path>
                <path
                  d="M369.026 14.3867L390.041 76.4199H348.321L369.026 14.3867ZM401.475 110.144H416L378.143 1.85635H360.837L322.98 110.144H337.041L344.458 88.0221H394.058L401.475 110.144Z"
                  fill="white"
                ></path>
              </svg>
            </a>
          </div>
          <div className="sidebar_query">
            <ul className="sidebar_query_ul">
              {messagelist.slice(0).reverse().map((message, index, id) => (
                <li >
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
          {messagelist.map((message, index, id) => (
            <>
              <Chat
                key={index}
                question={message.question}
                answer={message.answer}
              />
            </>
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
    </>
  );
};

export default Searchquery;
