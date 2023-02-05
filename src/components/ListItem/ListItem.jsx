import React from "react";
import { AddOutlined, MoreOutlined } from '@mui/icons-material'; 
import "./ListItem.css";

export default function ListItem() {
  return (
    <div className="recMoviesListItem">
      <img
        className="moviesImg"
        src="https://static.toiimg.com/photo/msid-95875669/95875669.jpg"
        alt=""
      />
      <div className="MovInfo">
        <h3 className="movTitle">Varisu</h3>
        <p className="movDesc">
          Vijay Rajendran is a happy-go-lucky man, but everything changes after
          the unexpected death of his foster father.
        </p>
        <button className="MovBtn"><MoreOutlined className="icon" />Learn More</button>
        <button className="MovBtn"><AddOutlined className="icon" />Add</button>
      </div>
    </div>
  );
}
