import React from 'react';
import { Link } from 'react-router-dom'

//REDUX
import { connect } from 'react-redux'

//Components
import ProfileImage from '../../components/profileImage/ProfileImage'

//CSS
import './Header.css'

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            profileImage: <Link to='/login'><i className="far fa-user-circle"></i></Link>
        }
    }

    checkProfileImage = event => {
        if (this.props.userLogged) {
            this.state.profileImage = <ProfileImage profileImage={this.props.userLogged.profileImage} />;
        } else {
            this.state.profileImage = <Link to='/login'><i className="far fa-user-circle"></i></Link>;
        }
    }

    render() {
        this.checkProfileImage();
        return (
            <header>
                <Link to="/">
                    <i className="fas fa-shopping-cart"></i>
                    <h1>{this.props.title}</h1>
                </Link>

                <div className="buttoner">
                    {this.state.profileImage}
                    {/* {this.props.userLogged ?  <ProfileImage profileImage={this.props.userLogged.profileImage}/> : <Link to='/login'><i className="far fa-user-circle"></i></Link>} */}
                </div>
            </header>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        userLogged: state.userLogged
    }
}

export default connect(mapStateToProps)(Header);