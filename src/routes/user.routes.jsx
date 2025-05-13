import {Routes , Route} from 'react-router-dom'
import Login from '../pages/Login'
import Register from '../pages/Register'
import UserProfile from '../pages/UserProfile'

const UserRoutes = ()=>{
    return(
        <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/Register" element={<Register />}></Route>
            <Route path="/UserProfile" element={<UserProfile />}></Route>
        </Routes>
    )
}

export default UserRoutes