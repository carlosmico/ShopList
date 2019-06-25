import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

//REDUX IMPORTS
import STORE from '../../redux/store'
import ACTIONS from '../../redux/actions'

//CSS
import './Profile.css'

class Profile extends React.Component {
    constructor(props) {
        super(props);
    }

    logout = () => {
        STORE.dispatch({
            type: ACTIONS.USERS.LOGOUT
        });

        this.props.history.push('/');
    }

    render() {
        return (
            <div className="Profile">
                <img src={this.props.userLogged.profileImage} alt="" />

                <p className='Name'>{this.props.userLogged.name}</p>
                <p className='Email'>{this.props.userLogged.email}</p>

                <button onClick={this.logout}>Logout</button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        userLogged: state.userLogged
    }
}

export default connect(mapStateToProps)(Profile)