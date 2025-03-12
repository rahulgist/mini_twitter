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

  useEffect(() => {
    getTweets();
  }, []);

  return (
    <>
      <Header postTweet={postTweet} />
      <Tweets allTweets={allTweets} Loading={Loading} getTweets={getTweets} />
    </>
  );
}

export default App;
