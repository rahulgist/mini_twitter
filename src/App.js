import "./App.css";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Tweets from "./components/Tweets";
function App() {
  const [allTweets, setallTweets] = useState([]);
  const [Loading, setLoading] = useState(true);

  async function getTweets() {
    setLoading(true);
    let data = await fetch(
      "https://apex.oracle.com/pls/apex/rahul_workspace/tweets/get"
    );
    let convertedData = await data.json();
    // console.log(convertedData.items);
    setallTweets(convertedData.items);
    setLoading(false);
  }

  async function postTweet(tweet) {
    let currentTime = new Date().toISOString().slice(0, 10);
    await fetch(
      `https://apex.oracle.com/pls/apex/rahul_workspace/tweets/post?tweet=${tweet}&datetime=${currentTime}&likes=0&report=0`,
      { method: "POST" }
    );
    getTweets();
  }

  function sortTweetsByLikes() {
    
    let sortedArray = [...allTweets];
    
    sortedArray.sort((a, b) => b.likes - a.likes);
    // console.log(allTweets);
    setallTweets(sortedArray);
  }

  function sortByTitle(){
    let sortedData = [...allTweets];
    sortedData.sort((a, b) => a.tweet.localeCompare(b.tweet));
    // console.log(allTweets);
    setallTweets(sortedData);
  };

  function sortByDate(){
    let sortedDateData = [...allTweets];
    sortedDateData.sort((a, b) => new Date(a.datetime) - new Date(b.datetime));
    setallTweets(sortedDateData);
  };

  useEffect(() => {
    getTweets();
  }, []);

  return (
    <>
      <Header postTweet={postTweet} sortByDate={sortByDate} sortTweetsByLikes={sortTweetsByLikes} sortByTitle = {sortByTitle} />
      <Tweets allTweets={allTweets} Loading={Loading} getTweets={getTweets} />
    </>
  );
}

export default App;
