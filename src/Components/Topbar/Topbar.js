import "./Topbar.css"
import { Link } from "react-router-dom";
import React, {useState} from "react"
import UserImg from '../../Images/profile.jpeg';

const Topbar = () => {
    const [isOpen,setIsOpen] = useState(false)
    const user = true;
    return(
        <div className = "top">
            <div className = "topleft">
                <i className="topicon fab fa-facebook-square"></i>
                <i className="topicon fab fa-twitter-square"></i>
                <i className="topicon fab fa-linkedin-in"></i>
                <i className="topicon fab fa-instagram-square"></i>
            </div>
            <div className={isOpen? "showing":"topCenter"}>
                <ul className ="topList">
                    <li className ="toplistitem"><Link className="Link" to ="/">HOME</Link></li>
                    <li className ="toplistitem"><Link className="Link" to ="/">HOW IT WORKS</Link></li>
                    <li className ="toplistitem"><Link className="Link" to ="/">BLOG</Link></li>
                    <li className ="toplistitem"><Link className="Link" to ="/Write">POST</Link></li>
                    <li className ="toplistitem">{user && "LOGOUT"}</li>
                </ul>
            </div>
            <div className = "topright">
                {
                    user ? (
                        <img 
                            className="topImg"
                            src = {UserImg} 
                            alt ="jack"
                        />
                    ) : (
                       <div className="showing topCenter">
                            <ul className ="topList">
                                    <li className ="toplistitem">
                                        <Link className="Link" to ="/Login">LOGIN</Link>
                                    </li>
                                    <li className ="toplistitem">
                                        <Link className="Link" to ="/Register">REGISTER</Link>
                                    </li>
                            </ul>
                       </div>
                    )
                }
                <i className="topsearchicon fas fa-search"></i>
                <i className="topbaricon fas fa-bars" onClick ={() =>setIsOpen(!isOpen)}></i>
                {/* <i className="topbaricon fas fa-bars" onClick ={() =>alert("Hello")}></i> */}
            </div>
        </div>
    )
}
export default Topbar