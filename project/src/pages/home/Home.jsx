import Post from "../../Allpages/Posts/Post";
import Sidebar from "../../Allpages/SideBar/Sidebar";
import Header from "../../Allpages/header/Header"
import "./Home.css"

export default function Home() {
  return (
    <>
    <Header/>
    <div className="home">
      <Post/>
      {/* <Sidebar/> */}
    </div>
    </>
  );
}
