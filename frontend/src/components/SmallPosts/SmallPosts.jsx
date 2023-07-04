import "./SmallPosts.css";

export function SmallPosts(props) {
  return (
    <>
      <div className="small-post-content-wrapper">
        <div className="small-post">
          <img src={props.img} alt="" />

          <div className="small-post-info">
            <span>{props.title}</span>
            <div className="small-author">
              <span>{props.author}</span>
              <span> 2 min ago</span>
            </div>
          </div>

          <div className="small-post-content">
            <p>{props.content}</p>
          </div>
        </div>
      </div>
    </>
  );
}
