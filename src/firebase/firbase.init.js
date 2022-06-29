import { initializeApp } from 'firebase/app';
import firebaseConfig from './firbase.config';
const firbaseInitialize = () =>{
 initializeApp(firebaseConfig)
}

export default firbaseInitialize;