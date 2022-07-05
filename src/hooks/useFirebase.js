import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import firbaseInitialize from "../firebase/firbase.init";

firbaseInitialize()

const useFirebase = () =>{
    const [user,setUser] = useState({})
    const [admin,setAdmin] = useState(false)
    const [isLoading, setIsLoading] = useState(true);
    const [events, setEvents] = useState([]);

    const auth = getAuth()
    // google signin section
    const googleProvider = new GoogleAuthProvider()
    const handleGoogleSignIn = () =>{ 
        return  signInWithPopup(auth,googleProvider)      
    }
    //  events of home page
    useEffect(() => {
        fetch("https://dry-scrubland-89748.herokuapp.com/add-voluntiar")
          .then((res) => res.json())
          .then((data) => setEvents(data));
      }, []);
    //  secure dashboard panel for user and admin
     
    useEffect(()=>{
        fetch(`https://dry-scrubland-89748.herokuapp.com/users/${user.email}`)
        .then(res => res.json())
        .then(data =>{
              setAdmin(data.admin)
        })
    },[user.email])
     
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
        admin,
        events,
        setUser,
        logOut,
        handleGoogleSignIn,
        auth,
        isLoading,
        setIsLoading
    }

}

export default useFirebase;










