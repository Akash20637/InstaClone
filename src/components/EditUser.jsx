import { useRef } from 'react'
import './EditUser.css'

const EditUser = () => {
    let fileref = useRef(null)

    const addFile = ()=>{
        fileref.current.click()
    }

    return (
        <div className='register-form'>
            <div className="update-image" onClick={addFile}></div>
            <form action="">

                <div className="file">
                    <label htmlFor='image'>Select Image</label>
                    <input ref={fileref} type='file' name="user-image" id="image"></input>
                </div>
                
                <div className="name">
                    <input type="text" name="name" id="name" placeholder='Update your name..' />
                </div>

                <div className="bio">
                    <input type="text" name="bio" id="bio" placeholder='Update your bio..' />
                </div>

                <button className='register-button'>Update</button>
            </form>

        </div>
    )
}

export default EditUser