import React, { useState, useEffect } from "react";
import Loader from "../components/Loader";
import Chat from "../components/Chat";

const base_url = "https://jsonplaceholder.typicode.com/users/";

const Searchquery = () => {

  //state for storing chat messages
  const [messagelist, setMessagelist] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // console.log("UseEffect Calling !!!");
  }, []);

  async function fetchChat() {
    try {
      const response = await fetch(base_url + search);
      const data = await response.json();
      setSearch(data);
      createNewChatItem();
      console.log(messagelist.length);
      // console.log("Your Search API is :" + base_url + search);
      // console.log("Your Search Parameter is :" + search);
      if (response.ok) {
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  }

  function createNewChatItem() {
    if (search !== "") {
      const item = { text: search };
      const tempArray = [...messagelist];
      setMessagelist(tempArray);
      console.log(messagelist);
    }
  }

  return (
    <>
      <div className="Search_queries">
        <div className="query_items">
          <Chat list={search} />
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
