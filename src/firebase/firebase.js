//FIREBASE
import FIREBASE from 'firebase';
import FIREBASECONF from './config'

const configFirebase = () => {
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
}

export{configFirebase}