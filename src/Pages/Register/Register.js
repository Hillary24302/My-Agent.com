import "./Register.css"
import { Link } from "react-router-dom";

function Register() {
    return (
        <div className ="register">
            <span className ="registerTitle">Register</span>
            <form className ="registerForm">
                <label>Username</label>
                <input type ="text" className ="registerInput" placeholder ="Enter your username..."/>
                <label>Email</label>
                <input type ="text" className ="registerInput" placeholder ="Enter your email..."/>
                <label>Password</label>
                <input type ="password" className ="registerInput" placeholder ="Enter your password..."/>
                <label>Phone number</label>
                <input type ="number" className ="registerInput" placeholder ="Enter your phone number..."/>
                <input type="checkbox" className="registercheck"/>
                <label className="registerlabel">I agree with rules</label>
                <button className ="registerButton">Register</button>
            </form>
            <button className ="registerLoginButton"><Link className="Link" to ="/Login">Login</Link></button>
        </div>
    )
}

export default Register
