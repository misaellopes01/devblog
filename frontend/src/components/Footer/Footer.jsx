import WhiteLogo from '../../assets/whiteLogo.svg'
import "./Footer.css"


export function Footer() {
  return(
    <>
      <footer className="footer">
        <img className="img-footer" src={WhiteLogo} alt="" />
        <span className="copy-right"> DevTeam 2023. Building the future. </span>
        <span></span>
      </footer>
    
    </>
  )
}