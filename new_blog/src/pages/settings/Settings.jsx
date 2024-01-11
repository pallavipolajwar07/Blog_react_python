import Sidebar from "../../components/sidebar/Sidebar";
import "./settings.css"

const Settings = () => {
    return (
    <div>
        <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">Update Your Account</span>
                <span className="settingsDeleteTitle">Delete Account</span>
            </div>
            <form className="settingsForm">
                <label>Profile Picture</label>
                <div className="settingsPP">
                    <img src="https://images.pexels.com/photos/3764119/pexels-photo-3764119.jpeg" alt="" className="settingsPPImg" />
                    <label htmlFor="fileInput">
                    <i className="settingsPPIcon fa-regular fa-user"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display:"none"}}></input>
                </div>
                <label>Username</label>
                <input type="text" placeholder="Pallavi"/>
                <label>Email</label>
                <input type="email" placeholder="xxxxxxxxx@gmail.com"/>
                <label>Password</label>
                <input type="password" />
                <button className="settingsSubmit">Update</button>
            </form>
        </div>
        <Sidebar/>
    </div>);
}

export default Settings;