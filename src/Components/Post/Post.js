import "./Post.css"
import UserImg from '../../Images/postfurniture.png';


function Post() {
    return (
        <div>
            <div className ="post">
                <img 
                    className="postImg"
                    src = {UserImg} 
                    alt ="jack"
                />
                <div className ="postInfor">
                        <div className ="postCats">
                            <span className ="postCat">Choba </span>
                            <span className ="postCat">Port Harcourt</span>
                        </div>
                        <div className ="postTitle">
                            2 bed room flat
                        </div>
                        <div className ="postTitleNgn">
                            NGN 235,000
                        </div>
                        <hr />
                        <span className ="postDate"> 1 hour ago </span>
                        <div className = "postDesc">
                            <p>The definit integral is the integration of the function between two limits The definit integral is the integration of the function between two limits</p>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Post
