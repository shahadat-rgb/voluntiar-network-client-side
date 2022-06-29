import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut,} from "firebase/auth";
import { useEffect, useState } from "react";
import firbaseInitialize from "../firebase/firbase.init";

firbaseInitialize()

const useFirebase = () =>{
    const [user,setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true);


    const auth = getAuth()
    // google signin section
    const googleProvider = new GoogleAuthProvider()
    const handleGoogleSignIn = () =>{ 
        return  signInWithPopup(auth,googleProvider)      
    }


     /* logout apply will be use in  navbar componenet.
    justi create logout method in here.that' it */

    const logOut = () =>{
        setIsLoading(true)
        signOut(auth)
        .then(()=>{
            setUser({})
        }).finally(()=> setIsLoading(false))
    }

   // obserbe whether user auth state changed or not
   useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
       if (user) {
           setUser(user)
       }
       setIsLoading(false);
     })
} ,[auth])

    return {
        user,
        logOut,
        handleGoogleSignIn,
        auth,
        isLoading,
        setIsLoading
    }

}

export default useFirebase;










