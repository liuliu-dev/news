import React from "react";
import Product from "./Product.js";

function NewsList(data) {
  const newsComponents = data.newssources.map((article, index) => (
    <Product
      key={"article" + index}
      id={index}
      title={article.title}
      description={article.description}
      url={article.url}
      source={article.source.name}
      newsImageUrl={article.urlToImage}
      publishTime={new Date(article.publishedAt).toString()}
      author={article.author}
      content={article.content}
    />
  ));
  return <div className="ui stackable items">{newsComponents}</div>;
}

export default NewsList;
