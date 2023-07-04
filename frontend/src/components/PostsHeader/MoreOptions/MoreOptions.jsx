import { ArrowRight } from "phosphor-react"
import "./MoreOptions.css"

export function MoreOptions() {

  return (
    <>
      <div className="more-options">
          <a href="#">
          <span>Mais</span>
          <ArrowRight size={15}/>
          </a>
          
        </div>
    </>
  )
}