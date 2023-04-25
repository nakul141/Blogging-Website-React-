import { Link} from "react-router-dom";
import "./Register.css"

export default function Register() {
  return (
    <div className="register">
        <span className="registerTitle">Register</span>
      <form action="" className="registerForm">
        <label>Username</label>
        <input type="text" className="registerInput" placeholder="Enter your username...."/>

        <label>Email</label>
        <input type="text" className="registerInput" placeholder="Enter your Email...."/>

        <label>Password</label>
        <input type="text"className="registerInput" placeholder="Enter your Password...."/>
        <button className="registerButton">Register</button>
        <button className="registerLoginButton"><Link to="/login">Login</Link></button>
      </form>
    </div>
  )
}
