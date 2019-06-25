import React from 'react'
import { Link } from 'react-router-dom'

//CSS
import './ProfileImage.css'

class ProfileImage extends React.Component {
    constructor(props, context) {
        super(props);

        this.state = {
            profileImage: this.props.profileImage
        }
    }

    render() {
        return (
            <div className="ProfileImage">
                <Link to='/profile'>
                    <img src={this.state.profileImage} alt="Profile" onClick={this.redirectToProfile} />
                </Link>
            </div>
        )
    }
}

export default ProfileImage;