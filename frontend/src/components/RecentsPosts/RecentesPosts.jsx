
import { formatDistanceToNow } from "date-fns";
import { useState } from "react";
import { Link } from "react-router-dom";

import "./RecentsPosts.css";
export function RecentsPosts(props) {

  const [date, setDate] = useState(new Date())

  const dateFormatted = formatDistanceToNow(date)
  const upDateDateHandler = () => {
    setDate(dateFormatted)
  }
  return (
    <>
      <div className="">
        <Link  to= {`/${props.title}`} className="keen-slider__slide">
          <div className="post ">
            <img src={props.img} alt="" />

            <div className="post-info">
              <span>{props.title}</span>
              <div className="author">
                <span>{props.author}</span>
                <span onChange={upDateDateHandler}> {dateFormatted} min ago</span>
              </div>
            </div>

            <div className="post-content">
              <p>{props.content}</p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}