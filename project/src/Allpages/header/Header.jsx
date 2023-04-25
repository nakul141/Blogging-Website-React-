import "./Header.css"

export default function Header() {
  return (
    <div className="header">
    <div className="headerTitles">
        {/* <span className="headerTitleSm">React & Node</span> */}
        <span className="headerTitleLg">Blogging Website</span>
    </div>
    <img 
    className="headerImg"
    src="./images/pro1.jpeg" alt="" />
    </div>
  );
}
