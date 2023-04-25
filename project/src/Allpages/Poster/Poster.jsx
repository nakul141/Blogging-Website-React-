
import "./Poster.css"

export default function Poster() {
  return (
    <div className="poster">
      <img 
      className="posterImg"
      src="./images/pro3.jpeg" alt="" />
      <div className="posterInfo">
        <div className="posterCats">
            <span className="posterCat">Music</span>
            <span className="posterCat">Life</span>
            </div>
            <span className="posterTitle">
                Lorem ipsum dolor sit amet
            </span>
            <hr/>
            <span className="posterDate">3 Hours ago</span>
             </div>
             <p className="posterDesc">
                Lorem ipsum dolor sit amet consectet ur adipisicing elit. Itaque provident sint ex id sunt nihil corrupti at doloremque praesentium accusantium expedita accusamus deserunt, dignissimos, atque nobis commodi animi fuga aperiam. Mollitia porro fugit ex!
                Lorem ipsum dolor sit amet consectet ur adipisicing elit. Itaque provident sint ex id sunt nihil corrupti at doloremque praesentium accusantium expedita accusamus deserunt, dignissimos, atque nobis commodi animi fuga aperiam. Mollitia porro fugit ex!Lorem ipsum dolor sit amet consectet ur adipisicing elit. Itaque provident sint ex id sunt nihil corrupti at doloremque praesentium accusantium expedita accusamus deserunt, dignissimos, atque nobis commodi animi fuga aperiam. Mollitia porro fugit ex!
             </p>
    </div>
  )
}

