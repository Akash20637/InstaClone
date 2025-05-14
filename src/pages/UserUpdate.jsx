import './UserUpdate.css'
import EditUser from '../components/EditUser'

const UserUpdate = ()=>{
    return (
        <div className='updateUser'>
            <div className="update-header">
                <p>Username</p>
            </div>

            <EditUser/>
        </div>
    )
}

export default UserUpdate