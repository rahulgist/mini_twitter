import React from "react";
import { BsHeartFill } from "react-icons/bs";
function Tweets({ allTweets, Loading }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6 offset-2 text-center">
          {Loading ? (
            <div className="py-5">
              <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      {allTweets.map((tweet) => {
        return (
          <div className="row my-1">
            <div className="col-md-6 offset-md-2 border border-2 rounded-2 bg-secondary bg-opacity-25">
              <p>Date: {tweet.datetime}</p>
              <h4>{tweet.tweet}</h4>
              <button className="btn btn-outline-dark border-0">
                <BsHeartFill /> {tweet.likes}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Tweets;
