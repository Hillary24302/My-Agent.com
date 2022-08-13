import "./Login.css"
import { Link } from "react-router-dom";

function Login() {
    return (
        <div className ="login">
            <span className ="loginTitle">Login</span>
            <form className ="loginForm">
                <label>Email or number</label>
                <input type ="text" className ="loginInput" placeholder ="Enter your email/number..."/>
                <label>Password</label>
                <input type ="password" className ="loginInput" placeholder ="Enter your password..."/>
                <span className ="loginPassword">Forgotton your password</span>
                <button className ="loginButton">Login</button>
            </form>
            <button className ="loginRegisterButton"><Link className="Link" to ="/Register">Register</Link></button>
        </div>
    )
}

export default Login
