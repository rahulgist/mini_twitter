import React, { useState } from "react";
import { BsHeartFill } from "react-icons/bs";
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
  return (
    <div className="row my-1">
      <div className="col-md-6 offset-md-2 border border-2 rounded-2 bg-secondary bg-opacity-25">
        <p>Date: {tweet.datetime}</p>
        <h4>{tweet.tweet}</h4>
        {Loading ? (
          <button className="btn btn-outline-dark border-0">
            <div className="spinner-border spinner-border-sm text-white me-1" role="status">
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
      </div>
    </div>
  );
}

export default Tweet;
