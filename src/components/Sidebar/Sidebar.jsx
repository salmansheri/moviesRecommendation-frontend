import React from "react";
import "./Sidebar.css";
import {
  TvOutlined,
  HomeOutlined,
  MovieOutlined,
  ListOutlined,
} from "@mui/icons-material";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <h3 className="sidebarTitle">Genre</h3>
        <ul className="sidebarList">
          <li className="sidebarListItem active">
            <HomeOutlined className="sidebarIcon" />
            Home
          </li>
          <li className="sidebarListItem ">
            <TvOutlined className="sidebarIcon" />
            Tv Series
          </li>
          <li className="sidebarListItem">
            <MovieOutlined className="sidebarIcon" />
            Movies
          </li>
          <li className="sidebarListItem">
            <ListOutlined className="sidebarIcon" />
            My List
          </li>
          <li className="sidebarListItem">Horror</li>
          <li className="sidebarListItem">Sci-Fi</li>
          <li className="sidebarListItem">Thriller</li>
          <li className="sidebarListItem">Kids</li>
          <li className="sidebarListItem">Family</li>
          <li className="sidebarListItem">Romance</li>
        </ul>
      </div>
    </div>
  );
}
