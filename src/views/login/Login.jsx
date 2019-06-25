import React from 'react'

//Firebase
import FIREBASE from 'firebase'

//REDUX
import ACTIONS from '../../redux/actions'
import STORE from '../../redux/store'

//CSS
import './Login.css'

class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    login = (event) => {
        //GOOGLE AUTHENTICATION
        var provider = new FIREBASE.auth.GoogleAuthProvider();

        FIREBASE.auth().signInWithPopup(provider).then((result)=> {
          // This gives you a Google Access Token. You can use it to access the Google API.
          var token = result.credential.accessToken;

          // The signed-in user info.
          var googleUser = result.user;
          
          let userLogged = {
              name: googleUser.displayName,
              email: googleUser.email,
              profileImage: googleUser.photoURL
          }

          // Save the userLogged in the Redux Store State
          STORE.dispatch({
            type: ACTIONS.USERS.LOGIN,
            payload:userLogged
          });

          // Redirect to shoplist page
          this.props.history.push(`/shoplist`)
        }).catch(function (error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;

          console.log(error)
        });
    }

    render() {
        return (
            <div className='Login'>
                <div className='Content'>
                    <h3>Login with Google</h3>

                    <p>At the moment you only can use our app with an existent Google account.</p>

                    <img src="https://www.stickpng.com/assets/images/5a951939c4ffc33e8c148af2.png" alt="Login" onClick={this.login}/>
                </div>
            </div>
        )
    }
}

export default Login;