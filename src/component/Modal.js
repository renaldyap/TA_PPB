import React from "react";
import { Link } from "react-router-dom";
import "./Modal.css";
export default function Modal ({ isShow, data, onCancel }) {
  return (
    <div className={!isShow ? "hidden" : ""} datacy="modal-delete">
      <div className="modal-bg" onClick={onCancel}></div>
      <div className="modal">
        {data && <img src={data.MangaCover} alt="sesuatu"  />}
        <div className="description">
        {data && <p id="tle">{data.MangaTitle}</p>}
        {data && <p id="te">{data.MangaSynopsis}</p>}
        </div>
      
      </div>
    </div>
  );
}