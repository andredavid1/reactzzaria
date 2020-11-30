import firebase from 'firebase/app'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyBAGZjW7pUWcd-HSkWCiI6PCplTaeJvIn0',
  authDomain: 'reactzzariafirebase.firebaseapp.com',
  databaseURL: 'https://reactzzariafirebase.firebaseio.com',
  projectId: 'reactzzariafirebase',
  storageBucket: 'reactzzariafirebase.appspot.com',
  messagingSenderId: '663962955720',
  appId: '1:663962955720:web:e21abc97f63d2f17a35afd',
  measurementId: 'G-G0L75LYP7D'
}

firebase.initializeApp(config)

export default firebase
