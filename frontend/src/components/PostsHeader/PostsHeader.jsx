
import { MoreOptions } from "./MoreOptions/MoreOptions"
import "./PostsHeader.css"

export function PostsHeader() {
  return (
    <>
      <div className="posts-header margin-uni ">
        <span className="title"> Recentes</span>
        <MoreOptions/>
      </div>

    </>
  )
}