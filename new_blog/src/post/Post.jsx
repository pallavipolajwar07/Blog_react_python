import "./post.css";

const Post = () => {
    return( 
    <div className="post">
        <img className="postImg" src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg" alt="" />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
            </div>
            <span className="postTitle">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            </span>
            <hr></hr>
            <span className="postDate">1 hour ago</span>
        </div>
        <p className="postDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque illo vel consequuntur minus aspernatur, nostrum error animi dolorem earum, est repellat quas unde aliquid voluptates enim voluptatum id quidem? Error.</p>
    </div>
    
    );
}

export default Post;