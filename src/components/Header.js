import React, { useState } from "react";
import { BsTwitter, BsPersonCircle } from "react-icons/bs";
export default function Header({ postTweet }) {
  const [Tweet, setTweet] = useState("");

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-2 border-end py-2">
          <BsTwitter className="h1 text-primary" />
        </div>
        <div className="col-md-6">
          <div className="row">
            <div className="col-12  py-2">
              <h4>Home</h4>
            </div>
            <div className="col-12">
              <div className="row border border-2 border-start-0 border-end-0 py-2">
                <div className="col-md-2">
                  <BsPersonCircle className="h1" />
                </div>
                <div className="col-md-8 d-flex align-items-center">
                  <input
                    value={Tweet}
                    onChange={(e) => {
                      setTweet(e.target.value);
                    }}
                    type="text"
                    className="form-control border-0"
                    placeholder="What's Happening ?"
                  />
                </div>
                <div className="col-md-2 d-flex align-items-center">
                  <button
                    className="btn btn-primary w-100"
                    onClick={() => {
                      postTweet(Tweet);
                      setTweet("");
                    }}
                  >
                    Tweet
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 border-start">
          <div className="row">
            <div className="col-12 py-2">
              <input
                type="text"
                className="form-control bg-secondary bg-opacity-25"
                placeholder="Search Twitter"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
