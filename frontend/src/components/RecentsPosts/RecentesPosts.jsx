import "./RecentsPosts.css";

export function RecentsPosts(props) {
  return (
    <>
      <div className="post-content-wrapper">
        <a href="#">
          <div className="post">
            <img src={props.img} alt="" />

            <div className="post-info">
              <span>{props.title}</span>
              <div className="author">
                <span>{props.author}</span>
                <span> 2 min ago</span>
              </div>
            </div>

            <div className="post-content">
              <p>{props.content}</p>
            </div>
          </div>
        </a>
      </div>
    </>
  );
}
