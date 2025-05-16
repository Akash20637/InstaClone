import React, { useEffect, useState } from 'react'
import instaLogo from '../assets/Instagram-logo.svg'
import './UserProfile.css'
import axios from 'axios'

const UserProfile = ()=>{
    let [user, setUser] = useState({})

    useEffect(()=>{
        const getuser = async()=>{
            let userRes = await axios.get('http://localhost:3000/user/profile',{withCredentials : true})
        }
        getuser()
    }, [])
    return (
        <div className='user-profile'>

            <div className='user-header'>User_name</div>
            
            <div className="user-info">

                <div className="user-image">
                    <img src={instaLogo} alt="" />
                    <div className="info">
                        <p>Name</p>
                        <p>Bio</p>
                    </div>
                </div>

                <div className="user-follower">
                    <div className="post">
                        <p className='text-center'>0</p>
                        <p>Posts</p>
                    </div>
                    <div className="follower">
                        <p className='text-center'>0</p>
                        <p>Followers</p>
                    </div>
                    <div className="following">
                        <p className='text-center'>0</p>
                        <p>Following</p>
                    </div>
                </div>

            </div>


            <div className="message-container">
                <button  className='follow'>Follow</button>
                <button className='message'>Message</button>
            </div>

            <div className="postContainer">
                <div className="user-post"></div>
            </div>
        
        </div>
    )
}

export default UserProfile