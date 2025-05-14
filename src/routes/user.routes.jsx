import {Routes , Route} from 'react-router-dom'
import Login from '../pages/Login'
import Register from '../pages/Register'
import UserProfile from '../pages/UserProfile'
import UserUpdate from '../pages/UserUpdate'
import Feed from '../pages/Feed'

const UserRoutes = ()=>{
    return(
        <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/profile" element={<UserProfile />}></Route>
            <Route path="/update" element={<UserUpdate />}></Route>
            <Route path='/feed' element={<Feed/>}></Route>
        </Routes>
    )
}

export default UserRoutes