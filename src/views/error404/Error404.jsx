import React from 'react'
import {Link} from 'react-router-dom'

//CSS
import './Error.css'

const Error404 = (props) =>{
    return(
        <div className="Error404">
            <div className='Content'>
                <p className='Oops'>Oops!</p>

                <p className='Sorry'>Sorry, we can't find that page.</p>

                <p className='ErrorCode'>Error code: 404</p>

                <Link to='/' className='LinkHomePage'>Return to the HomePage</Link>
            </div>
        </div>
    );
}

export default Error404;