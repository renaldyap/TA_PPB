import React from "react";
import "./CardSmall.css";

export default function CardSmall({ data, onClick }) {
  return (
    <div className="card" onClick={onClick} >
    { data ?(
      <>
      <figure>
        <div className ="photo">
      <img src={data.MangaCover} alt={data.l}  />
      </div>
      </figure>
      
      <div className="description">
          <p id="title">{data.MangaTitle}</p>
        </div>
     
      </>
  ) : (
    <p>Loading...</p>
  )}
</div>
);
}
