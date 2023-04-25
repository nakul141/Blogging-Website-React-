import "./Settings.css"
import Sidebar from "../../Allpages/SideBar/Sidebar"

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
            <span className="settingsUpdateTitle">Update Your Account</span>
            <span className="settingsDeleteTitle">Delete Your Account</span>
        </div>
        <form className="settingsForm">
            <label>Profile Picture</label>
            <div className="settingsPP">
                <img src="./images/download.jpeg" alt="" />
                <label htmlFor="fileInput">
                <i className="SettingPP fa-regular fa-circle-user"></i>
                </label>
                <input type="file" id="fileInput" style={{display:"none"}}/>
            </div>
            <label>UserName</label>
            <input type="text" placeholder="Nakul"/>
            <label>Email</label>
            <input type="email" placeholder="nakul@gmail.com"/>
            <label>Password</label>
            <input type="password"/>
            <button className="settingsSubmit">Update</button>
        </form>
      </div>
      {/* <Sidebar/> */}

    </div>
  )
}
