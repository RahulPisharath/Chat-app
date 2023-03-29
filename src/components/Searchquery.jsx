import React, { useState, useEffect } from "react";

const base_url = "https://random-data-api.com/api";

const Searchquery = () => {
  const [data, setData] = useState('');
  const fetchData = (e) => {
    const query =  document.getElementById('search').value;
    setData(query);
    console.log(data);
    // fetch(base_url)
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((data) => {
    //     setData(data);
    //     console.log(data);
    //   });
  };

  return (
    <>
    <div className="Search_queries">
    <div className="query_items">
    
      <ul className="query_listing_ul">
        <li className="query_q">
          <div className="results"> Searchquery </div>
        </li>
        <li className="query_a output">
        <div className="results">
          <code>{data}</code>
          </div>
           </li>
      </ul>
    </div>
      <div className="search_field">
        <div className="chat_wrapper">
          <div className="chat_container">
            <div className="chat_container_swing_balls">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
        <input
          id="search"
          label="Search Data"
          className="input_field"
          type="text"
          placeholder="Enter Your Query Here..."
        />
        <button className="btn btn_send" type="button"
          onClick={fetchData}>
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
