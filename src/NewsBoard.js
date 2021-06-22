import React, { useContext, useState, useRef, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import newsUrlComponent from "./newsUrlComponent.js";
import { Tab } from "semantic-ui-react";
import NewsList from "./NewsList.js";

const _ = require("lodash");

function NewsBoard() {
  const centerNews =
    "associated-press,reuters,bloomberg,bbc-news,the-hill,usa-today,the-wall-street-journal,";
  const leftNews =
    "abc-news,buzzfeed,cbs-news,cnn,nbc-news,politico,time,the-washington-post,the-huffington-post,msnbc,";
  const rightNews =
    "fox-news,the-washington-times,breitbart-news,national-review,the-american-conservative";
  const [[leftNewsList, centerNewsList, rightNewsList], setData] = useState([
    [],
    [],
    [],
  ]);
  const value = useContext(newsUrlComponent);
  const newsdate =
    value.newsDate.getFullYear() +
    "-" +
    (value.newsDate.getMonth() + 1) +
    "-" +
    value.newsDate.getDate();
  const createUrl = (urlsource, newsdate, value) => {
    const url =
      "https://leftmidrightnews.herokuapp.com/?" +
      "q=" +
      value.keyword +
      "&" +
      "sources=" +
      urlsource +
      "&" +
      "fromdate=" +
      newsdate +
      "&" +
      "to=" +
      newsdate;
    return url;
  };

  const leftListUrl = createUrl(leftNews, newsdate, value);
  const rightListUrl = createUrl(rightNews, newsdate, value);
  const centerListUrl = createUrl(centerNews, newsdate, value);

  async function getNews(leftListUrl, rightListUrl, centerListUrl) {
    const responseLeft = await fetch(leftListUrl, {
      headers: { "X-Api-Key": "832f76f6261645f78b4cfb6490835a6c" },
      mode: "cors",
    });
    const newsLeft = await responseLeft.json();
    const responseRight = await fetch(rightListUrl, {
      headers: { "X-Api-Key": "832f76f6261645f78b4cfb6490835a6c" },
      mode: "cors",
    });
    const newsRight = await responseRight.json();
    const responseCenter = await fetch(centerListUrl, {
      headers: { "X-Api-Key": "832f76f6261645f78b4cfb6490835a6c" },
      mode: "cors",
    });
    const newsCenter = await responseCenter.json();
    setData([newsLeft.articles, newsCenter.articles, newsRight.articles]);
  }

  const throttled = useRef(_.debounce(getNews, 1000));
  useEffect(() => {
    throttled.current(leftListUrl, rightListUrl, centerListUrl);
  }, [leftListUrl, rightListUrl, centerListUrl]);

  const panes = [
    {
      menuItem: { content: "Blue", color: "blue" },
      render: () => (
        <Tab.Pane>
          <div className="column leftNews">
            <NewsList newssources={leftNewsList} />
          </div>
        </Tab.Pane>
      ),
    },
    {
      menuItem: { content: "Grey", color: "grey" },
      render: () => (
        <Tab.Pane>
          <div className="column centernews">
            <NewsList newssources={centerNewsList} />
          </div>
        </Tab.Pane>
      ),
    },
    {
      menuItem: { content: "Red", color: "red" },
      render: () => (
        <Tab.Pane>
          <div className="column rightNews">
            <NewsList newssources={rightNewsList} />
          </div>
        </Tab.Pane>
      ),
    },
  ];
  const isMobiledevice = useMediaQuery({ query: "(max-width: 1224px)" });
  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1224px)" });
  return (
    <div className="ui equal width divided unstackable grid">
      {isMobiledevice && <Tab panes={panes} />}
      {isDesktopOrLaptop && (
        <>
          <div className="column leftNews">
            <NewsList newssources={leftNewsList} />
          </div>
          <div className="column centernews">
            <NewsList newssources={centerNewsList} />
          </div>
          <div className="column rightNews">
            <NewsList newssources={rightNewsList} />
          </div>
        </>
      )}
    </div>
  );
}

export default NewsBoard;
