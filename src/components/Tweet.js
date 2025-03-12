import React, { useState } from "react";
import { BsHeartFill, BsThreeDots } from "react-icons/bs";

function Tweet({ tweet }) {

  const [like, setLike] = useState(0);
  const [Loading, setLoading] = useState(false);


  const likeTweet = async (tweet) => {
    setLoading(true);
    let response = await fetch(
      `https://apex.oracle.com/pls/apex/rahul_workspace/tweets/like?tweet=${tweet}`,
      {
        method: "POST",
      }
    );
    // getTweets();
    if (response.status === 200) {
      setLike((like) => like + 1);
    }
    setLoading(false);
  };

  const reportTweet = async () => {
    
    let response = await fetch(
      `https://apex.oracle.com/pls/apex/rahul_workspace/tweets/report?tweet=${tweet.tweet}`,
      { method: "POST" }
    );
    if (response.status === 200) {
        alert("Tweet Reported as a spam!");
      }else{
        alert("Tweet not reported!! Try Again")
      }
     
  };
  return (
    <div className="row my-1">
      <div className="col-md-6 offset-md-2 border border-2 rounded-2 bg-secondary bg-opacity-25 position-relative">
        <p>Date: {tweet.datetime}</p>
        <h4>{tweet.tweet}</h4>
        {Loading ? (
          <button className="btn btn-outline-dark border-0">
            <div
              className="spinner-border spinner-border-sm text-white me-1"
              role="status"
            >
              <span className="visually-hidden">Loading...</span>
            </div>
            {tweet.likes + like}
          </button>
        ) : (
          <button
            onClick={() => {
              likeTweet(tweet.tweet);
            }}
            className="btn btn-outline-dark border-0"
          >
            <BsHeartFill /> {tweet.likes + like}
          </button>
        )}
        <div className="position-absolute top-0 end-0">
          <button
            className="btn btn-outline-secondary border-0 dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <BsThreeDots />
          </button>
          <ul className="dropdown-menu">
            <li>
              <button onClick={reportTweet} className="dropdown-item">
                Report
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Tweet;
