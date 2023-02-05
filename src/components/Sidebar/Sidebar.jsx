import React from 'react'; 
import './Sidebar.css'; 
import { Tv } from '@mui/icons-material'; 

export default function Sidebar() {
    return(
        <div className="sidebar">
            <div className="sidebarWrapper">
            <h3 className="sidebarTitle">
                 Genre
                </h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem active">
                    <Tv className="sidebarIcon" />
                    Home</li>
                    <li className="sidebarListItem ">
                    <Tv className="sidebarIcon" />
                    Tv Series</li>
                    <li className="sidebarListItem">Movies</li>
                    <li className="sidebarListItem">Horror</li>
                    <li className="sidebarListItem">Sci-Fi</li>
                    <li className="sidebarListItem">Thriller</li>
                    <li className="sidebarListItem">Kids</li>
                    <li className="sidebarListItem">Family</li>
                    <li className="sidebarListItem">Romance</li>
                   
                </ul>
            
            </div>
           
                
        </div>
       
    )
}