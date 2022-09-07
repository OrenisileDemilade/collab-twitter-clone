import { MoreHoriz } from "@mui/icons-material";
import React from "react";
import classes from "./Trend.module.css";

export default function Trend() {
  const dummyData = [
    {
      id: 1,
      heading: "Trending",
      title: "Binance",
      tweets: "1m",
    },
    {
      id: 2,
      heading: "Trending",
      title: "Stock Market",
      tweets: "20k",
    },
    {
      id: 3,
      heading: "Trending in Nigeria",
      title: "#ASUUstrike",
      tweets: "7,888",
    },

    {
      id: 4,
      heading: "Trending in Nigeria",
      title: "STOP THE PROJECTION",
      tweets: "5000",
    },
    {
      id: 5,
      heading: "Trending in Nigeria",
      title: "Solana",
      tweets: "100k",
    },
    {
      id: 6,
      heading: "Trending in Nigeria",
      title: "NFT",
      tweets: "201.1k",
    },
    {
      id: 7,
      heading: "Trending in Nigeria",
      title: "Forex Signals",
      tweets: "60k",
    },
    {
      id: 8,
      heading: "sports",
      title: "Ronaldo",
      tweets: "1m",
    },
    { id: 9, heading: "sports", title: "Manchester United", tweets: "2m" },
    {
      id: 10,
      heading: "sports",
      title: "Graham Potter",
      tweets: "200k",
    },
  ];
  const trends = Object.keys(dummyData[0]);
  console.log(trends);
  return (
      <ul className={classes.trends}>
          {dummyData.map(trend => {
              console.log(trend)
              return <li>
                  <div className={classes.content}>
                      <div className={classes.heading_container}>
                          <p className={classes.heading}>{trend.heading}</p>
                          <button>
                              <MoreHoriz className={classes.icon} />
                          </button>
                      </div>
                      <p className={classes.title}>{trend.title}</p>
                      <p className={classes.tweets}>{trend.tweets} tweets</p>
                  </div>
              </li>
          })}
    </ul>
  );
}
{
  /* <p className={classes.title}>hiii</p> */
}
