import { ArrowRight } from "phosphor-react"
import "./PostsHeader.css"

export function PostsHeader() {
  return (
    <>
      <div className="posts-header margin-uni ">
        <span className="title"> Recentes</span>

        <div className="more-options">
          <a href="#">
          <span>Mais</span>
          <ArrowRight size={15}/>
          </a>
          
        </div>
      </div>

    </>
  )
}