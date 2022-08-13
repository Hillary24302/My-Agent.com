import "./Footer.css"
import LogoImg from '../../Images/hilltech.png';


const Footer = () => {
    return (
        <>
            <div className="footer">
               <div className = "footerCenter">
                    <ul className ="footerList">
                        <li className ="footerTitle">Call 08128774639</li>
                        <li className ="footerTitle">Contact us</li>
                        <li className ="footerTitle">About us</li>
                        <li className ="footerTitle">Policy and privacy</li>
                        <li className ="footerTitle">Our vission</li>
                        <li className ="footerTitle">Our mission</li>
                    </ul>
                </div>
               
                <div className = "footerLogo">
                        <img 
                             className="logoImg"
                             src = {LogoImg} 
                             alt ="jack"
                         />
                </div>
            </div>
            <hr className = "hline" />
            <p className ="hillz">Powered by HillzTech 2022</p>
            
        </>
    )
}
export default Footer
