import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { login, logout, selectUser } from "./features/userSlice";
import Header from "./Header";
import Sidebar from "./Sidebar.js";
import Feed from "./Feed";
import Login from "./Login";
import { auth } from "./firebase";
import Widget from "./Widget";


function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();


  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        //user logged in 
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoURL: userAuth.photoURL,
        }))
      } else {
        // user logged out
        dispatch(logout());
      }
    })
  }, []);

  return (
    <div className="app">


      {!user ? (
        <Login />
      ) : (
        <div>
          <Header />
          <div className="app__body">

            <Sidebar />
            <Feed />
            {/* widgets  */}
            <Widget />
          </div>

        </div>
      )}
    </div>
  );
}

export default App;
