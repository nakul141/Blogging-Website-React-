import "./SinglePost.css"

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img src="./images/pro1.jpeg" alt="" className="singlePostImg" />
        <h1 className="singlePostTitle">
            Lorem ipsum dolor sit amet.
            <div className="singlePostEdit">
            <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash-can"></i>
            </div>
        </h1>
        <div className="singlePostInfo">
            <span className="singlePostAuthor">Author: <b>Nakul</b></span>
            <span className="singlePostDate">2 hour ago</span>
        </div>
        <p className="singlePostDesc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel non similique at totam aliquam dignissimos quo quasi ut inventore. Dolorem error est rerum, officiis ex molestias minus, excepturi amet, quis molestiae assumenda. Iusto animi quas architecto laudantium ab facilis voluptatibus nihil inventore doloremque quibusdam, maiores deleniti soluta ad sunt fuga blanditiis. Quaerat sapiente nesciunt consequatur quas sumenda. Iusto animi quas architecto laudantium ab facilis voluptatibus nihil inventore doloremque quibusdam, maiores deleniti soluta ad sunt fuga blanditiis. Quaerat sapiente nesciunt consequatur quas sumenda. Iusto animi quas architecto laudantium ab facilis voluptatibus nihil inventore doloremque quibusdam, maiores deleniti soluta ad sunt fuga blanditiis. Quaerat sapiente nesciunt consequatur quas</p>
      </div>
    </div>
  )
}
