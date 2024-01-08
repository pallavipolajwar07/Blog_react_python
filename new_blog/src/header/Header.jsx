import "./header.css";

const Header = () => {
    return (
    <div className='header'>
        <div className="headerTitle">
            <span className="headerTitleSm">React & Node</span>
            <span className="headerTitleLg">Blog</span>
        </div>
        <img className="headerImg" src="https://images.pexels.com/photos/965117/pexels-photo-965117.jpeg" alt="" />
    </div>
);
}
export default Header;