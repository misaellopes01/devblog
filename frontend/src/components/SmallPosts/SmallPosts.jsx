import { formatDistanceToNow, addDays } from "date-fns";
import { useState } from "react";
import { Link } from "react-router-dom";

import "./SmallPosts.css";

export function SmallPosts(props) {
  let [date, setDate] = useState(new Date().toDateString())

  return (
    <>
      <div className="small-post-content-wrapper">
        <Link to={`/${props.title}`}>
          <div className="small-post">
            <img src={props.img} alt="" />

            <div className="small-post-info">
              <span>{props.title}</span>
              <div className="small-author">
                <span>{props.author}</span>
                <span>{date}</span>
              </div>
            </div>

            <div className="small-post-content">
              <p>{props.content}</p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
