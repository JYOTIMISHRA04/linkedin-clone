import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import './Login.css';
import { auth } from './firebase';
import { login } from './features/userSlice';




function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const dispatch = useDispatch();

  const loginToApp = (e) => {
    e.preventDefault();

    auth.signInWithEmailAndPassword(email, password).then(
      (userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            profileUrl: userAuth.user.profileUrl,
          })
        );
      }).catch((error) => alert(error));
  };

  const register = () => {
    if (!name) {
      return alert("please enter a full name");
    }

    auth.createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user.updateProfile({
          displayName: name,
          photoUrl: profilePic,
        })
          .then(() => {
            dispatch(login({
              email: userAuth.user.email,
              uid: userAuth.user.uid,
              displayName: userAuth.user.displayName,
              photoUrl: userAuth.user.photoUrl
            }));

          })
      }).catch(error => alert(error));
  };


  return (
    <div className="login-form">
      <h1 className='h1'>Linked
        <img className="img1" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/1200px-LinkedIn_logo_initials.png" alt="LinkedIn logo"></img>

      </h1>

      <p className='p'>Welcome to your professional community</p>
      <form >
        <input
          className='name'
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder='name'
          type="text" />
        {/* </input> */}

        <input
          className='email'
          value={email}
          onChange={e => setEmail(e.target.value)}

          placeholder='Email or phone number'
          type="text" />

        <input
          className='password'
          placeholder='Password (6 + characters)'
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button className='agree'
          onClick={loginToApp}
          type='submit'>
          Sign in
        </button>

      </form>
      <p>
        Don't have an account? {" "}
        <span className='login__register' onClick={register}>Register Now</span>
      </p>
      <img className='img' src="https://static.licdn.com/aero-v1/sc/h/dxf91zhqd2z6b0bwg85ktm5s4" alt="img"></img>

    </div>
  );

}

export default Login;