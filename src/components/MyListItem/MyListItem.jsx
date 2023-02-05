import React from 'react'; 
import { RemoveCircleOutline } from '@mui/icons-material'; 
import './MyListItem.css'; 


function MyListItem() {
    return(
        <div className="myListItem">
            
            <img className="myListItemImg" src="https://i.ytimg.com/vi/x6oUuu6vA7w/maxresdefault.jpg" alt="" />
            <div className="myListItemInfo">
                <h3 className="myListItemTitle">
                    Thunivu

                </h3>
                <p className="myListItemdesc">A criminal mastermind and 
                his team form a plan and commit bank heists across Chennai, 
                but the motive of their heists remains mysterious.</p>
                <button className="myListItemBtn">Learn More</button>
                <button className="myListItemBtn"><RemoveCircleOutline className="myListItemIcon" />Remove</button>

            </div>
        </div>
    )
}

export default MyListItem; 