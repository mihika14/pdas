import React from "react";

function ProfileCard({title,handle,image}){
    return(
        <div className="card">
         <div className="card-image">
            <figure className="image is-1byl">
            <img src = {image} />
            </figure>
         </div>
          <div className="card-content" >
            <div className="media-content"></div>
            <p className="title is-4">Title is {title}</p>
           <p className="subtitle is-6">Handle is {handle}</p>
        </div>

          </div>
         
    )
}


export default ProfileCard;