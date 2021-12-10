import {Navigate, useNavigate} from 'react-router-dom'

function Post() {
    const status = 200

    const navigate = useNavigate()

    const klik = () => {
        console.log('dikzak')
        navigate('/about')
    }

    if(status === 404){
        <Navigate to='/notfound'/>
    }

    return (
        <div>
           puist
           <button onClick={klik}>klik</button>
        </div>
    )
}

export default Post
