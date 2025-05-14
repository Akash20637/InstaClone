import './Feed.css'
import { FaHeart } from 'react-icons/fa';
import logo  from '../assets/Instagram-logo.svg'

const Feed = () => {
    return (
        <>
            <div className="logo-header">
                <img src={logo} alt="" />
            </div>
            <div className='feed-page'>

                <div className="feed">

                    <div className="user-section">
                        <div className="img-con"></div>
                        <div className="username">
                            <p>Username</p>
                        </div>
                    </div>

                    <div className="image-section"></div>

                    <div className="like">
                        <FaHeart className='heart' /> 0 Likes
                    </div>
                    <div className="caption">
                        <p>This is the post</p>
                    </div>

                </div>

                <div className="feed">

                    <div className="user-section">
                        <div className="img-con"></div>
                        <div className="username">
                            <p>Username</p>
                        </div>
                    </div>

                    <div className="image-section"></div>

                    <div className="like">
                        <FaHeart className='heart' /> 0 Likes
                    </div>
                    <div className="caption">
                        <p>This is the post</p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Feed