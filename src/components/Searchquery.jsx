import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import {BASE_API_URL,API_KEY} from '../constants/utils';

const base_url = "https://fakestoreapi.com/products";
const base_url1 = "https://www.googleapis.com/customsearch/v1?key=AIzaSyCK_JR1D2rPtQy6XtTdiHIorQFSaYaQFOw&cx=017576662512468239146:omuauf_lfve&q=cars";
const Searchquery = () => {

  const [chat, setchat] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
 
  // const params = useParams();
  // const { searhQuery } = params;

  useEffect(() => {
    // console.log("UseEffect Calling !!!");
  }, []);

  const handleChange = (event) => {
    setSearch(event.target.value);
    console.log("value is:", event.target.value);
  };

  async function fetchChat() {
    try {
      const response = await fetch(base_url);
      const data = await response.json();
      setchat(Array.from(data)[4]);
      // const abc = data[0].description;
      // console.log(abc);
      if (response.ok) {
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  }

 
  return (
    <>
      <div className="Search_queries">
        <div className="query_items">
          <ul className="query_listing_ul" key={chat.id}>
            <li className="query_q">
              <div className="results "> Searh Question </div>
            </li>
            <li className="query_a output">
              <div className="results">
             
                <p className="typewriter">{chat.title}</p>
               
                <p>{chat.completed ? "Yes" : ""}</p>
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
            <></>
          )}
          <input
            id="search"
            label="Search Data"
            className="input_field"
            type="text"
            placeholder="Enter Your Query Here..."
            onChange={handleChange}
            value={search}
          />
          <button
            className="btn btn_send"
            type="button"
            onClick={() => {
              setSearch('');
              setLoading(true);
              // console.log("OnCickButton !!!");
              fetchChat();
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
