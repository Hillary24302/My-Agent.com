import { useState } from "react";
import "./Header.css";

const Header = () => {

    const [display, setDisplay] = useState(true)

    return(
        <div className ="header">
                <div className ="headerTitle">
                    <span className ="headerTitleSm">Welcome to</span>
                    <span className ="headerTitleLg">MyAgent.com</span>
                </div>
                <div className = "headerText">
                    <h1 className = "headerTextBig">Find your new appartment here in Port Hacourt.</h1>
                    <p className = "headerTextMedium">Connect with your house/land agent at your comfort zone.</p>
                    <p className = "headerTextSmall">Ready to search? Enter the name of the city and the location.</p>

                    <div className = "box">
                        <form> 
                            <input type = "text" className="boxtext" name ="" placeholder ="I am looking for..." ></input>
                            <input type = "submit" name ="" value ="Search" ></input>
                        </form>
                    </div>
                    <div className="displayme">
                            <div className={display? "red" : "white"}>
                                
                            </div>
                            <button onClick={() => setDisplay(!display)}>Torggle me</button> {}
                    </div>
                </div>
        </div>
    )
}
export default Header