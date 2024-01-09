import "./singlePost.css";

const SinglePost = () => {
    return (
    <div className="singlePost">
        <div className="singlePostWrapper">
            <img src="https://images.pexels.com/photos/126271/pexels-photo-126271.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="singlePostImage" />
            <h1 className="singlePostTitle">
                Lorem ipsum dolor sit amet
                <div className="singlePostEdit">
                    <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
                    <i className="singlePostIcon fa-solid fa-trash"></i>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor">Author: <b>Pallavi</b></span>
                <span className="singlePostDate">1 hour ago</span>
            </div>
            <p className="singlePostDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure velit tempora eius earum nihil? Necessitatibus, dolores. Autem impedit blanditiis, nulla necessitatibus quos earum nesciunt fuga ea dignissimos neque vitae reprehenderit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure velit tempora eius earum nihil? Necessitatibus, dolores. Autem impedit blanditiis, nulla necessitatibus quos earum nesciunt fuga ea dignissimos neque vitae reprehenderit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure velit tempora eius earum nihil? Necessitatibus, dolores. Autem impedit blanditiis, nulla necessitatibus quos earum nesciunt fuga ea dignissimos neque vitae reprehenderit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure velit tempora eius earum nihil? Necessitatibus, dolores. Autem impedit blanditiis, nulla necessitatibus quos earum nesciunt fuga ea dignissimos neque vitae reprehenderit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure velit tempora eius earum nihil? Necessitatibus, dolores. Autem impedit blanditiis, nulla necessitatibus quos earum nesciunt fuga ea dignissimos neque vitae reprehenderit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure velit tempora eius earum nihil? Necessitatibus, dolores. Autem impedit blanditiis, nulla necessitatibus quos earum nesciunt fuga ea dignissimos neque vitae reprehenderit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure velit tempora eius earum nihil? Necessitatibus, dolores. Autem impedit blanditiis, nulla necessitatibus quos earum nesciunt fuga ea dignissimos neque vitae reprehenderit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure velit tempora eius earum nihil? Necessitatibus, dolores. Autem impedit blanditiis, nulla necessitatibus quos earum nesciunt fuga ea dignissimos neque vitae reprehenderit.</p>
        </div>
    </div>);
}

export default SinglePost;