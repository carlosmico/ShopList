import React from 'react';
import './App.css';

//FIREBASE
import FIREBASE from 'firebase';
import FIREBASECONF from './config/firebase'

//Components
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Login from './components/login/Login'
import ShopList from './components/shopList/ShopList';
import Item from './components/item/Item'

//GLOBAL VARIABLES
var database;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      shopList: [],
      cartList: []
    }

    this.configFirebase();

    this.getAllItems();
  }

  configFirebase = () => {
    let config = {
      apiKey: FIREBASECONF.apiKey,
      authDomain: FIREBASECONF.authDomain,
      databaseURL: FIREBASECONF.databaseURL,
      projectId: FIREBASECONF.projectId,
      storageBucket: FIREBASECONF.storageBucket,
      messagingSenderId: FIREBASECONF.messagingSenderId,
      appId: FIREBASECONF.appId
    };

    FIREBASE.initializeApp(config);

    database = FIREBASE.database();

    //GOOGLE AUTHENTICATION
    var provider = new FIREBASE.auth.GoogleAuthProvider();

    FIREBASE.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;

      console.log(user)
      // ...
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...

      console.log(error)
    });
  }

  getAllItems = () => {
    database.ref('items').on("value", (data) => {
      let items = data.val();

      let components = [];

      //Recorremos el objeto que devuelve firebase que es un objeto de objetos con la información de los items
      for (const itemId in items) {
        if (items.hasOwnProperty(itemId)) {
          let item = items[itemId];

          //Por cada item que recuperamos de la BD añadimos uno nuevo al array de items del estado
          let itemComponent = < Item key={item.id} id={item.id} title={item.title} units={item.units} updateItem={this.updateItem} removeEvt={this.removeItem} />

          components.push(itemComponent);
        }
      }

      this.setState({
        shopList: components
      });
    });
  }

  addItem = (event) => {
    if (event.key === 'Enter') {
      let itemId = Date.now();

      let itemTitle = event.target.value;

      database.ref('items/' + itemId).set({
        id: itemId,
        title: itemTitle,
        units: 1
      }).catch(err => console.log(err));

      event.target.value = "";
    }
  }

  updateItem = (state) => {
    database.ref(`items/${state.id}`).update({
      units: state.units
    });
  }

  removeItem = (event) => {
    let componentId = event.target.parentNode.parentNode.parentNode.id;

    if (componentId !== "") {
      //Obtenemos la referencia del item de la bd mediante el id y lo eliminamos
      let itemRef = database.ref('items/' + componentId);
      itemRef.remove();
    }
  }

  render() {
    return (
      <div className="App" >
        <Header title="ShopList" />

        <Login/>

        {/* LISTAS*/}
        <div className='lists' >
          {/* <ShopList title='Shop List' items={this.state.shopList} addItem={this.addItem}/> */}
        </div>

        {/* <Footer copyright="© All rights reserved. 2019 Carlos Micó." /> */}
      </div>
    );
  }
}

export default App;