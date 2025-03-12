import React, { useState } from "react";
import { BsTwitter, BsPersonCircle, BsThreeDots } from "react-icons/bs";
export default function Header({ postTweet, sortTweetsByLikes, sortByTitle, sortByDate }) {
  const [Tweet, setTweet] = useState("");

  function addTweet(event) {
    event.preventDefault();
    postTweet(Tweet);
    setTweet("");
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-2 border-end py-2">
          <BsTwitter className="h1 text-primary" />
        </div>
        <div className="col-md-6">
          <div className="row">
            <div className="col-12  py-2 d-flex justify-content-between ">
              <h4>Home</h4>
              <div className="dropdown">
                <button
                  className="btn dropdown-toggle btn-outline-dark border-0"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <BsThreeDots />
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <button onClick={sortByTitle} className="dropdown-item">Sort By Tweet</button>
                  </li>
                  <li>
                    <button onClick={sortByDate}  className="dropdown-item">Sort By Date</button>
                  </li>
                  <li>
                    <button onClick={sortTweetsByLikes} className="dropdown-item">Sort By Likes</button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12">
              <form
                onSubmit={addTweet}
                className="row border border-2 border-start-0 border-end-0 py-2"
              >
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
                    required
                    minLength={5}
                  />
                </div>
                <div className="col-md-2 d-flex align-items-center">
                  <button
                    type="submit"
                    className="btn btn-primary w-100"
                    // onClick={() => {
                    //   postTweet(Tweet);
                    //   setTweet("");
                    // }}
                  >
                    Tweet
                  </button>
                </div>
              </form>
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
