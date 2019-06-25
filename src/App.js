import React from 'react';
import './App.css';

//React Router
import { HashRouter, Route, Switch} from 'react-router-dom'

//FIREBASE
import { configFirebase } from './firebase/firebase'

//Components
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Main from './views/main/Main'
import Login from './views/login/Login'
import Profile from './views/profile/Profile'
import ShopList from './views/shopList/ShopList';
import Error404 from './views/error404/Error404';

class App extends React.Component {
  constructor(props) {
    super(props);

    //CONFIGURE FIREBASE IF NOT EXIST PREV CONFIGURATION
    configFirebase();
  }

  render() {
    return (
      <div className="App" >
       <HashRouter basename='/'>
          <Header title="ShopList"/>

          <Switch>
            <Route path='/' exact component={Main}>{console.log('he pintado el main')}</Route>
            <Route path='/login' exact component={Login} />
            <Route path='/profile' exact component={Profile}/>
            <Route path='/shoplist' exact component={ShopList} />
            <Route path='*' component={Error404}/>
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default App;