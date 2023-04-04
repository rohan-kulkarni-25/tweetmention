import React, { useState, useEffect } from "react";

const App = () => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    const fetchTweets = async () => {
      // Replace with your own Twitter API credentials
      const consumerKey = "e7GWja1E7pydFJuhlys1UkTv6";
      const consumerSecret =
        "bAWZCmFvbXd1248SH1LyHlbKG2z9rMsQTqtwFDs3xgooN2kGjy";
      const bearerToken =
        "AAAAAAAAAAAAAAAAAAAAAGyQUQEAAAAAt0Mzc8HzF%2Ba23z6XC5jSnayOAck%3DhGXx0OuK4dBtwp7gVZUn2BSONxcNX3bToD4rIvErdey9J059bH";

      try {
        const handleResponse = await fetch(
          "https://api.twitter.com/2/users/rohan_2502/mentions",
          {
            headers: {
              "User-Agent": "v2UserMentionssJS",
              Authorization: `Bearer ${bearerToken}`,
            },
          }
        );

        console.log(handleResponse);
        // const handleData = await handleResponse.json();

        // const handleTweets = handleData.map((status) => {
        //   return {
        //     text: status.text,
        //     user: status.user.name,
        //     createdAt: status.created_at,
        //   };
        // });

        // // Combine the hashtag and handle tweets and sort by date
        // const allTweets = [...handleTweets];
        // allTweets.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

        // // Set the state with the retrieved tweets
        // setTweets(allTweets);
      } catch (error) {
        console.error(error);
      }
    };
    const userId = 1304031667196104704;
    // const url = `https://api.twitter.com/2/users/${userId}/mentions`;

    // The code below sets the bearer token from your environment variables
    // To set environment variables on macOS or Linux, run the export command below from the terminal:
    // export BEARER_TOKEN='YOUR-TOKEN'
    const bearerToken =
      "AAAAAAAAAAAAAAAAAAAAAGyQUQEAAAAAt0Mzc8HzF%2Ba23z6XC5jSnayOAck%3DhGXx0OuK4dBtwp7gVZUn2BSONxcNX3bToD4rIvErdey9J059bH";

    // this is the ID for @TwitterDev
    const getUserMentions = async () => {
      let userMentions = [];
      let params = {
        max_results: 100,
        "tweet.fields": "created_at",
      };

      const options = {
        headers: {
          mode: "no-cors",
          authorization: `Bearer ${bearerToken}`,
        },
      };

      // let hasNextPage = true;
      // let nextToken = null;
      // console.log("Retrieving mentions...");
      // while (hasNextPage) {
      // let resp = await getPage(params, options, nextToken);
      let resp = await fetch(
        "https://api.twitter.com/1.1/statuses/mentions_timeline.json",
        {
          headers: {
            mode: "no-cors",
            authorization: `Bearer ${bearerToken}`,
          },
        }
      );
      console.log(resp);
      // if (
      //   resp &&
      //   resp.meta &&
      //   resp.meta.result_count &&
      //   resp.meta.result_count > 0
      // ) {
      //   if (resp.data) {
      //     userMentions.push.apply(userMentions, resp.data);
      //   }
      //   if (resp.meta.next_token) {
      //     nextToken = resp.meta.next_token;
      //   } else {
      //     hasNextPage = false;
      //   }
      // } else {
      //   hasNextPage = false;
      // }
      // }

      // console.dir(userMentions, {
      //   depth: null,
      // });

      // console.log(`Got ${userMentions.length} mentions for user ID ${userId}!`);
    };
    // const getPage = async (params, options, nextToken) => {
    //   if (nextToken) {
    //     params.pagination_token = nextToken;
    //   }
    //   try {
    //     const resp = await fetch("get", url, params, options);

    //     if (resp.statusCode != 200) {
    //       console.log(
    //         `${resp.statusCode} ${resp.statusMessage}:\n${resp.body}`
    //       );
    //       return;
    //     }
    //     return resp.body;
    //   } catch (err) {
    //     throw new Error(`Request failed: ${err}`);
    //   }
    // };
    getUserMentions();
  }, []);

  return (
    <div>
      <h2>Tweets with</h2>
      <h2>sadfsfsdf</h2>
      {tweets.map((tweet, index) => (
        <div key={index}>
          <p>{tweet.text}</p>
          <p>
            By {tweet.user} on {tweet.createdAt}
          </p>
        </div>
      ))}
    </div>
  );
};

export default App;
