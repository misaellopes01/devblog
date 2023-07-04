import "./PromPost.css"

export function PromPost(props) {

  return (
    <>
      <div className="prom-post-content-wrapper">
          <div className="prom-post">
            <img src={props.img} alt="" />

            <div className="prom-post-info">

              <span>{props.title}</span>
              <div className="prom-author">
                <span>{props.author}</span>
                <span> 2 min ago</span>
              </div>
            </div>

            <div className="prom-post-content">
              <p>
                {props.content}
              </p>
            </div>
          </div>
        </div>
    </>
  )
}