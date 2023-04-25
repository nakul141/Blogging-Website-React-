import "./Single.css"
import Sidebar from "../../Allpages/SideBar/Sidebar";
import SinglePost from "../../Allpages/singlePost/SinglePost";
export default function Single() {
  return (
    <div className="single">
        <SinglePost/>

      <Sidebar/>
    </div>
  )
}
