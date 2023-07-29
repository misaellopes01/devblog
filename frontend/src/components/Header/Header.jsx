import './Header.css'
import imgLogo from "../../assets/devBlogLogo.svg"

import { Link } from 'react-router-dom'

export function Header() {
  return (
    <>
       <header className="header">
          <div className="header-content-wrapper margin-uni ">
          <div className="imge-logo">
              <img src={imgLogo} alt="imageLogo" />
            </div>
            <div className="menu">
                <nav className=" menu-items">
                  <ul className="menu-item" >
                    <li> <Link to= "/">Inicio</Link></li>
                    <li> <Link to="/gallery">Galeria</Link></li>
                    <li> <Link to="/about">Sobre</Link></li>
                    <li> <Link to="/profile">Perfil</Link></li>
                  </ul>
                </nav>
            </div>

            <div className="search-bar"> 
              <label htmlFor="search"> Procurar</label>
              <input id="search" type="text" />
            </div>
          </div>
        </header>
    </>
  )
} 