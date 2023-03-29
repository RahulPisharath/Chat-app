import React, { useState, useEffect } from "react";

const base_url = "https://jsonplaceholder.typicode.com/todos";

const Searchquery = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  // const query =  document.getElementById('search').value;

  useEffect(() => {
    console.log("UseEffect Calling !!!");
  }, []);

  async function fetchTodos() {
    try {
      const response = await fetch(base_url);
      const data = await response.json();
      console.log(Array.from(data)[0]);
      setTodos(Array.from(data)[0]);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="Search_queries">
        <div className="query_items">
          <ul className="query_listing_ul" key={todos.id}>
            <li className="query_q">
              <div className="results"> Searchquery </div>
            </li>
            <li className="query_a output">
              <div className="results">
                <code>{todos.title}</code>
                <p> {todos.completed ? "Yes" : ""}</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="search_field">
          {loading ? (
            <div className="chat_wrapper">
              <div className="chat_container">
                <div className="chat_container_swing_balls">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          ) : (
            <>Hi</>
          )}
          <input
            id="search"
            label="Search Data"
            className="input_field"
            type="text"
            placeholder="Enter Your Query Here..."
          />
          <button
            className="btn btn_send"
            type="button"
            onClick={() => {
              console.log("OnClickButton !!!");
              fetchTodos();
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
