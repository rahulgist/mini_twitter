import React from "react";

import Tweet from "./Tweet";
function Tweets({ allTweets, Loading, getTweets }) {
 

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
        return <Tweet tweet={tweet}/>;
      })}
    </div>
  );
}

export default Tweets;
