import { formatDistanceToNow} from "date-fns";
import { useState } from "react";
import { Link } from "react-router-dom";

import "./PromPost.css";
export function PromPost(props) {

  const [date, setDate] = useState(new Date().toDateString())
 
  return (
    <>
      <div className="prom-post-content-wrapper">
        <Link to = {`/${props.title}`}>
          <div className="prom-post">
            <img src={props.img} alt="" />

            <div className="prom-post-info">
              <span>{props.title}</span>
              <div className="prom-author">
                <span>{props.author}</span>
                <span>{date}</span>
              </div>
            </div>

            <div className="prom-post-content">
              <p>{props.content}</p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
