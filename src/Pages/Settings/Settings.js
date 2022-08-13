import Sidebar from "../../Pages/Sidebar/Sidebar"
import "./Settings.css"
import UserImg from '../../Images/profile.jpeg';

function Setting() {
    return (
        <div className ="settings">
            <div className ="settingWrapper">
               <div className ="settingTitle">
                   <span className ="settingUpdateTitle">Update Your Account</span>
                   <span className ="settingDeleteTitle">Delete Account</span>
               </div>
               <form className ="settingForm">
                    <label>Profile Picture</label>
                    <div className ="settingpp">
                        <img 
                            className="writeImg"
                            src = {UserImg} 
                            alt ="jack"
                        />
                        <label htmlFor ="fileInput">
                        <i className="settingppIcon far fa-user-circle"></i>
                        </label>
                        <input type ="file" id ="fileInput" style={{display:"none"}}/>
                    </div>
                    <label>Username</label>
                    <input type ="text" placeholder ="Hillary"/>
                    <label>Email</label>
                    <input type ="email" placeholder ="hillaryejike24302@gmail.com"/>
                    <label>Password</label>
                    <input type ="password"/>
                    <label>Phone</label>
                    <input type ="email" placeholder ="08128774639"/>
                    <button className ="settingSubmit">Update</button>
               </form>
            </div>
        </div>
    )
}

export default Setting
