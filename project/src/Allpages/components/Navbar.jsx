import {Link} from "react-router-dom";
import "./Navbar.css"

export default function Navbar() {
  const user = false
  return (
    <div className='nav'>
      <div className="navLeft">
      <i className="navIcon fa-brands fa-square-facebook"></i>  
      <i className="navIcon fa-brands fa-square-twitter"></i>
      <i className="navIcon fa-brands fa-square-pinterest"></i>
      <i className="navIcon fa-brands fa-square-instagram"></i>
      </div>
      <div className="navCenter"> 
      <ul className = "navList">
      <li className="navListItem"><Link to="/">HOME</Link></li>
        <li className="navListItem"><Link to="/about">ABOUT</Link></li>
        <li className="navListItem"><Link to="/settings">UPDATE</Link></li>
        <li className="navListItem"><Link to="/write">WRITE</Link></li>
        <li className="navListItem">
          {user && "LOGOUT"}
        </li>
      </ul>
       </div>
      <div className="navRight"> 
      {
        user ? (
          <img 
       className="navImg"
      src="./images/download.jpeg" alt="" />
        ):(
          <ul className="navList">
            <li className="navListItem">
            <Link className="link" to="/login">LOGIN</Link>
            </li>
            <li className="link" >
            <Link className="link" to="/register">REGISTER</Link>
              
            </li>
          </ul>
        )
      }
      
      <i class="navSearchIcon fa-solid fa-magnifying-glass"></i>
       </div>
    </div>
  )
}
