import { Link} from "react-router-dom";
import "./Login.css"

export default function Login() {
  return (
    <div className="login">
        <span className="loginTitle">Login</span>
      <form action="" className="loginForm">
        <label>Email</label>
        <input type="text" className="loginInput" placeholder="Enter your Email...."/>
        <label>Password</label>
        <input type="text"className="loginInput" placeholder="Enter your Password...."/>
        <button className="loginButton">Login</button>
        </form>
        <button className="loginRegisterButton"><Link to="/register">Register</Link></button>
      
    </div>
  )
}
