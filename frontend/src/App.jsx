
import "./App.css"
import imgLogo from "./assets/devBlogLogo.svg"
import { ArrowRight } from "phosphor-react"
 
 export function App() {

  return (
    <>
      {/* HEADER */}
        <div className="header">
          <div className="header-content-wrapper margin-uni ">
          <div className="imge-logo">
              <img src={imgLogo} alt="imageLogo" />
            </div>
            <div className="menu">
                <nav className=" menu-items">
                  <ul className="menu-item" >
                    <li> <a href="#">Inicio</a></li>
                    <li> <a href="#">Galeria</a></li>
                    <li> <a href="#">Sobre</a></li>
                    <li> <a href="#">Perfil</a></li>
                  </ul>
                </nav>
            </div>

            <div className="search-bar"> 
              <label htmlFor="search"> Procurar</label>
              <input id="search" type="text" />
            </div>
          </div>
        </div>

    {/* DIVIDER */}
        <div className="divider margin-uni">
        </div>
      
      <div className="posts-header margin-uni ">
        <span className="title"> Recentes</span>

        <div className="more-options">
          <span>Mais</span>
          <ArrowRight size={15}/>
        </div>
      </div>

    </>
  )
  
}