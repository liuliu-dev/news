import React from "react";

function Product(props) {
  return (
    <div className="item newscomponent">
      <div className="image">
        <img src={props.newsImageUrl} />
        <span className="header">{props.source}</span>
      </div>
      <div className="middle aligned content">
        <div className="header">
          <a href={props.url}>{props.title}</a>
        </div>
        <div className="description">
          <p>{props.description}</p>
        </div>
        <div className="extra">
          <span>{props.publishTime}</span>
        </div>
      </div>
    </div>
  );
}
export default Product;
